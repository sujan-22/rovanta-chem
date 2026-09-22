import Link from "next/link";

import { MediaFrame } from "@/components/media-frame";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { siteContent } from "@/content/site-content";
import { createPageMetadata } from "@/lib/metadata";

const { about, company } = siteContent;

export const metadata = createPageMetadata(
    about.hero.title,
    about.hero.description,
    "/about",
);

export default function AboutPage() {
    return (
        <main>
            <PageHero {...about.hero} />

            <section className="ground-paper band">
                <div className="shell">
                    <div className="grid gap-x-16 gap-y-12 lg:grid-cols-12">
                        <Reveal className="lg:col-span-7">
                            <div className="grid gap-6">
                                {about.paragraphs.map((paragraph) => (
                                    <p
                                        key={paragraph}
                                        className="text-pretty type-lead leading-[1.85] text-ink-soft"
                                    >
                                        {paragraph}
                                    </p>
                                ))}
                            </div>

                            <div className="mt-14">
                                <p className="label border-t border-ink pt-4 text-copper">
                                    Core business areas
                                </p>

                                <ul className="mt-2 grid gap-x-10 sm:grid-cols-2">
                                    {about.businessAreas.map((area) => (
                                        <li
                                            key={area}
                                            className="border-b border-line py-4 text-ink"
                                        >
                                            {area}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Link
                                href="/leadership"
                                className="group mt-12 inline-flex items-center gap-3 border-b border-ink pb-1.5 text-lg text-ink transition-colors hover:border-copper hover:text-copper"
                            >
                                Meet the leadership
                                <span
                                    aria-hidden="true"
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                >
                                    &rarr;
                                </span>
                            </Link>
                        </Reveal>

                        <Reveal
                            delay={0.1}
                            className="lg:col-span-4 lg:col-start-9"
                        >
                            <MediaFrame
                                className="aspect-4/5 w-full"
                                caption="Surat, Gujarat"
                                sizes="(min-width: 1024px) 33vw, 100vw"
                            />

                            <p className="label mt-12 border-t border-ink pt-4 text-copper">
                                Rovanta at a glance
                            </p>

                            <dl className="mt-2">
                                {company.facts.map((fact) => (
                                    <div
                                        key={fact.label}
                                        className="border-b border-line py-4"
                                    >
                                        <dt className="label text-ink-faint">
                                            {fact.label}
                                        </dt>
                                        <dd className="text-pretty mt-2 text-sm leading-relaxed text-ink">
                                            {fact.value}
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </Reveal>
                    </div>
                </div>
            </section>
        </main>
    );
}
