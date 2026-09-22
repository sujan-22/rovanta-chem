import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { siteContent } from "@/content/site-content";

export function WhyRovantaSection() {
    const { whyRovanta } = siteContent.home;

    const panels = [
        {
            title: "Manufacturing capability",
            body: whyRovanta.manufacturingCapabilities,
        },
        {
            title: "Quality commitment",
            body: whyRovanta.qualityCommitment,
        },
    ];

    return (
        <section id="why-rovanta" className="ground-paper-2 band scroll-mt-24">
            <div className="shell">
                <Reveal>
                    <SectionHeading
                        eyebrow={whyRovanta.eyebrow}
                        title={whyRovanta.title}
                        description={whyRovanta.description}
                        index="06"
                        className="max-w-4xl"
                    />
                </Reveal>

                <div className="mt-16 grid gap-x-16 gap-y-12 md:mt-20 lg:grid-cols-12">
                    <ul className="lg:col-span-7">
                        {whyRovanta.benefits.map((benefit, index) => (
                            <Reveal
                                key={benefit}
                                delay={Math.min(index * 0.06, 0.24)}
                            >
                                <li className="flex gap-6 border-b border-line py-6">
                                    <span className="label shrink-0 pt-1.5 text-copper">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                    <span className="text-pretty text-lg leading-relaxed text-ink">
                                        {benefit}
                                    </span>
                                </li>
                            </Reveal>
                        ))}
                    </ul>

                    <div className="lg:col-span-4 lg:col-start-9">
                        {panels.map((panel, index) => (
                            <Reveal
                                key={panel.title}
                                delay={0.1 + index * 0.08}
                            >
                                <article className="border-t border-ink pt-5 pb-10 last:pb-0">
                                    <h3 className="label text-copper">
                                        {panel.title}
                                    </h3>
                                    <p className="text-pretty mt-4 text-sm leading-[1.8] text-ink-soft">
                                        {panel.body}
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
