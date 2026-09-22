import Link from "next/link";

import type { ProductContent } from "@/content/site-content";
import { cn } from "@/lib/utils";

interface ProductRowProps {
    product: ProductContent;
    index: number;
    theme?: "light" | "dark";
}

/*
 * Products read as an indexed list on hairlines rather than a grid of cards.
 * The formula and CAS number sit in the middle column, since that is what a
 * buyer scans for.
 */
export function ProductRow({
    product,
    index,
    theme = "light",
}: ProductRowProps) {
    const dark = theme === "dark";

    return (
        <Link
            href={`/products/${product.slug}`}
            className={cn(
                "group relative block border-b py-8 transition-colors duration-300 md:py-10",
                dark
                    ? "border-white/12 hover:bg-white/4"
                    : "border-line hover:bg-paper-2",
            )}
        >
            <div className="grid grid-cols-1 items-baseline gap-x-10 gap-y-3 md:grid-cols-12">
                <span
                    className={cn(
                        "label md:col-span-1",
                        dark ? "text-on-ink-faint" : "text-ink-faint",
                    )}
                >
                    {String(index + 1).padStart(2, "0")}
                </span>

                <h3
                    className={cn(
                        "font-display text-2xl transition-colors md:col-span-4 md:text-3xl",
                        dark
                            ? "text-on-ink group-hover:text-copper-bright"
                            : "text-ink group-hover:text-copper",
                    )}
                >
                    {product.name}
                </h3>

                <p
                    className={cn(
                        "font-mono text-sm md:col-span-3",
                        dark ? "text-copper-bright" : "text-copper",
                    )}
                >
                    {product.formula}
                    {product.cas ? (
                        <span
                            className={cn(
                                "block pt-1 text-xs",
                                dark ? "text-on-ink-faint" : "text-ink-faint",
                            )}
                        >
                            CAS {product.cas}
                        </span>
                    ) : null}
                </p>

                <p
                    className={cn(
                        "text-pretty text-sm leading-relaxed md:col-span-3",
                        dark ? "text-on-ink-soft" : "text-ink-soft",
                    )}
                >
                    {product.shortDescription}
                </p>

                <span
                    aria-hidden="true"
                    className={cn(
                        "hidden text-lg transition-transform duration-300 group-hover:translate-x-1.5 md:col-span-1 md:block md:justify-self-end",
                        dark ? "text-copper-bright" : "text-copper",
                    )}
                >
                    &rarr;
                </span>
            </div>
        </Link>
    );
}
