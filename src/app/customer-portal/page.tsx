import { FileText, History, LockKeyhole, ScrollText } from "lucide-react";

import { notFound } from "next/navigation";

import { PageHero } from "@/components/page-hero";
import { siteContent, isRouteHidden } from "@/content/site-content";

const icons = [FileText, ScrollText, History];

/*
 * Not launched yet: see `hiddenRoutes` in site-content. The page below is kept
 * intact and renders as soon as the route is removed from that list.
 */
export default function CustomerPortalPage() {
    if (isRouteHidden("/customer-portal")) {
        notFound();
    }

    const content = siteContent.customerPortal;

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

                    <div className="mt-8 grid gap-5 md:grid-cols-3">
                        {content.tabs.map((tab, index) => {
                            const Icon = icons[index];

                            return (
                                <article key={tab.title} className="p-6">
                                    <Icon className="size-7 text-copper" />
                                    <h2 className="mt-5 font-display text-xl font-bold">
                                        {tab.title}
                                    </h2>
                                    <p className="mt-3 leading-7 text-ink-soft">
                                        {tab.description}
                                    </p>
                                </article>
                            );
                        })}
                    </div>

                    <div className="mx-auto mt-10 max-w-md p-8 text-center">
                        <LockKeyhole className="mx-auto size-9 text-copper" />
                        <h2 className="mt-5 font-display text-2xl font-bold">
                            Secure sign-in coming later
                        </h2>
                        <p className="mt-3 leading-7 text-ink-soft">
                            Do not add a fake production login until the
                            authentication and backend are implemented.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
