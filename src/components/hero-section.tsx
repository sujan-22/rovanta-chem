import Link from "next/link";

import { MediaFrame } from "@/components/media-frame";
import { Reveal } from "@/components/reveal";
import { siteContent } from "@/content/site-content";

export function HeroSection() {
    const { hero } = siteContent.home;

    const primaryAction = hero.actions[0];
    const secondaryAction = hero.actions[1];

    return (
        <section id="home" className="ground-paper pt-16 pb-0 md:pt-24">
            <div className="shell">
                <Reveal>
                    <p className="label text-copper">{hero.eyebrow}</p>
                </Reveal>

                {/*
                 * The headline runs wide and the supporting copy sits in a
                 * narrow column beneath its right edge: an editorial split
                 * rather than a centred block.
                 */}
                <Reveal delay={0.05}>
                    <h1 className="text-balance font-display type-display mt-10 max-w-[15ch] text-ink">
                        <span className="italic text-copper">
                            {hero.titlePrefix}
                        </span>{" "}
                        {hero.titleSuffix}
                    </h1>
                </Reveal>

                <div className="mt-14 grid gap-x-16 gap-y-10 border-t border-ink pt-10 lg:grid-cols-12">
                    <Reveal delay={0.1} className="lg:col-span-5">
                        <p className="text-pretty type-lead max-w-[46ch] text-ink-soft">
                            {hero.description}
                        </p>
                    </Reveal>

                    <Reveal
                        delay={0.15}
                        className="flex flex-wrap items-start gap-x-10 gap-y-4 lg:col-span-4 lg:col-start-9 lg:justify-end"
                    >
                        <Link
                            href={primaryAction.href}
                            className="group inline-flex items-center gap-3 border-b border-ink pb-1.5 text-lg text-ink transition-colors hover:border-copper hover:text-copper"
                        >
                            {primaryAction.label}
                            <span
                                aria-hidden="true"
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            >
                                &rarr;
                            </span>
                        </Link>

                        <Link
                            href={secondaryAction.href}
                            className="border-b border-transparent pb-1.5 text-lg text-ink-soft transition-colors hover:border-ink-soft hover:text-ink"
                        >
                            {secondaryAction.label}
                        </Link>
                    </Reveal>
                </div>
            </div>

            {/*
             * Full-bleed plant image. Runs edge to edge so the page opens on a
             * wide horizontal band rather than another boxed element.
             */}
            <Reveal delay={0.2} className="mt-16 md:mt-20">
                <MediaFrame
                    className="aspect-video w-full md:aspect-21/9"
                    caption="Laxmi Eco Industrial Park, Surat"
                    sizes="100vw"
                    priority
                />
            </Reveal>

            {/* Key figures, read as a data strip under the image. */}
            <div className="shell">
                <dl className="grid grid-cols-1 sm:grid-cols-3">
                    {hero.plates.map((plate, index) => (
                        <Reveal key={plate.label} delay={index * 0.07}>
                            <div className="flex h-full flex-col justify-between gap-6 border-b border-line py-8 sm:border-b-0 sm:py-10 sm:pr-10">
                                <dt className="label text-ink-faint">
                                    {plate.label}
                                </dt>
                                <dd className="font-display text-4xl text-ink md:text-5xl">
                                    {plate.value}
                                </dd>
                            </div>
                        </Reveal>
                    ))}
                </dl>
            </div>
        </section>
    );
}
