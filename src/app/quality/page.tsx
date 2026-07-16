import Link from "next/link";
import { Check, FileCheck2 } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { siteContent } from "@/content/site-content";
import { createPageMetadata } from "@/lib/metadata";

const { quality } = siteContent;

export const metadata = createPageMetadata(
    quality.hero.title,
    quality.hero.description,
    "/quality"
);

export default function QualityPage() {
    return (
        <main>
            <PageHero {...quality.hero} />

            <section className="py-20 md:py-24">
                <div className="site-container grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
                    <div>
                        <ul className="grid gap-4">
                            {quality.checkpoints.map((checkpoint) => (
                                <li
                                    key={checkpoint}
                                    className="flex items-start gap-3"
                                >
                                    <span className="mt-1 grid size-5 shrink-0 place-items-center rounded bg-verdigris text-white">
                                        <Check className="size-3.5" />
                                    </span>
                                    <span className="leading-7 text-ink-soft">
                                        {checkpoint}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-8 rounded-xl border border-[#e8c79a] bg-[#fff6e8] p-5 text-sm leading-7 text-[#6b4a1e]">
                            <strong>Certifications:</strong>{" "}
                            {quality.certificationNote}
                        </div>
                    </div>

                    <article className="surface-card p-6">
                        <h2 className="font-heading text-2xl font-bold">
                            Quality documentation per product
                        </h2>

                        <div className="mt-6 grid gap-3">
                            {quality.documents.map((document) => (
                                <div
                                    key={document.abbreviation}
                                    className="flex items-center justify-between gap-4 rounded-lg border border-line bg-paper p-4"
                                >
                                    <div className="flex items-center gap-3">
                                        <FileCheck2 className="size-5 text-verdigris-deep" />
                                        <div>
                                            <p className="font-semibold">
                                                {document.title}
                                            </p>
                                            <p className="text-xs text-ink-soft">
                                                {document.status}
                                            </p>
                                        </div>
                                    </div>

                                    <span className="rounded-full bg-paper-deep px-3 py-1 font-mono text-xs">
                                        {document.abbreviation}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <Button asChild className="mt-6">
                            <Link href="/quote">
                                Request documents
                            </Link>
                        </Button>
                    </article>
                </div>
            </section>
        </main>
    );
}
