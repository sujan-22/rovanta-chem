import Link from "next/link";
import { Check, FlaskConical, Settings2 } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { siteContent } from "@/content/site-content";

export function WhyRovantaSection() {
    const { whyRovanta } = siteContent.home;

    const panels = [
        {
            icon: Settings2,
            title: "Manufacturing capability",
            body: whyRovanta.manufacturingCapabilities,
        },
        {
            icon: FlaskConical,
            title: "Quality commitment",
            body: whyRovanta.qualityCommitment,
        },
    ];

    return (
        <section
            id="why-rovanta"
            className="section-alt scroll-mt-24 py-20 md:py-24"
        >
            <div className="site-container">
                <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-14">
                    <Reveal>
                        <SectionHeading
                            eyebrow={whyRovanta.eyebrow}
                            title={whyRovanta.title}
                            description={whyRovanta.description}
                        />

                        <ul className="mt-9 grid gap-4">
                            {whyRovanta.benefits.map((benefit) => (
                                <li
                                    key={benefit}
                                    className="flex items-start gap-3"
                                >
                                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded bg-verdigris text-white">
                                        <Check className="size-3.5" />
                                    </span>

                                    <span className="leading-7 text-ink">
                                        {benefit}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        <Button asChild className="mt-9">
                            <Link href="/quote">Request a Quote</Link>
                        </Button>
                    </Reveal>

                    <div className="grid content-start gap-5">
                        {panels.map((panel, index) => {
                            const Icon = panel.icon;

                            return (
                                <Reveal
                                    key={panel.title}
                                    delay={0.08 + index * 0.08}
                                >
                                    <article className="surface-card h-full p-6 md:p-7">
                                        <span className="grid size-11 place-items-center rounded-lg bg-paper-deep text-copper-deep">
                                            <Icon className="size-5" />
                                        </span>

                                        <h3 className="mt-5 font-heading text-xl font-bold text-ink">
                                            {panel.title}
                                        </h3>

                                        <p className="mt-3 leading-7 text-ink-soft">
                                            {panel.body}
                                        </p>
                                    </article>
                                </Reveal>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
