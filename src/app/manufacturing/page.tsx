import { MediaFrame } from "@/components/media-frame";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { siteContent } from "@/content/site-content";
import { createPageMetadata } from "@/lib/metadata";

const { manufacturing } = siteContent;

export const metadata = createPageMetadata(
    manufacturing.hero.title,
    manufacturing.hero.description,
    "/manufacturing",
);

export default function ManufacturingPage() {
    return (
        <main>
            <PageHero {...manufacturing.hero} />

            <Reveal>
                <MediaFrame
                    className="aspect-video w-full md:aspect-21/9"
                    caption="Plant, Laxmi Eco Industrial Park"
                    sizes="100vw"
                />
            </Reveal>

            <section className="ground-paper band">
                <div className="shell">
                    <Reveal>
                        <p className="label border-t border-ink pt-4 text-copper">
                            Production lines
                        </p>
                    </Reveal>

                    <div className="mt-10 grid gap-x-16 gap-y-12 md:grid-cols-2">
                        {manufacturing.productionLines.map((line, index) => (
                            <Reveal key={line.number} delay={index * 0.08}>
                                <article className="h-full">
                                    <div className="flex items-baseline justify-between gap-6 border-b border-line pb-3">
                                        <p className="label text-ink-faint">
                                            {line.number}
                                        </p>
                                        <p className="font-mono text-xs text-copper">
                                            {line.formula}
                                        </p>
                                    </div>

                                    <h2 className="font-display type-subtitle mt-7 text-ink">
                                        {line.title}
                                    </h2>

                                    <p className="font-mono mt-3 text-sm text-copper">
                                        {line.capacity}
                                    </p>

                                    <p className="text-pretty mt-6 leading-[1.85] text-ink-soft">
                                        {line.description}
                                    </p>
                                </article>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <section className="ground-ink band">
                <div className="shell">
                    <Reveal>
                        <div className="grid gap-x-16 gap-y-6 border-t border-white/20 pt-6 lg:grid-cols-12">
                            <p className="label text-copper-bright lg:col-span-4">
                                Plant infrastructure
                            </p>

                            <h2 className="text-balance font-display type-subtitle max-w-[20ch] text-on-ink lg:col-span-8">
                                Engineered for safety and consistency.
                            </h2>
                        </div>
                    </Reveal>

                    <div className="mt-14 grid gap-x-16 md:grid-cols-2 lg:grid-cols-3">
                        {manufacturing.infrastructure.map((item, index) => (
                            <Reveal
                                key={item.title}
                                delay={Math.min((index % 3) * 0.07, 0.21)}
                            >
                                <article className="h-full border-t border-white/12 py-8">
                                    <span className="label text-on-ink-faint">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <h3 className="mt-4 text-lg text-on-ink">
                                        {item.title}
                                    </h3>

                                    <p className="text-pretty mt-3 text-sm leading-relaxed text-on-ink-soft">
                                        {item.description}
                                    </p>
                                </article>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <section className="ground-paper band">
                <div className="shell">
                    <Reveal>
                        <div className="grid gap-x-16 gap-y-6 border-t border-ink pt-6 lg:grid-cols-12">
                            <p className="label text-copper lg:col-span-4">
                                Logistics
                            </p>

                            <h2 className="text-balance font-display type-subtitle max-w-[20ch] text-ink lg:col-span-8">
                                On the NH-8 corridor.
                            </h2>
                        </div>
                    </Reveal>

                    <Reveal delay={0.08}>
                        <dl className="mt-12">
                            {manufacturing.logistics.map((item) => (
                                <div
                                    key={item.label}
                                    className="grid grid-cols-1 gap-2 border-b border-line py-6 sm:grid-cols-[10rem_1fr] sm:gap-16"
                                >
                                    <dt className="label pt-1.5 text-ink-faint">
                                        {item.label}
                                    </dt>
                                    <dd className="text-pretty text-lg leading-relaxed text-ink">
                                        {item.value}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </Reveal>
                </div>
            </section>
        </main>
    );
}
