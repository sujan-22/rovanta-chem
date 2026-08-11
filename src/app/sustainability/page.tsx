import { PageHero } from "@/components/page-hero";
import { siteContent } from "@/content/site-content";
import { createPageMetadata } from "@/lib/metadata";

const { sustainability } = siteContent;

export const metadata = createPageMetadata(
    sustainability.hero.title,
    sustainability.hero.description,
    "/sustainability"
);

export default function SustainabilityPage() {
    return (
        <main>
            <PageHero {...sustainability.hero} />

            <section className="py-20 md:py-24">
                <div className="site-container">
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {sustainability.metrics.map((metric) => (
                            <article
                                key={metric.label}
                                className="border-l-4 border-l-verdigris py-2 pl-5"
                            >
                                <p className="font-heading text-4xl font-bold">
                                    {metric.value}
                                </p>
                                <p className="mt-2 text-sm leading-6 text-ink-soft">
                                    {metric.label}
                                </p>
                            </article>
                        ))}
                    </div>

                    <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {sustainability.initiatives.map((initiative) => (
                            <article
                                key={initiative.title}
                                className="surface-card p-6"
                            >
                                <h2 className="font-heading text-xl font-bold">
                                    {initiative.title}
                                </h2>
                                <p className="mt-3 leading-7 text-ink-soft">
                                    {initiative.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
