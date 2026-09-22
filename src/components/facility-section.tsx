import Link from "next/link";

import { MediaFrame } from "@/components/media-frame";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { siteContent } from "@/content/site-content";

export function FacilitySection() {
    const { manufacturing } = siteContent;

    return (
        <section
            id="manufacturing"
            className="ground-ink band scroll-mt-24 overflow-hidden"
        >
            <div className="shell">
                <div className="grid gap-x-16 gap-y-12 lg:grid-cols-12">
                    <Reveal className="lg:col-span-5">
                        <SectionHeading
                            eyebrow={manufacturing.hero.eyebrow}
                            title={manufacturing.hero.title}
                            description={manufacturing.hero.description}
                            index="04"
                            theme="dark"
                        />

                        <Link
                            href="/manufacturing"
                            className="group mt-10 inline-flex items-center gap-3 border-b border-copper-bright pb-1.5 text-lg text-copper-bright transition-colors hover:border-on-ink hover:text-on-ink"
                        >
                            Inside the plant
                            <span
                                aria-hidden="true"
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            >
                                &rarr;
                            </span>
                        </Link>
                    </Reveal>

                    <Reveal
                        delay={0.1}
                        className="lg:col-span-6 lg:col-start-7"
                    >
                        <MediaFrame
                            className="aspect-4/3 w-full"
                            caption="Reactor hall"
                            sizes="(min-width: 1024px) 50vw, 100vw"
                        />
                    </Reveal>
                </div>

                {/* Production lines, as two large figures. */}
                <div className="mt-24 grid gap-x-16 gap-y-10 md:grid-cols-2">
                    {manufacturing.productionLines.map((line, index) => (
                        <Reveal key={line.number} delay={index * 0.08}>
                            <article className="h-full border-t border-white/20 pt-8">
                                <div className="flex items-baseline justify-between gap-6">
                                    <p className="label text-copper-bright">
                                        {line.number}
                                    </p>
                                    <p className="font-mono text-xs tracking-wide text-on-ink-faint">
                                        {line.formula}
                                    </p>
                                </div>

                                <h3 className="font-display mt-6 text-3xl text-on-ink md:text-4xl">
                                    {line.title}
                                </h3>

                                <p className="font-mono mt-3 text-sm text-copper-bright">
                                    {line.capacity}
                                </p>

                                <p className="text-pretty mt-6 leading-[1.85] text-on-ink-soft">
                                    {line.description}
                                </p>
                            </article>
                        </Reveal>
                    ))}
                </div>

                {/* Plant infrastructure, compressed to a scannable list. */}
                <div className="mt-24">
                    <Reveal>
                        <p className="label border-t border-white/20 pt-4 text-on-ink-faint">
                            Plant infrastructure
                        </p>
                    </Reveal>

                    <div className="mt-8 grid gap-x-16 md:grid-cols-2 lg:grid-cols-3">
                        {manufacturing.infrastructure.map((item, index) => (
                            <Reveal
                                key={item.title}
                                delay={Math.min((index % 3) * 0.07, 0.21)}
                            >
                                <article className="h-full border-t border-white/12 py-7">
                                    <h4 className="text-base text-on-ink">
                                        {item.title}
                                    </h4>
                                    <p className="text-pretty mt-3 text-sm leading-relaxed text-on-ink-soft">
                                        {item.description}
                                    </p>
                                </article>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
