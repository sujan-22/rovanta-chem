import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { siteContent } from "@/content/site-content";
import { createPageMetadata } from "@/lib/metadata";

const { industries } = siteContent;

export const metadata = createPageMetadata(
    industries.hero.title,
    industries.hero.description,
    "/industries",
);

export default function IndustriesPage() {
    return (
        <main>
            <PageHero {...industries.hero} />

            <section className="ground-paper band">
                <div className="shell">
                    <div className="border-t border-ink">
                        {industries.items.map((industry, index) => (
                            <Reveal
                                key={industry.title}
                                delay={Math.min(index * 0.06, 0.24)}
                            >
                                <article className="grid gap-x-16 gap-y-4 border-b border-line py-10 md:grid-cols-12">
                                    <div className="flex gap-6 md:col-span-5">
                                        <span className="label shrink-0 pt-2 text-ink-faint">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>

                                        <h2 className="text-balance font-display type-subtitle text-ink">
                                            {industry.title}
                                        </h2>
                                    </div>

                                    <p className="text-pretty leading-[1.85] text-ink-soft md:col-span-6 md:col-start-7">
                                        {industry.description}
                                    </p>
                                </article>
                            </Reveal>
                        ))}
                    </div>

                    <Reveal>
                        <div className="mt-20 grid gap-x-16 gap-y-8 lg:grid-cols-12">
                            <p className="label text-copper lg:col-span-3">
                                {industries.exportReadiness.eyebrow}
                            </p>

                            <div className="lg:col-span-9">
                                <h2 className="text-balance font-display type-subtitle max-w-[22ch] text-ink">
                                    {industries.exportReadiness.title}
                                </h2>

                                <p className="text-pretty mt-6 max-w-[68ch] leading-[1.85] text-ink-soft">
                                    {industries.exportReadiness.description}
                                </p>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>
        </main>
    );
}
