import { notFound } from "next/navigation";

import { PageHero } from "@/components/page-hero";
import { siteContent, isRouteHidden } from "@/content/site-content";

/*
 * Not launched yet: see `hiddenRoutes` in site-content. The page below is kept
 * intact and renders as soon as the route is removed from that list.
 */
export default function AdminPage() {
    if (isRouteHidden("/admin")) {
        notFound();
    }

    const content = siteContent.adminDashboard;

    return (
        <main>
            <PageHero
                eyebrow={content.hero.eyebrow}
                title={content.hero.title}
                description={content.hero.description}
            />

            <section className="ground-paper band">
                <div className="shell">
                    <div className="rounded-xl border border-[#e8c79a] bg-[#fff6e8] p-5 text-sm leading-7 text-[#6b4a1e]">
                        {content.disclaimer}
                    </div>

                    <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {content.overviewMetrics.map((metric) => (
                            <article
                                key={metric.label}
                                className="border-l-4 border-l-copper p-6"
                            >
                                <p className="font-display text-4xl font-bold">
                                    {metric.value}
                                </p>
                                <p className="mt-2 text-sm text-ink-soft">
                                    {metric.label}
                                </p>
                            </article>
                        ))}
                    </div>

                    <div className="mt-8 p-6">
                        <h2 className="font-display text-2xl font-bold">
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
