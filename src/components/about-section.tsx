import Link from "next/link";

import { MediaFrame } from "@/components/media-frame";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { siteContent } from "@/content/site-content";

export function AboutSection() {
    const { about, company } = siteContent;

    return (
        <section id="about" className="ground-paper band scroll-mt-24">
            <div className="shell">
                <div className="grid gap-x-16 gap-y-12 lg:grid-cols-12">
                    <Reveal className="lg:col-span-5">
                        <SectionHeading
                            eyebrow={about.hero.eyebrow}
                            title={about.hero.title}
                            index="01"
                        />
                    </Reveal>

                    <div className="lg:col-span-6 lg:col-start-7">
                        <Reveal delay={0.08}>
                            <div className="grid gap-6">
                                {about.paragraphs.map((paragraph) => (
                                    <p
                                        key={paragraph}
                                        className="text-pretty leading-[1.85] text-ink-soft"
                                    >
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </Reveal>

                        <Reveal delay={0.12}>
                            <div className="mt-12">
                                <p className="label text-ink-faint">
                                    Core business areas
                                </p>

                                <ul className="mt-5 grid gap-x-10 gap-y-3 sm:grid-cols-2">
                                    {about.businessAreas.map((area) => (
                                        <li
                                            key={area}
                                            className="border-b border-line pb-3 text-sm text-ink"
                                        >
                                            {area}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Reveal>

                        <Reveal delay={0.16}>
                            <Link
                                href="/about"
                                className="group mt-12 inline-flex items-center gap-3 border-b border-ink pb-1.5 text-ink transition-colors hover:border-copper hover:text-copper"
                            >
                                More about Rovanta
                                <span
                                    aria-hidden="true"
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                >
                                    &rarr;
                                </span>
                            </Link>
                        </Reveal>
                    </div>
                </div>

                {/* Company facts, set as a reference table rather than a card. */}
                <div className="mt-24 grid gap-x-16 gap-y-12 lg:grid-cols-12 lg:mt-32">
                    <Reveal className="lg:col-span-5">
                        <MediaFrame
                            className="aspect-4/5 w-full"
                            caption="Greenfield plant, under construction"
                            sizes="(min-width: 1024px) 40vw, 100vw"
                        />
                    </Reveal>

                    <div className="lg:col-span-6 lg:col-start-7">
                        <Reveal>
                            <p className="label border-t border-ink pt-4 text-copper">
                                Rovanta at a glance
                            </p>
                        </Reveal>

                        <dl className="mt-2">
                            {company.facts.map((fact, index) => (
                                <Reveal
                                    key={fact.label}
                                    delay={Math.min(index * 0.05, 0.25)}
                                >
                                    <div className="grid grid-cols-1 gap-1 border-b border-line py-5 sm:grid-cols-[11rem_1fr] sm:gap-8">
                                        <dt className="label pt-1 text-ink-faint">
                                            {fact.label}
                                        </dt>
                                        <dd className="text-pretty leading-relaxed text-ink">
                                            {fact.value}
                                        </dd>
                                    </div>
                                </Reveal>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
        </section>
    );
}
