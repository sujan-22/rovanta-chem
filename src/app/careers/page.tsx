import { Mail } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { siteContent } from "@/content/site-content";
import { createPageMetadata } from "@/lib/metadata";

const { careers, company } = siteContent;

export const metadata = createPageMetadata(
    careers.hero.title,
    careers.hero.description,
    "/careers"
);

export default function CareersPage() {
    return (
        <main>
            <PageHero {...careers.hero} />

            <section className="py-20 md:py-24">
                <div className="site-container">
                    <div className="grid gap-4">
                        {careers.openings.map((opening) => (
                            <article
                                key={opening.title}
                                className="surface-card flex flex-col gap-5 p-5 sm:flex-row sm:items-center sm:justify-between"
                            >
                                <div>
                                    <h2 className="font-heading text-xl font-bold">
                                        {opening.title}
                                    </h2>
                                    <p className="mt-1 text-sm text-ink-soft">
                                        {opening.department} ·{" "}
                                        {opening.location}
                                    </p>
                                </div>

                                <Button asChild variant="outline">
                                    <a
                                        href={`mailto:${company.email}?subject=${encodeURIComponent(
                                            `Career application: ${opening.title}`
                                        )}`}
                                    >
                                        Apply
                                    </a>
                                </Button>
                            </article>
                        ))}
                    </div>

                    <div className="mt-8 rounded-xl border border-[#e8c79a] bg-[#fff6e8] p-5 text-sm leading-7 text-[#6b4a1e]">
                        {careers.note}
                    </div>

                    <Button asChild className="mt-8">
                        <a
                            href={`mailto:${company.email}?subject=Career%20interest%20at%20ROVANTA`}
                        >
                            <Mail className="mr-2 size-4" />
                            Send your CV
                        </a>
                    </Button>
                </div>
            </section>
        </main>
    );
}
