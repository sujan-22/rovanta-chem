import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { siteContent } from "@/content/site-content";

export function QualitySection() {
    const { quality } = siteContent;

    return (
        <section id="quality" className="ground-paper band scroll-mt-24">
            <div className="shell">
                <div className="grid gap-x-16 gap-y-12 lg:grid-cols-12">
                    <Reveal className="lg:col-span-5">
                        <SectionHeading
                            eyebrow={quality.hero.eyebrow}
                            title={quality.hero.title}
                            description={quality.hero.description}
                            index="05"
                        />

                        <Link
                            href="/quality"
                            className="group mt-10 inline-flex items-center gap-3 border-b border-ink pb-1.5 text-lg text-ink transition-colors hover:border-copper hover:text-copper"
                        >
                            Quality systems
                            <span
                                aria-hidden="true"
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            >
                                &rarr;
                            </span>
                        </Link>
                    </Reveal>

                    <div className="lg:col-span-6 lg:col-start-7">
                        <ol className="grid">
                            {quality.checkpoints.map((checkpoint, index) => (
                                <Reveal
                                    key={checkpoint}
                                    delay={Math.min(index * 0.05, 0.25)}
                                >
                                    <li className="flex gap-6 border-b border-line py-5">
                                        <span className="label shrink-0 pt-1 text-ink-faint">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                        <span className="text-pretty leading-relaxed text-ink">
                                            {checkpoint}
                                        </span>
                                    </li>
                                </Reveal>
                            ))}
                        </ol>

                        <Reveal delay={0.1}>
                            <p className="text-pretty mt-8 border-l-2 border-copper pl-5 text-sm leading-relaxed text-ink-soft">
                                <span className="text-ink">
                                    Certification note.
                                </span>{" "}
                                {quality.certificationNote}
                            </p>
                        </Reveal>
                    </div>
                </div>

                {/* Documentation issued with every dispatch. */}
                <Reveal delay={0.08}>
                    <div className="mt-20 border-t border-ink pt-10">
                        <p className="label text-copper">
                            Technical documentation
                        </p>

                        <div className="mt-8 grid gap-x-16 md:grid-cols-3">
                            {quality.documents.map((document) => (
                                <div
                                    key={document.abbreviation}
                                    className="flex items-baseline gap-5 border-t border-line py-6 md:border-t-0 md:py-0"
                                >
                                    <span className="font-mono text-xs text-copper">
                                        {document.abbreviation}
                                    </span>

                                    <span>
                                        <span className="block text-ink">
                                            {document.title}
                                        </span>
                                        <span className="mt-1 block text-sm text-ink-faint">
                                            {document.status}
                                        </span>
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
