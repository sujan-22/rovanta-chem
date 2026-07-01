export function AnimatedBackground() {
    return (
        <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden"
        >
            <div className="chemical-grid absolute inset-0 opacity-70" />
            <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-chart-2/15 blur-3xl" />
        </div>
    );
}
