/*
 * Footer artwork: a molecular lattice with the Rovanta mark seated in it.
 *
 * Three things converge here. The current mark is a hexagon; the company's
 * earlier logo was a node-and-bond molecule; and copper's defining property is
 * conduction. So the lattice is a honeycomb of nodes and bonds, and a copper
 * charge travels outward along the bonds from the mark, which sits as one cell
 * in the structure. The whole band is cropped by the footer's bottom edge.
 *
 * Geometry is computed once at module load, not per render, and the animation
 * is pure CSS so the component stays a server component.
 */

const VIEW_W = 1600;
const VIEW_H = 420;
const R = 52; // hexagon circumradius

interface Point {
    x: number;
    y: number;
}

/** Rounded key so hexagons sharing a vertex collapse to one node. */
const key = (p: Point) => `${Math.round(p.x)}:${Math.round(p.y)}`;

function buildLattice() {
    const nodes = new Map<string, Point>();
    const bonds = new Map<string, [Point, Point]>();

    const stepX = R * 1.5;
    const stepY = Math.sqrt(3) * R;

    for (let col = -1; col * stepX < VIEW_W + R * 2; col += 1) {
        for (let row = -1; row * stepY < VIEW_H + R * 2; row += 1) {
            const cx = col * stepX;
            const cy = row * stepY + (col % 2 === 0 ? 0 : stepY / 2);

            // Flat-top hexagon corners.
            const corners: Point[] = Array.from({ length: 6 }, (_, i) => {
                const angle = (Math.PI / 180) * (60 * i);
                return {
                    x: cx + R * Math.cos(angle),
                    y: cy + R * Math.sin(angle),
                };
            });

            corners.forEach((corner, i) => {
                nodes.set(key(corner), corner);

                const next = corners[(i + 1) % 6];
                const edgeKey = [key(corner), key(next)].sort().join("|");

                if (!bonds.has(edgeKey)) {
                    bonds.set(edgeKey, [corner, next]);
                }
            });
        }
    }

    return {
        nodes: [...nodes.values()],
        bonds: [...bonds.values()],
    };
}

const { nodes, bonds } = buildLattice();

/** Where the mark sits, and where the charge starts. */
const ORIGIN: Point = { x: R * 3, y: VIEW_H * 0.42 };
const MARK = R * 2.7;

/**
 * Walks the lattice outward from the mark to trace a conductor. Deterministic:
 * the turn pattern is fixed so server and client render the same path.
 */
function traceConductor(start: Point, turns: readonly number[]): string {
    const points: Point[] = [start];
    let current = start;

    for (const turn of turns) {
        const angle = (Math.PI / 180) * turn;
        const next = {
            x: current.x + R * Math.cos(angle),
            y: current.y + R * Math.sin(angle),
        };
        points.push(next);
        current = next;
    }

    return points.map((p, i) => `${i === 0 ? "M" : "L"}${p.x} ${p.y}`).join(" ");
}

const CONDUCTORS = [
    traceConductor(ORIGIN, [0, -60, 0, 60, 0, -60, 0, 60, 0, 0, -60, 0, 60, 0]),
    traceConductor(ORIGIN, [60, 0, 60, 0, -60, 0, 0, 60, 0, -60, 0, 0, 60]),
    traceConductor(ORIGIN, [-60, 0, 0, 60, 0, 0, -60, 0, 60, 0, 0, -60, 0]),
    traceConductor(ORIGIN, [0, 60, 0, -60, 0, 0, 60, 0, -60, 0, 0, 60, 0]),
];

export function FooterLattice() {
    return (
        <div
            aria-hidden="true"
            className="relative h-[190px] overflow-hidden border-t border-white/10 select-none md:h-[260px] lg:h-[300px]"
        >
            <svg
                viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
                preserveAspectRatio="xMinYMin slice"
                className="absolute inset-0 size-full"
            >
                <defs>
                    {/* Bonds fade out to the right so the lattice dissolves. */}
                    <linearGradient
                        id="lattice-fade"
                        gradientUnits="userSpaceOnUse"
                        x1="0"
                        y1="0"
                        x2={VIEW_W}
                        y2="0"
                    >
                        <stop offset="0" stopColor="#f4f1e9" stopOpacity="0.26" />
                        <stop offset="0.55" stopColor="#f4f1e9" stopOpacity="0.1" />
                        <stop offset="1" stopColor="#f4f1e9" stopOpacity="0.02" />
                    </linearGradient>

                    <radialGradient
                        id="origin-glow"
                        gradientUnits="userSpaceOnUse"
                        cx={ORIGIN.x}
                        cy={ORIGIN.y}
                        r={R * 2.6}
                    >
                        <stop offset="0" stopColor="#d7b071" stopOpacity="0.4" />
                        <stop offset="1" stopColor="#d7b071" stopOpacity="0" />
                    </radialGradient>
                </defs>

                <g stroke="url(#lattice-fade)" strokeWidth="1" fill="none">
                    {bonds.map(([a, b], i) => (
                        <line key={i} x1={a.x} y1={a.y} x2={b.x} y2={b.y} />
                    ))}
                </g>

                <g fill="url(#lattice-fade)">
                    {nodes.map((node, i) => (
                        <circle key={i} cx={node.x} cy={node.y} r="3" />
                    ))}
                </g>

                {/* Copper charge conducting away from the mark. */}
                <g
                    className="lattice-conductors"
                    fill="none"
                    strokeLinecap="round"
                >
                    {CONDUCTORS.map((path, i) => (
                        <g key={i} style={{ animationDelay: `${i * 2.1}s` }}>
                            {/* Halo and core share one animation so they travel together. */}
                            <path
                                d={path}
                                stroke="rgb(215 176 113 / 22%)"
                                strokeWidth="9"
                            />
                            <path
                                d={path}
                                stroke="#e8c68a"
                                strokeWidth="2.25"
                            />
                        </g>
                    ))}
                </g>

                <circle
                    cx={ORIGIN.x}
                    cy={ORIGIN.y}
                    r={R * 2.6}
                    fill="url(#origin-glow)"
                />

                {/*
                 * The mark lives inside the SVG rather than over it, so it stays
                 * locked to the lattice origin however the viewBox is sliced.
                 */}
                <image
                    href="/rovanta-mark.png"
                    x={ORIGIN.x - MARK / 2}
                    y={ORIGIN.y - MARK / 2}
                    width={MARK}
                    height={MARK}
                />
            </svg>
        </div>
    );
}
