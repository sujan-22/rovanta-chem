import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { siteContent } from "@/content/site-content";

export function AboutSection() {
    const { about, company } = siteContent;

    return (
        <section id="about" className="scroll-mt-24 py-20 md:py-24">
            <div className="site-container">
                <Reveal>
                    <SectionHeading
                        eyebrow={about.hero.eyebrow}
                        title={about.hero.title}
                        description={about.hero.description}
                    />
                </Reveal>

                <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                    <Reveal>
                        <div>
                            <div className="grid gap-5">
                                {about.paragraphs.map((paragraph) => (
                                    <p
                                        key={paragraph}
                                        className="text-base leading-8 text-ink-soft"
                                    >
                                        {paragraph}
                                    </p>
                                ))}
                            </div>

                            <div className="mt-8">
                                <p className="technical-label text-copper-deep">
                                    Core Business Areas
                                </p>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    {about.businessAreas.map((area) => (
                                        <span
                                            key={area}
                                            className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-4 py-2 text-sm font-medium text-ink"
                                        >
                                            <Check className="size-3.5 text-verdigris-deep" />
                                            {area}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <Button asChild variant="outline" className="mt-8">
                                <Link href="/about">
                                    Learn More About Rovanta
                                    <ArrowRight className="ml-2 size-4" />
                                </Link>
                            </Button>
                        </div>
                    </Reveal>

                    <Reveal delay={0.08}>
                        <div className="surface-card overflow-hidden">
                            <div className="border-b border-line bg-paper-deep px-5 py-4">
                                <p className="technical-label text-copper-deep">
                                    Company Facts
                                </p>

                                <h3 className="mt-2 font-heading text-2xl font-bold text-ink">
                                    ROVANTA at a glance
                                </h3>
                            </div>

                            <dl>
                                {company.facts.map((fact) => (
                                    <div
                                        key={fact.label}
                                        className="grid gap-2 border-b border-line px-5 py-4 last:border-b-0 sm:grid-cols-[150px_1fr]"
                                    >
                                        <dt className="font-mono text-xs uppercase tracking-widest text-ink-soft">
                                            {fact.label}
                                        </dt>

                                        <dd className="text-sm leading-6 text-ink">
                                            {fact.value}
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
