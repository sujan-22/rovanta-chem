import {
    Cpu,
    Droplets,
    FlaskConical,
    Leaf,
    Palette,
    Waves,
} from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteContent } from "@/content/site-content";

const icons = [Leaf, Palette, Waves, FlaskConical, Cpu, Droplets];

export function IndustriesSection() {
    const { industries } = siteContent;

    return (
        <section id="industries" className="scroll-mt-24 py-20 md:py-24">
            <div className="site-container">
                <Reveal>
                    <SectionHeading
                        eyebrow={industries.hero.eyebrow}
                        title={industries.hero.title}
                        description={industries.hero.description}
                    />
                </Reveal>

                <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {industries.items.map((industry, index) => {
                        const Icon = icons[index] ?? FlaskConical;

                        return (
                            <Reveal
                                key={industry.title}
                                delay={(index % 3) * 0.08}
                            >
                                <Card className="surface-card h-full">
                                    <CardHeader>
                                        <span className="grid size-11 place-items-center rounded-lg bg-paper-deep text-verdigris-deep">
                                            <Icon className="size-5" />
                                        </span>

                                        <CardTitle className="mt-4 text-xl">
                                            {industry.title}
                                        </CardTitle>
                                    </CardHeader>

                                    <CardContent className="leading-7 text-ink-soft">
                                        {industry.description}
                                    </CardContent>
                                </Card>
                            </Reveal>
                        );
                    })}
                </div>

                <Reveal className="mt-12">
                    <div className="rounded-xl border border-line bg-paper-deep p-7">
                        <p className="technical-label text-copper-deep">
                            {industries.exportReadiness.eyebrow}
                        </p>

                        <h3 className="mt-3 font-heading text-2xl font-bold text-ink">
                            {industries.exportReadiness.title}
                        </h3>

                        <p className="mt-4 max-w-4xl leading-8 text-ink-soft">
                            {industries.exportReadiness.description}
                        </p>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
