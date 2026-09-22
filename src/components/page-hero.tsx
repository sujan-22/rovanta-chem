import Link from "next/link";

interface PageHeroProps {
    eyebrow: string;
    title: string;
    description: string;
}

/*
 * Interior page opener. Deliberately light rather than a dark band: interior
 * pages are long reads, and the old inverted header made every one of them
 * start with the same heavy slab.
 */
export function PageHero({ eyebrow, title, description }: PageHeroProps) {
    return (
        <section className="ground-paper-2 pt-16 pb-16 md:pt-24 md:pb-24">
            <div className="shell">
                <nav
                    aria-label="Breadcrumb"
                    className="label flex items-center gap-2 text-ink-faint"
                >
                    <Link href="/" className="transition-colors hover:text-ink">
                        Rovanta
                    </Link>
                    <span aria-hidden="true">/</span>
                    <span className="text-copper">{eyebrow}</span>
                </nav>

                <div className="mt-10 grid gap-x-16 gap-y-8 lg:grid-cols-12">
                    <h1 className="text-balance font-display type-display col-span-full text-ink lg:col-span-7">
                        {title}
                    </h1>

                    <p className="text-pretty type-lead col-span-full max-w-[52ch] self-end text-ink-soft lg:col-span-5">
                        {description}
                    </p>
                </div>
            </div>
        </section>
    );
}
