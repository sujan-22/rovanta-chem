import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type {
    BrandAccent,
    ProductContent,
} from "@/content/site-content";
import { cn } from "@/lib/utils";

const accentClasses: Record<BrandAccent, string> = {
    copper: "bg-copper",
    verdigris: "bg-verdigris",
    sulphate: "bg-sulphate",
    oxide: "bg-oxide",
    ink: "bg-ink",
};

interface ProductCardProps {
    product: ProductContent;
}

export function ProductCard({
    product,
}: ProductCardProps) {
    return (
        <Link
            href={`/products/${product.slug}`}
            className="surface-card group block h-full p-6 text-ink transition duration-200 hover:-translate-y-1 hover:shadow-[0_4px_8px_rgba(14,37,48,0.08),0_16px_36px_rgba(14,37,48,0.12)]"
        >
            <div
                className={cn(
                    "mb-5 h-2 rounded-full",
                    accentClasses[product.accent]
                )}
            />

            <p className="technical-label text-ink-soft">
                {product.category}
            </p>

            <p className="mt-2 font-mono text-sm text-ink-soft">
                {product.formula}
                {product.cas ? ` · CAS ${product.cas}` : ""}
            </p>

            <h3 className="mt-4 font-heading text-xl font-bold leading-tight">
                {product.name}
            </h3>

            <p className="mt-3 text-sm leading-7 text-ink-soft">
                {product.shortDescription}
            </p>

            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-copper-deep">
                View product
                <ArrowUpRight className="size-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
        </Link>
    );
}
