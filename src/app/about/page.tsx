import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { siteContent } from "@/content/site-content";
import { createPageMetadata } from "@/lib/metadata";

const { about, company } = siteContent;

export const metadata = createPageMetadata(
    about.hero.title,
    about.hero.description,
    "/about"
);

export default function AboutPage() {
    return (
        <main>
            <PageHero {...about.hero} />

            <section className="py-20 md:py-24">
                <div className="site-container grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
                    <div>
                        <div className="grid gap-5 text-base leading-8 text-ink-soft">
                            {about.paragraphs.map((paragraph) => (
                                <p key={paragraph}>{paragraph}</p>
                            ))}
                        </div>

                        <h2 className="mt-10 font-heading text-2xl font-bold">
                            Core business areas
                        </h2>

                        <div className="mt-5 flex flex-wrap gap-2">
                            {about.businessAreas.map((area) => (
                                <span
                                    key={area}
                                    className="rounded-full border border-line bg-card px-4 py-2 text-sm"
                                >
                                    {area}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <div className="surface-card overflow-hidden">
                            <table className="w-full border-collapse text-left">
                                <tbody>
                                    {company.facts.map((fact) => (
                                        <tr
                                            key={fact.label}
                                            className="border-b border-line last:border-b-0"
                                        >
                                            <th className="w-48 bg-paper-deep px-5 py-4 font-mono text-xs uppercase tracking-wider">
                                                {fact.label}
                                            </th>
                                            <td className="px-5 py-4 leading-7">
                                                {fact.value}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <Button asChild className="mt-6">
                            <Link href="/leadership">
                                Meet the leadership
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    );
}
