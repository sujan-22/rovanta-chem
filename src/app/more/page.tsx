import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { siteContent } from "@/content/site-content";

export default function MorePage() {
    return (
        <main>
            <PageHero
                eyebrow="Index"
                title="All pages"
                description="Complete sitemap of the ROVANTA website."
            />

            <section className="py-20 md:py-24">
                <div className="site-container grid gap-6 md:grid-cols-3">
                    {siteContent.navigationGroups.map((group) => (
                        <article
                            key={group.title}
                            className="surface-card p-6"
                        >
                            <h2 className="font-heading text-2xl font-bold">
                                {group.title}
                            </h2>

                            <nav className="mt-5 grid gap-1">
                                {group.links.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className="flex items-center justify-between rounded-lg px-3 py-2.5 font-medium text-ink transition hover:bg-paper-deep"
                                    >
                                        {link.label}
                                        <ArrowRight className="size-4 text-copper-deep" />
                                    </Link>
                                ))}
                            </nav>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
}
