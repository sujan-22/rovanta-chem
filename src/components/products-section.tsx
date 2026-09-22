import Link from "next/link";

import { ProductRow } from "@/components/product-row";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { siteContent } from "@/content/site-content";

export function ProductsSection() {
    const { products } = siteContent;
    const featured = products.items.slice(0, 4);

    return (
        <section id="products" className="ground-paper-2 band scroll-mt-24">
            <div className="shell">
                <div className="grid gap-x-16 gap-y-10 lg:grid-cols-12">
                    <Reveal className="lg:col-span-6">
                        <SectionHeading
                            eyebrow={products.hero.eyebrow}
                            title={products.hero.title}
                            index="02"
                        />
                    </Reveal>

                    <Reveal
                        delay={0.08}
                        className="self-end lg:col-span-5 lg:col-start-8"
                    >
                        <p className="text-pretty type-lead max-w-[46ch] text-ink-soft">
                            {products.hero.description}
                        </p>
                    </Reveal>
                </div>

                <div className="mt-16 border-t border-ink md:mt-20">
                    {featured.map((product, index) => (
                        <Reveal
                            key={product.slug}
                            delay={Math.min(index * 0.06, 0.24)}
                        >
                            <ProductRow product={product} index={index} />
                        </Reveal>
                    ))}
                </div>

                <Reveal delay={0.1}>
                    <Link
                        href="/products"
                        className="group mt-12 inline-flex items-center gap-3 border-b border-ink pb-1.5 text-lg text-ink transition-colors hover:border-copper hover:text-copper"
                    >
                        All {products.items.length} product lines
                        <span
                            aria-hidden="true"
                            className="transition-transform duration-300 group-hover:translate-x-1"
                        >
                            &rarr;
                        </span>
                    </Link>
                </Reveal>
            </div>
        </section>
    );
}
