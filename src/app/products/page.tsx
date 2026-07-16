import { PageHero } from "@/components/page-hero";
import { ProductCard } from "@/components/product-card";
import { siteContent } from "@/content/site-content";
import { createPageMetadata } from "@/lib/metadata";

const { products } = siteContent;

export const metadata = createPageMetadata(
    products.hero.title,
    products.hero.description,
    "/products"
);

export default function ProductsPage() {
    return (
        <main>
            <PageHero {...products.hero} />

            <section className="section-alt py-20 md:py-24">
                <div className="site-container">
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {products.items.map((product) => (
                            <ProductCard
                                key={product.slug}
                                product={product}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
