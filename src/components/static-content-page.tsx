import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { StaticPageContent } from "@/content/site-content";

interface StaticContentPageProps {
    content: StaticPageContent;
}

export function StaticContentPage({ content }: StaticContentPageProps) {
    return (
        <main>
            <PageHero
                eyebrow={content.eyebrow}
                title={content.title}
                description={content.description}
            />

            <section className="py-20 md:py-24">
                <div className="site-container">
                    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {content.sections.map((section, index) => (
                            <Reveal
                                key={section.title}
                                delay={(index % 3) * 0.07}
                            >
                                <article className="surface-card h-full p-6">
                                    <h2 className="font-heading text-xl font-bold text-ink">
                                        {section.title}
                                    </h2>

                                    {section.description ? (
                                        <p className="mt-3 leading-7 text-ink-soft">
                                            {section.description}
                                        </p>
                                    ) : null}

                                    {section.items?.length ? (
                                        <ul className="mt-4 grid gap-3">
                                            {section.items.map((item) => (
                                                <li
                                                    key={item}
                                                    className="border-l-2 border-verdigris pl-4 text-sm leading-6 text-ink-soft"
                                                >
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    ) : null}
                                </article>
                            </Reveal>
                        ))}
                    </div>

                    {content.cta ? (
                        <Reveal className="mt-12">
                            <div className="rounded-xl bg-ink p-8 text-[#f2efe8] md:flex md:items-center md:justify-between md:gap-10">
                                <div>
                                    <h2 className="font-heading text-2xl font-bold">
                                        {content.cta.title}
                                    </h2>

                                    <p className="mt-3 max-w-3xl leading-7 text-[#c9d2d6]">
                                        {content.cta.description}
                                    </p>
                                </div>

                                <Button
                                    asChild
                                    className="mt-6 shrink-0 bg-copper text-white hover:bg-copper-deep md:mt-0"
                                >
                                    {content.cta.href.startsWith("/") ? (
                                        <Link href={content.cta.href}>
                                            {content.cta.label}
                                            <ArrowRight className="ml-2 size-4" />
                                        </Link>
                                    ) : (
                                        <a href={content.cta.href}>
                                            {content.cta.label}
                                            <ArrowRight className="ml-2 size-4" />
                                        </a>
                                    )}
                                </Button>
                            </div>
                        </Reveal>
                    ) : null}
                </div>
            </section>
        </main>
    );
}
