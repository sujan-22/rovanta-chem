import { PageHero } from "@/components/page-hero";
import { siteContent } from "@/content/site-content";
import { createPageMetadata } from "@/lib/metadata";

const { industries } = siteContent;

export const metadata = createPageMetadata(
    industries.hero.title,
    industries.hero.description,
    "/industries"
);

export default function IndustriesPage() {
    return (
        <main>
            <PageHero {...industries.hero} />

            <section className="py-20 md:py-24">
                <div className="site-container">
                    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {industries.items.map((industry) => (
                            <article
                                key={industry.title}
                                className="surface-card p-6"
                            >
                                <h2 className="font-heading text-xl font-bold">
                                    {industry.title}
                                </h2>
                                <p className="mt-3 leading-7 text-ink-soft">
                                    {industry.description}
                                </p>
                            </article>
                        ))}
                    </div>

                    <div className="mt-14 max-w-4xl">
                        <p className="technical-label text-copper-deep">
                            {industries.exportReadiness.eyebrow}
                        </p>
                        <h2 className="mt-3 font-heading text-3xl font-bold">
                            {industries.exportReadiness.title}
                        </h2>
                        <p className="mt-5 leading-8 text-ink-soft">
                            {industries.exportReadiness.description}
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
