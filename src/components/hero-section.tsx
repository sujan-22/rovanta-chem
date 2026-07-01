import {
    ArrowRight,
    Atom,
    Factory,
    FlaskConical,
    ShieldCheck,
} from "lucide-react";

import { AnimatedBackground } from "@/components/animated-bg";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

const stats = [
    { label: "Product Categories", value: "04" },
    { label: "Manufacturing Focus", value: "B2B" },
    { label: "Location", value: "Gujarat" },
];

export function HeroSection() {
    return (
        <section
            id="home"
            className="relative min-h-screen overflow-hidden px-6 pt-32"
        >
            <AnimatedBackground />

            <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 py-20 lg:grid-cols-[1.15fr_0.85fr]">
                <div>
                    <Badge
                        variant="secondary"
                        className="mb-6 rounded-full px-4 py-2"
                    >
                        Specialty Chemicals • Intermediates • Copper Compounds
                    </Badge>

                    <h1 className="text-balance font-heading text-5xl font-black leading-tight tracking-tight text-foreground md:text-7xl">
                        Reliable chemical manufacturing for demanding
                        industries.
                    </h1>

                    <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
                        {siteConfig.name} manufactures specialty chemicals,
                        agrochemical intermediates, pharmaceutical
                        intermediates, and copper compounds for domestic and
                        international business requirements.
                    </p>

                    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                        <Button
                            size="lg"
                            asChild
                            className="rounded-full bg-primary px-7 font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:bg-primary/90"
                        >
                            <a href="#contact">
                                Request a Quote
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </a>
                        </Button>

                        <Button
                            size="lg"
                            variant="outline"
                            asChild
                            className="rounded-full border-white/15 bg-white/4 px-7 font-semibold text-white backdrop-blur transition hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
                        >
                            <a href="#products">View Products</a>
                        </Button>
                    </div>

                    <div className="mt-12 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-3">
                        {stats.map((stat) => (
                            <div
                                key={stat.label}
                                className="rounded-2xl border border-primary/20 bg-linear-to-br from-primary/15 via-card/80 to-card/70 p-5 shadow-xl shadow-black/20 backdrop-blur-xl"
                            >
                                <p className="font-heading text-3xl font-black tracking-tight text-primary">
                                    {stat.value}
                                </p>
                                <p className="mt-2 text-sm font-medium text-zinc-300">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative">
                    <div className="glass-card rounded-[2rem] p-6">
                        <div className="mb-6 flex items-center justify-between">
                            <p className="text-sm uppercase tracking-[0.35em] text-primary">
                                Chemical Profile
                            </p>
                            <div className="h-3 w-3 rounded-full bg-primary shadow-[0_0_24px_color-mix(in_oklch,var(--primary)_70%,transparent)]" />
                        </div>

                        <div className="grid gap-4">
                            {[
                                {
                                    icon: Atom,
                                    formula: "CuSO₄",
                                    label: "Copper compounds",
                                },
                                {
                                    icon: FlaskConical,
                                    formula: "API",
                                    label: "Pharmaceutical intermediates",
                                },
                                {
                                    icon: Factory,
                                    formula: "R&D",
                                    label: "Custom synthesis support",
                                },
                                {
                                    icon: ShieldCheck,
                                    formula: "QC",
                                    label: "Quality-focused operations",
                                },
                            ].map((item) => {
                                const Icon = item.icon;

                                return (
                                    <div
                                        key={item.formula}
                                        className="rounded-2xl border border-white/10 bg-background/70 p-5"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
                                                <Icon className="h-5 w-5" />
                                            </div>

                                            <div>
                                                <p className="font-mono text-3xl font-bold text-foreground">
                                                    {item.formula}
                                                </p>
                                                <p className="mt-1 text-sm text-muted-foreground">
                                                    {item.label}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
