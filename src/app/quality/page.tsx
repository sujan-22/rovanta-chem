import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { siteContent } from "@/content/site-content";
import { createPageMetadata } from "@/lib/metadata";

const { quality } = siteContent;

export const metadata = createPageMetadata(
    quality.hero.title,
    quality.hero.description,
    "/quality",
);

export default function QualityPage() {
    return (
        <main>
            <PageHero {...quality.hero} />

            <section className="ground-paper band">
                <div className="shell">
                    <div className="grid gap-x-16 gap-y-14 lg:grid-cols-12">
                        <div className="lg:col-span-7">
                            <Reveal>
                                <p className="label border-t border-ink pt-4 text-copper">
                                    In-process controls
                                </p>
                            </Reveal>

                            <ol className="mt-2">
                                {quality.checkpoints.map(
                                    (checkpoint, index) => (
                                        <Reveal
                                            key={checkpoint}
                                            delay={Math.min(index * 0.05, 0.25)}
                                        >
                                            <li className="flex gap-6 border-b border-line py-6">
                                                <span className="label shrink-0 pt-1.5 text-ink-faint">
                                                    {String(index + 1).padStart(
                                                        2,
                                                        "0",
                                                    )}
                                                </span>
                                                <span className="text-pretty text-lg leading-relaxed text-ink">
                                                    {checkpoint}
                                                </span>
                                            </li>
                                        </Reveal>
                                    ),
                                )}
                            </ol>

                            <Reveal delay={0.1}>
                                <p className="text-pretty mt-10 border-l-2 border-copper pl-5 leading-relaxed text-ink-soft">
                                    <span className="text-ink">
                                        Certifications.
                                    </span>{" "}
                                    {quality.certificationNote}
                                </p>
                            </Reveal>
                        </div>

                        <Reveal
                            delay={0.08}
                            className="lg:col-span-4 lg:col-start-9"
                        >
                            <p className="label border-t border-ink pt-4 text-copper">
                                Documentation per product
                            </p>

                            <div className="mt-2">
                                {quality.documents.map((document) => (
                                    <div
                                        key={document.abbreviation}
                                        className="border-b border-line py-5"
                                    >
                                        <div className="flex items-baseline justify-between gap-4">
                                            <span className="text-ink">
                                                {document.title}
                                            </span>
                                            <span className="font-mono shrink-0 text-xs text-copper">
                                                {document.abbreviation}
                                            </span>
                                        </div>
                                        <p className="mt-1.5 text-sm text-ink-faint">
                                            {document.status}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <Link
                                href="/quote"
                                className="group mt-10 inline-flex items-center gap-3 border-b border-ink pb-1.5 text-lg text-ink transition-colors hover:border-copper hover:text-copper"
                            >
                                Request documents
                                <span
                                    aria-hidden="true"
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                >
                                    &rarr;
                                </span>
                            </Link>
                        </Reveal>
                    </div>
                </div>
            </section>
        </main>
    );
}
