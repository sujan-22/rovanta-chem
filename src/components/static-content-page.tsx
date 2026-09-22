import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { StaticPageContent } from "@/content/site-content";

interface StaticContentPageProps {
    content: StaticPageContent;
}

/*
 * Shared template for the narrative pages (R&D, sustainability, careers and
 * friends). Sections read as an indexed editorial list rather than a card grid.
 */
export function StaticContentPage({ content }: StaticContentPageProps) {
    return (
        <main>
            <PageHero
                eyebrow={content.eyebrow}
                title={content.title}
                description={content.description}
            />

            <section className="ground-paper band">
                <div className="shell">
                    <div className="border-t border-ink">
                        {content.sections.map((section, index) => (
                            <Reveal
                                key={section.title}
                                delay={Math.min(index * 0.06, 0.24)}
                            >
                                <article className="grid gap-x-16 gap-y-5 border-b border-line py-10 md:grid-cols-12 md:py-12">
                                    <div className="flex gap-6 md:col-span-5">
                                        <span className="label shrink-0 pt-2 text-ink-faint">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>

                                        <h2 className="text-balance font-display type-subtitle text-ink">
                                            {section.title}
                                        </h2>
                                    </div>

                                    <div className="md:col-span-6 md:col-start-7">
                                        {section.description ? (
                                            <p className="text-pretty leading-[1.85] text-ink-soft">
                                                {section.description}
                                            </p>
                                        ) : null}

                                        {section.items?.length ? (
                                            <ul className="mt-6 grid gap-3">
                                                {section.items.map((item) => (
                                                    <li
                                                        key={item}
                                                        className="text-pretty border-l border-copper pl-5 text-sm leading-relaxed text-ink-soft"
                                                    >
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : null}
                                    </div>
                                </article>
                            </Reveal>
                        ))}
                    </div>

                    {content.cta ? (
                        <Reveal>
                            <div className="mt-20 grid gap-x-16 gap-y-8 lg:grid-cols-12">
                                <div className="lg:col-span-7">
                                    <h2 className="text-balance font-display type-subtitle max-w-[20ch] text-ink">
                                        {content.cta.title}
                                    </h2>

                                    <p className="text-pretty mt-5 max-w-[56ch] leading-relaxed text-ink-soft">
                                        {content.cta.description}
                                    </p>
                                </div>

                                <div className="flex items-end lg:col-span-4 lg:col-start-9">
                                    {content.cta.href.startsWith("/") ? (
                                        <Link
                                            href={content.cta.href}
                                            className="group inline-flex items-center gap-3 border-b border-ink pb-1.5 text-lg text-ink transition-colors hover:border-copper hover:text-copper"
                                        >
                                            {content.cta.label}
                                            <span
                                                aria-hidden="true"
                                                className="transition-transform duration-300 group-hover:translate-x-1"
                                            >
                                                &rarr;
                                            </span>
                                        </Link>
                                    ) : (
                                        <a
                                            href={content.cta.href}
                                            className="group inline-flex items-center gap-3 border-b border-ink pb-1.5 text-lg text-ink transition-colors hover:border-copper hover:text-copper"
                                        >
                                            {content.cta.label}
                                            <span
                                                aria-hidden="true"
                                                className="transition-transform duration-300 group-hover:translate-x-1"
                                            >
                                                &rarr;
                                            </span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </Reveal>
                    ) : null}
                </div>
            </section>
        </main>
    );
}
