import Link from "next/link";
import {
    Factory,
    Microscope,
    Recycle,
    Settings2,
    ShieldCheck,
    Zap,
} from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { siteContent } from "@/content/site-content";

const icons = [Settings2, Zap, Recycle, ShieldCheck, Factory, Microscope];

export function FacilitySection() {
    const { manufacturing } = siteContent;
    const featuredProcess = manufacturing.processes[0];

    return (
        <section
            id="manufacturing"
            className="section-dark scroll-mt-24 py-20 md:py-24"
        >
            <div className="site-container">
                <Reveal>
                    <SectionHeading
                        eyebrow={manufacturing.hero.eyebrow}
                        title={manufacturing.hero.title}
                        description={manufacturing.hero.description}
                        theme="dark"
                    />
                </Reveal>

                <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {manufacturing.infrastructure.map((item, index) => {
                        const Icon = icons[index] ?? Factory;

                        return (
                            <Reveal key={item.title} delay={(index % 3) * 0.07}>
                                <article className="h-full rounded-xl border border-white/15 bg-white/4 p-6">
                                    <Icon className="size-7 text-copper" />

                                    <h3 className="mt-5 font-heading text-xl font-bold text-white">
                                        {item.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-[#cbbeb2]">
                                        {item.description}
                                    </p>
                                </article>
                            </Reveal>
                        );
                    })}
                </div>

                <Reveal className="mt-12">
                    <div className="rounded-xl border border-copper/35 bg-copper/10 p-7 md:flex md:items-center md:justify-between md:gap-8">
                        <div>
                            <p className="technical-label text-copper">
                                {featuredProcess.number} ·{" "}
                                {featuredProcess.formula}
                            </p>

                            <h3 className="mt-3 font-heading text-2xl font-bold text-white">
                                {featuredProcess.title}
                            </h3>

                            <p className="mt-3 max-w-3xl leading-7 text-[#cbbeb2]">
                                {featuredProcess.description}
                            </p>

                            <p className="mt-4 overflow-x-auto rounded-lg bg-black/20 p-4 font-mono text-sm text-[#d8cda9]">
                                {featuredProcess.equation}
                            </p>
                        </div>

                        <Button
                            asChild
                            className="mt-6 shrink-0 bg-copper text-white hover:bg-copper-deep md:mt-0"
                        >
                            <Link href="/manufacturing">
                                View Manufacturing
                            </Link>
                        </Button>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
