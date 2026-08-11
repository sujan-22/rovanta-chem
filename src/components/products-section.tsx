import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { ProductCard } from "@/components/product-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { siteContent } from "@/content/site-content";

export function ProductsSection() {
    const { products } = siteContent;

    return (
        <section
            id="products"
            className="section-alt scroll-mt-24 py-20 md:py-24"
        >
            <div className="site-container">
                <Reveal>
                    <SectionHeading
                        eyebrow={products.hero.eyebrow}
                        title={products.hero.title}
                        description={products.hero.description}
                    />
                </Reveal>

                <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {products.items.slice(0, 4).map((product, index) => (
                        <Reveal key={product.slug} delay={(index % 4) * 0.07}>
                            <ProductCard product={product} />
                        </Reveal>
                    ))}
                </div>

                <Reveal className="mt-10 flex justify-center">
                    <Button asChild variant="outline">
                        <Link href="/products">
                            View All Product Lines
                            <ArrowRight className="ml-2 size-4" />
                        </Link>
                    </Button>
                </Reveal>
            </div>
        </section>
    );
}
