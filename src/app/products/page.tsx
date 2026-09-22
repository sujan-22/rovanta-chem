import { PageHero } from "@/components/page-hero";
import { ProductRow } from "@/components/product-row";
import { Reveal } from "@/components/reveal";
import { siteContent } from "@/content/site-content";
import { createPageMetadata } from "@/lib/metadata";

const { products } = siteContent;

export const metadata = createPageMetadata(
    products.hero.title,
    products.hero.description,
    "/products",
);

export default function ProductsPage() {
    return (
        <main>
            <PageHero {...products.hero} />

            <section className="ground-paper band">
                <div className="shell">
                    <div className="border-t border-ink">
                        {products.items.map((product, index) => (
                            <Reveal
                                key={product.slug}
                                delay={Math.min(index * 0.05, 0.3)}
                            >
                                <ProductRow product={product} index={index} />
                            </Reveal>
                        ))}
                    </div>

                    <Reveal>
                        <p className="text-pretty mt-12 max-w-[60ch] text-sm leading-relaxed text-ink-soft">
                            Grades, particle-size profiles and packaging are
                            matched to the application. Technical and safety
                            data sheets are issued on request.
                        </p>
                    </Reveal>
                </div>
            </section>
        </main>
    );
}
