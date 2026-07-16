import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { siteContent } from "@/content/site-content";
import { cn } from "@/lib/utils";

const plateAccentClasses = [
    "border-l-copper",
    "border-l-verdigris",
    "border-l-sulphate",
] as const;

export function HeroSection() {
    const { hero } = siteContent.home;

    const primaryAction = hero.actions[0];
    const secondaryAction = hero.actions[1];

    return (
        <section
            id="home"
            className="hero-surface relative isolate overflow-hidden"
        >
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-10 -right-10 select-none font-mono text-[clamp(7rem,18vw,16rem)] leading-none text-verdigris/15"
            >
                {hero.signatureFormula}
            </div>

            <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,135,59,0.18),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(46,139,110,0.16),transparent_42%)]"
            />

            <div className="site-container relative z-10 py-20 md:py-28">
                <Reveal>
                    <p className="technical-label text-[#9fb0b7]">
                        {hero.eyebrow}
                    </p>

                    <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#dccfa9]">
                        {hero.kicker}
                    </p>

                    <h1 className="text-balance mt-5 max-w-[19ch] font-heading text-4xl font-bold leading-[1.1] tracking-tight text-[#f2efe8] md:text-6xl lg:text-7xl">
                        <span className="bg-linear-to-r from-[#e8cd84] via-[#b8934a] to-[#ddbe6e] bg-clip-text italic text-transparent">
                            {hero.titlePrefix}
                        </span>{" "}
                        {hero.titleSuffix}
                    </h1>

                    <p className="mt-6 max-w-3xl text-base leading-8 text-[#c9d2d6] md:text-lg">
                        {hero.description}
                    </p>

                    <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                        <Button
                            size="lg"
                            asChild
                            className="bg-copper text-white hover:bg-copper-deep"
                        >
                            <Link href={primaryAction.href}>
                                {primaryAction.label}
                                <ArrowRight className="ml-2 size-4" />
                            </Link>
                        </Button>

                        <Button
                            size="lg"
                            variant="outline"
                            asChild
                            className="border-white/40 bg-transparent text-white hover:border-white hover:bg-white/10 hover:text-white"
                        >
                            <Link href={secondaryAction.href}>
                                {secondaryAction.label}
                            </Link>
                        </Button>
                    </div>
                </Reveal>

                <div className="mt-14 grid max-w-4xl gap-3 md:grid-cols-3">
                    {hero.plates.map((plate, index) => (
                        <Reveal key={plate.label} delay={index * 0.08}>
                            <div
                                className={cn(
                                    "rounded-lg border-y border-r border-l-4 border-white/15 bg-white/4 px-5 py-4",
                                    plateAccentClasses[index] ??
                                        "border-l-copper",
                                )}
                            >
                                <p className="technical-label text-[#9fb0b7]">
                                    {plate.label}
                                </p>

                                <p className="mt-2 font-heading text-xl font-bold text-white">
                                    {plate.value}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
