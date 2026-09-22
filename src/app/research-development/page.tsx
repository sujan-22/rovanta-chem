import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { siteContent } from "@/content/site-content";
import { createPageMetadata } from "@/lib/metadata";

const content = siteContent.researchDevelopment;

export const metadata = createPageMetadata(
    content.hero.title,
    content.hero.description,
    "/research-development",
);

export default function ResearchDevelopmentPage() {
    return (
        <main>
            <PageHero {...content.hero} />

            <section className="ground-paper band">
                <div className="shell">
                    <div className="border-t border-ink">
                        {content.items.map((item, index) => (
                            <Reveal key={item.title} delay={index * 0.08}>
                                <article className="grid gap-x-16 gap-y-4 border-b border-line py-10 md:grid-cols-12 md:py-12">
                                    <div className="flex gap-6 md:col-span-5">
                                        <span className="label shrink-0 pt-2 text-ink-faint">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>

                                        <h2 className="text-balance font-display type-subtitle text-ink">
                                            {item.title}
                                        </h2>
                                    </div>

                                    <p className="text-pretty leading-[1.85] text-ink-soft md:col-span-6 md:col-start-7">
                                        {item.description}
                                    </p>
                                </article>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
