import { PageHero } from "@/components/page-hero";
import { siteContent } from "@/content/site-content";

export default function AdminPage() {
    const content = siteContent.adminDashboard;

    return (
        <main>
            <PageHero
                eyebrow={content.hero.eyebrow}
                title={content.hero.title}
                description={content.hero.description}
            />

            <section className="py-20 md:py-24">
                <div className="site-container">
                    <div className="rounded-xl border border-[#e8c79a] bg-[#fff6e8] p-5 text-sm leading-7 text-[#6b4a1e]">
                        {content.disclaimer}
                    </div>

                    <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {content.overviewMetrics.map((metric) => (
                            <article
                                key={metric.label}
                                className="surface-card border-l-4 border-l-copper p-6"
                            >
                                <p className="font-heading text-4xl font-bold">
                                    {metric.value}
                                </p>
                                <p className="mt-2 text-sm text-ink-soft">
                                    {metric.label}
                                </p>
                            </article>
                        ))}
                    </div>

                    <div className="surface-card mt-8 p-6">
                        <h2 className="font-heading text-2xl font-bold">
                            Planned modules
                        </h2>

                        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                            {content.modules.map((module) => (
                                <div
                                    key={module}
                                    className="rounded-lg border border-line bg-paper px-4 py-3 font-medium"
                                >
                                    {module}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
