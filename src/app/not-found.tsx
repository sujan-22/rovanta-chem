import Link from "next/link";

export default function NotFound() {
    return (
        <main className="ground-paper grid min-h-[70vh] place-items-center">
            <div className="shell">
                <p className="label text-copper">Error 404</p>

                <h1 className="text-balance font-display type-title mt-8 max-w-[14ch] text-ink">
                    This page does not exist.
                </h1>

                <p className="text-pretty type-lead mt-6 max-w-[46ch] text-ink-soft">
                    The page may have moved, or it may be part of the site that
                    is not published yet.
                </p>

                <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4">
                    <Link
                        href="/"
                        className="group inline-flex items-center gap-3 border-b border-ink pb-1.5 text-lg text-ink transition-colors hover:border-copper hover:text-copper"
                    >
                        Return home
                        <span
                            aria-hidden="true"
                            className="transition-transform duration-300 group-hover:translate-x-1"
                        >
                            &rarr;
                        </span>
                    </Link>

                    <Link
                        href="/products"
                        className="border-b border-transparent pb-1.5 text-lg text-ink-soft transition-colors hover:border-ink-soft hover:text-ink"
                    >
                        Browse products
                    </Link>
                </div>
            </div>
        </main>
    );
}
