import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

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
    const featuredProducts = siteContent.products.items.slice(0, 3);

    return (
        <section
            id="home"
            className="hero-surface relative isolate overflow-hidden"
        >
            <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,135,59,0.18),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(46,139,110,0.16),transparent_42%)]"
            />

            {/*
             * Fine engineering grid rather than an oversized formula: it reads as
             * deliberate texture at every viewport width instead of clipped type.
             */}
            <div
                aria-hidden="true"
                className="engineering-grid absolute inset-0"
            />

            <div className="site-container relative z-10 py-20 md:py-24">
                <div className="grid items-start gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
                    <Reveal>
                        <p className="technical-label text-[#9fb0b7]">
                            {hero.eyebrow}
                        </p>

                        <h1 className="text-balance mt-6 font-heading text-4xl font-bold leading-[1.08] tracking-tight text-[#f2efe8] md:text-5xl lg:text-6xl">
                            <span className="text-[#dcb964] italic">
                                {hero.titlePrefix}
                            </span>{" "}
                            {hero.titleSuffix}
                        </h1>

                        <p className="text-pretty mt-6 max-w-2xl text-base leading-8 text-[#c9d2d6] md:text-lg">
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

                    <Reveal delay={0.12}>
                        <div className="rounded-xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm md:p-7">
                            <p className="technical-label text-[#9fb0b7]">
                                Core product lines
                            </p>

                            <div className="mt-5 grid gap-1">
                                {featuredProducts.map((product) => (
                                    <Link
                                        key={product.slug}
                                        href={`/products/${product.slug}`}
                                        className="group -mx-3 flex items-center justify-between gap-4 rounded-lg px-3 py-3 transition hover:bg-white/8"
                                    >
                                        <span>
                                            <span className="block font-heading text-lg font-bold text-white">
                                                {product.name}
                                            </span>

                                            <span className="mt-0.5 block font-mono text-xs text-[#9fb0b7]">
                                                {product.formula}
                                                {product.cas
                                                    ? ` · CAS ${product.cas}`
                                                    : ""}
                                            </span>
                                        </span>

                                        <ArrowUpRight className="size-4 shrink-0 text-copper transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                    </Link>
                                ))}
                            </div>

                            <Link
                                href="/products"
                                className="mt-5 inline-flex items-center gap-2 border-t border-white/15 pt-5 text-sm font-semibold text-[#dcb964] transition hover:text-white"
                            >
                                View all 8 product lines
                                <ArrowRight className="size-4" />
                            </Link>
                        </div>
                    </Reveal>
                </div>

                <div className="mt-16 grid gap-4 border-t border-white/15 pt-10 sm:grid-cols-3">
                    {hero.plates.map((plate, index) => (
                        <Reveal key={plate.label} delay={index * 0.08}>
                            <div
                                className={cn(
                                    "h-full rounded-lg border-y border-r border-l-4 border-white/15 bg-white/4 px-5 py-5",
                                    plateAccentClasses[index] ??
                                        "border-l-copper",
                                )}
                            >
                                <p className="technical-label text-[#9fb0b7]">
                                    {plate.label}
                                </p>

                                <p className="mt-2 font-heading text-2xl font-bold text-white">
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
