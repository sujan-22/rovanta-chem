import { FaLinkedinIn } from "react-icons/fa";

import { MediaFrame } from "@/components/media-frame";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { siteContent } from "@/content/site-content";
import { createPageMetadata } from "@/lib/metadata";

const { leadership } = siteContent;

export const metadata = createPageMetadata(
    leadership.hero.title,
    leadership.hero.description,
    "/leadership",
);

export default function LeadershipPage() {
    return (
        <main>
            <PageHero {...leadership.hero} />

            <section className="ground-paper band">
                <div className="shell">
                    {leadership.people.map((person, index) => (
                        <Reveal key={person.name} delay={index * 0.08}>
                            <article className="grid gap-x-16 gap-y-8 border-t border-ink pt-10 pb-16 last:pb-0 md:grid-cols-12 md:pt-12 md:pb-20">
                                <div className="md:col-span-3">
                                    <MediaFrame
                                        className="aspect-4/5 w-full max-w-[16rem]"
                                        sizes="(min-width: 768px) 25vw, 60vw"
                                    />
                                </div>

                                <div className="md:col-span-8 md:col-start-5">
                                    <p className="label text-copper">
                                        {person.role}
                                    </p>

                                    <h2 className="font-display type-subtitle mt-5 text-ink">
                                        {person.name}
                                    </h2>

                                    {person.linkedin ? (
                                        <a
                                            href={person.linkedin}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="mt-4 inline-flex items-center gap-2.5 border-b border-line pb-1 text-sm text-ink-soft transition-colors hover:border-copper hover:text-copper"
                                        >
                                            <FaLinkedinIn className="size-3.5" />
                                            LinkedIn profile
                                        </a>
                                    ) : null}

                                    <p className="text-pretty mt-7 max-w-[62ch] leading-[1.85] text-ink-soft">
                                        {person.description}
                                    </p>

                                    <ul className="mt-9">
                                        {person.responsibilities.map(
                                            (responsibility, itemIndex) => (
                                                <li
                                                    key={responsibility}
                                                    className="flex gap-6 border-b border-line py-4"
                                                >
                                                    <span className="label shrink-0 pt-1 text-ink-faint">
                                                        {String(
                                                            itemIndex + 1,
                                                        ).padStart(2, "0")}
                                                    </span>
                                                    <span className="text-pretty text-sm leading-relaxed text-ink">
                                                        {responsibility}
                                                    </span>
                                                </li>
                                            ),
                                        )}
                                    </ul>
                                </div>
                            </article>
                        </Reveal>
                    ))}
                </div>
            </section>
        </main>
    );
}
