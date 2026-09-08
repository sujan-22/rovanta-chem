import {
    Factory,
    Microscope,
    Recycle,
    Settings2,
    ShieldCheck,
    Zap,
} from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { siteContent } from "@/content/site-content";
import { createPageMetadata } from "@/lib/metadata";

const { manufacturing } = siteContent;

const infrastructureIcons = [
    Settings2,
    Zap,
    Recycle,
    ShieldCheck,
    Factory,
    Microscope,
];

export const metadata = createPageMetadata(
    manufacturing.hero.title,
    manufacturing.hero.description,
    "/manufacturing",
);

export default function ManufacturingPage() {
    return (
        <main>
            <PageHero {...manufacturing.hero} />

            <section className="py-20 md:py-24">
                <div className="site-container">
                    <Reveal>
                        <SectionHeading
                            eyebrow="Production lines"
                            title="Two dedicated copper compound lines."
                            description="Each line runs to a fixed specification with in-process controls at every stage and a certificate of analysis on every lot."
                        />
                    </Reveal>

                    <div className="mt-12 grid gap-6 lg:grid-cols-2">
                        {manufacturing.productionLines.map((line, index) => (
                            <Reveal key={line.number} delay={index * 0.08}>
                                <article className="surface-card h-full p-7 md:p-8">
                                    <div className="flex items-start justify-between gap-4">
                                        <p className="flex items-center gap-2 text-copper-deep">
                                            <span className="technical-label">
                                                {line.number}
                                            </span>
                                            <span aria-hidden="true">·</span>
                                            <span className="font-mono text-xs tracking-[0.05em]">
                                                {line.formula}
                                            </span>
                                        </p>

                                        <span className="shrink-0 rounded-full bg-paper-deep px-3 py-1 font-mono text-xs text-ink-soft">
                                            {line.capacity}
                                        </span>
                                    </div>

                                    <h3 className="mt-4 font-heading text-2xl font-bold text-ink">
                                        {line.title}
                                    </h3>

                                    <p className="mt-4 leading-8 text-ink-soft">
                                        {line.description}
                                    </p>
                                </article>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-alt py-20 md:py-24">
                <div className="site-container">
                    <Reveal>
                        <SectionHeading
                            eyebrow="Plant infrastructure"
                            title="Engineered for safety and consistency."
                            description="A compact plant specified for controlled operation, contained handling and reliable uptime."
                        />
                    </Reveal>

                    <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {manufacturing.infrastructure.map((item, index) => {
                            const Icon = infrastructureIcons[index] ?? Factory;

                            return (
                                <Reveal
                                    key={item.title}
                                    delay={(index % 3) * 0.07}
                                >
                                    <article className="surface-card h-full p-6">
                                        <span className="grid size-11 place-items-center rounded-lg bg-paper-deep text-copper-deep">
                                            <Icon className="size-5" />
                                        </span>

                                        <h3 className="mt-5 font-heading text-xl font-bold text-ink">
                                            {item.title}
                                        </h3>

                                        <p className="mt-3 leading-7 text-ink-soft">
                                            {item.description}
                                        </p>
                                    </article>
                                </Reveal>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="py-20 md:py-24">
                <div className="site-container">
                    <Reveal>
                        <SectionHeading
                            eyebrow="Logistics"
                            title="On the NH-8 corridor."
                            description="Road, rail, sea and air links that keep domestic dispatch and export lead times predictable."
                        />
                    </Reveal>

                    <Reveal delay={0.08}>
                        <div className="surface-card mt-12 overflow-x-auto">
                            <table className="w-full min-w-[34rem] border-collapse text-left">
                                <tbody>
                                    {manufacturing.logistics.map((item) => (
                                        <tr
                                            key={item.label}
                                            className="border-b border-line last:border-b-0"
                                        >
                                            <th className="w-40 bg-paper-deep px-5 py-4 align-top font-mono text-xs uppercase tracking-wider text-ink-soft">
                                                {item.label}
                                            </th>

                                            <td className="px-5 py-4 leading-7 text-ink">
                                                {item.value}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </Reveal>
                </div>
            </section>
        </main>
    );
}
