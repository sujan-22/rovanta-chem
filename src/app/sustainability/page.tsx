import { MediaFrame } from "@/components/media-frame";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { siteContent } from "@/content/site-content";
import { createPageMetadata } from "@/lib/metadata";

const { sustainability } = siteContent;

export const metadata = createPageMetadata(
    sustainability.hero.title,
    sustainability.hero.description,
    "/sustainability",
);

export default function SustainabilityPage() {
    return (
        <main>
            <PageHero {...sustainability.hero} />

            {/* Headline figures, set as the largest type on the page. */}
            <section className="ground-ink band-tight">
                <div className="shell">
                    <dl className="grid gap-x-16 sm:grid-cols-2 lg:grid-cols-4">
                        {sustainability.metrics.map((metric, index) => (
                            <Reveal key={metric.label} delay={index * 0.07}>
                                <div className="flex h-full flex-col gap-4 border-t border-white/20 py-8">
                                    <dd className="font-display text-5xl text-copper-bright md:text-6xl">
                                        {metric.value}
                                    </dd>
                                    <dt className="text-pretty text-sm leading-relaxed text-on-ink-soft">
                                        {metric.label}
                                    </dt>
                                </div>
                            </Reveal>
                        ))}
                    </dl>
                </div>
            </section>

            <section className="ground-paper band">
                <div className="shell grid gap-x-16 gap-y-14 lg:grid-cols-12">
                    <Reveal className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
                        <MediaFrame
                            className="aspect-4/5 w-full"
                            caption="Zero Liquid Discharge plant"
                            sizes="(min-width: 1024px) 33vw, 100vw"
                        />
                    </Reveal>

                    <div className="lg:col-span-7 lg:col-start-6">
                        <Reveal>
                            <p className="label border-t border-ink pt-4 text-copper">
                                Initiatives
                            </p>
                        </Reveal>

                        <div className="mt-2">
                            {sustainability.initiatives.map(
                                (initiative, index) => (
                                    <Reveal
                                        key={initiative.title}
                                        delay={Math.min(index * 0.05, 0.25)}
                                    >
                                        <article className="border-b border-line py-7">
                                            <h2 className="font-display text-2xl text-ink">
                                                {initiative.title}
                                            </h2>
                                            <p className="text-pretty mt-3 leading-[1.85] text-ink-soft">
                                                {initiative.description}
                                            </p>
                                        </article>
                                    </Reveal>
                                ),
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
