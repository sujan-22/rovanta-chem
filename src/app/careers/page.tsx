import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { siteContent } from "@/content/site-content";
import { createPageMetadata } from "@/lib/metadata";

const { careers, company } = siteContent;

export const metadata = createPageMetadata(
    careers.hero.title,
    careers.hero.description,
    "/careers",
);

export default function CareersPage() {
    return (
        <main>
            <PageHero {...careers.hero} />

            <section className="ground-paper band">
                <div className="shell">
                    <Reveal>
                        <p className="label border-t border-ink pt-4 text-copper">
                            Open positions
                        </p>
                    </Reveal>

                    <div className="mt-2">
                        {careers.openings.map((opening, index) => (
                            <Reveal key={opening.title} delay={index * 0.06}>
                                <a
                                    href={`mailto:${company.email}?subject=${encodeURIComponent(
                                        `Career application: ${opening.title}`,
                                    )}`}
                                    className="group grid gap-x-10 gap-y-2 border-b border-line py-8 transition-colors hover:bg-paper-2 md:grid-cols-12 md:items-baseline"
                                >
                                    <span className="label text-ink-faint md:col-span-1">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <h2 className="font-display text-2xl text-ink transition-colors group-hover:text-copper md:col-span-5">
                                        {opening.title}
                                    </h2>

                                    <p className="text-sm text-ink-soft md:col-span-4">
                                        {opening.department} ·{" "}
                                        {opening.location}
                                    </p>

                                    <span className="inline-flex items-center gap-2 text-sm text-copper md:col-span-2 md:justify-self-end">
                                        Apply
                                        <span
                                            aria-hidden="true"
                                            className="transition-transform duration-300 group-hover:translate-x-1"
                                        >
                                            &rarr;
                                        </span>
                                    </span>
                                </a>
                            </Reveal>
                        ))}
                    </div>

                    <Reveal>
                        <p className="text-pretty mt-10 max-w-[70ch] border-l-2 border-copper pl-5 text-sm leading-relaxed text-ink-soft">
                            {careers.note}
                        </p>
                    </Reveal>

                    <Reveal>
                        <a
                            href={`mailto:${company.email}?subject=Career%20interest%20at%20ROVANTA`}
                            className="group mt-12 inline-flex items-center gap-3 border-b border-ink pb-1.5 text-lg text-ink transition-colors hover:border-copper hover:text-copper"
                        >
                            Send your CV
                            <span
                                aria-hidden="true"
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            >
                                &rarr;
                            </span>
                        </a>
                    </Reveal>
                </div>
            </section>
        </main>
    );
}
