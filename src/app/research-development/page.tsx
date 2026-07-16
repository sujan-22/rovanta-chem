import { PageHero } from "@/components/page-hero";
import { siteContent } from "@/content/site-content";
import { createPageMetadata } from "@/lib/metadata";

const content = siteContent.researchDevelopment;

export const metadata = createPageMetadata(
    content.hero.title,
    content.hero.description,
    "/research-development"
);

export default function ResearchDevelopmentPage() {
    return (
        <main>
            <PageHero {...content.hero} />

            <section className="py-20 md:py-24">
                <div className="site-container grid gap-5 md:grid-cols-3">
                    {content.items.map((item) => (
                        <article
                            key={item.title}
                            className="surface-card p-6"
                        >
                            <h2 className="font-heading text-xl font-bold">
                                {item.title}
                            </h2>
                            <p className="mt-3 leading-7 text-ink-soft">
                                {item.description}
                            </p>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
}
