import Link from "next/link";
import { Check, FileCheck2 } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { siteContent } from "@/content/site-content";

export function QualitySection() {
    const { quality } = siteContent;

    return (
        <section id="quality" className="scroll-mt-24 py-20 md:py-24">
            <div className="site-container">
                <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
                    <Reveal>
                        <SectionHeading
                            eyebrow={quality.hero.eyebrow}
                            title={quality.hero.title}
                            description={quality.hero.description}
                        />

                        <ul className="mt-9 grid gap-4 sm:grid-cols-2">
                            {quality.checkpoints.map((checkpoint) => (
                                <li
                                    key={checkpoint}
                                    className="flex items-start gap-3"
                                >
                                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded bg-verdigris text-white">
                                        <Check className="size-3.5" />
                                    </span>

                                    <span className="text-sm leading-6 text-ink">
                                        {checkpoint}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-7 rounded-xl border border-[#e8c79a] bg-[#fff6e8] p-5 text-sm leading-7 text-[#6b4a1e]">
                            <strong>Certification note:</strong>{" "}
                            {quality.certificationNote}
                        </div>
                    </Reveal>

                    <Reveal delay={0.1}>
                        <div className="surface-card p-6">
                            <p className="technical-label text-copper-deep">
                                Technical Documentation
                            </p>

                            <div className="mt-5 grid gap-3">
                                {quality.documents.map((document) => (
                                    <div
                                        key={document.abbreviation}
                                        className="flex items-center justify-between gap-4 rounded-lg border border-line bg-paper px-4 py-4"
                                    >
                                        <div className="flex items-center gap-3">
                                            <FileCheck2 className="size-5 shrink-0 text-verdigris-deep" />

                                            <div>
                                                <p className="font-semibold text-ink">
                                                    {document.title}
                                                </p>

                                                <p className="mt-0.5 text-xs text-ink-soft">
                                                    {document.status}
                                                </p>
                                            </div>
                                        </div>

                                        <span className="rounded-full bg-paper-deep px-3 py-1 font-mono text-xs text-ink-soft">
                                            {document.abbreviation}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <Button
                                asChild
                                variant="outline"
                                className="mt-6 w-full"
                            >
                                <Link href="/quality">
                                    View Quality Information
                                </Link>
                            </Button>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
