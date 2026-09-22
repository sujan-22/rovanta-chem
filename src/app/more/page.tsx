import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { siteContent, visibleLinks } from "@/content/site-content";

export default function MorePage() {
    const groups = siteContent.navigationGroups
        .map((group) => ({ ...group, links: visibleLinks(group.links) }))
        .filter((group) => group.links.length > 0);

    return (
        <main>
            <PageHero
                eyebrow="Index"
                title="Every page on this site."
                description="A complete index of the Rovanta website, grouped by company, capability and commercial enquiry."
            />

            <section className="ground-paper band">
                <div className="shell grid gap-x-16 gap-y-16 md:grid-cols-3">
                    {groups.map((group, groupIndex) => (
                        <Reveal key={group.title} delay={groupIndex * 0.08}>
                            <nav aria-label={group.title}>
                                <p className="label border-t border-ink pt-4 text-copper">
                                    {group.title}
                                </p>

                                <div className="mt-2">
                                    {group.links.map((link) => (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            className="group flex items-center justify-between gap-4 border-b border-line py-4 text-ink transition-colors hover:text-copper"
                                        >
                                            {link.label}
                                            <span
                                                aria-hidden="true"
                                                className="text-copper transition-transform duration-300 group-hover:translate-x-1"
                                            >
                                                &rarr;
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                            </nav>
                        </Reveal>
                    ))}
                </div>
            </section>
        </main>
    );
}
