import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { siteContent } from "@/content/site-content";

export function IndustriesSection() {
    const { industries } = siteContent;

    return (
        <section id="industries" className="ground-paper band scroll-mt-24">
            <div className="shell">
                <Reveal>
                    <SectionHeading
                        eyebrow={industries.hero.eyebrow}
                        title={industries.hero.title}
                        description={industries.hero.description}
                        index="03"
                        className="max-w-4xl"
                    />
                </Reveal>

                {/*
                 * Two columns of hairline-separated entries. No icons, no
                 * boxes: the market name carries the weight.
                 */}
                <div className="mt-16 grid gap-x-16 md:mt-20 md:grid-cols-2">
                    {industries.items.map((industry, index) => (
                        <Reveal
                            key={industry.title}
                            delay={Math.min((index % 2) * 0.08, 0.16)}
                        >
                            <article className="flex h-full gap-6 border-t border-line py-8">
                                <span className="label shrink-0 pt-1.5 text-ink-faint">
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <div>
                                    <h3 className="font-display text-2xl text-ink">
                                        {industry.title}
                                    </h3>

                                    <p className="text-pretty mt-3 leading-relaxed text-ink-soft">
                                        {industry.description}
                                    </p>
                                </div>
                            </article>
                        </Reveal>
                    ))}
                </div>

                {/* Export statement, set large as a pull quote. */}
                <Reveal delay={0.1}>
                    <div className="mt-20 grid gap-x-16 gap-y-8 border-t border-ink pt-10 lg:grid-cols-12">
                        <p className="label text-copper lg:col-span-3">
                            {industries.exportReadiness.eyebrow}
                        </p>

                        <div className="lg:col-span-9">
                            <h3 className="text-balance font-display type-subtitle max-w-[22ch] text-ink">
                                {industries.exportReadiness.title}
                            </h3>

                            <p className="text-pretty mt-6 max-w-[68ch] leading-[1.85] text-ink-soft">
                                {industries.exportReadiness.description}
                            </p>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
