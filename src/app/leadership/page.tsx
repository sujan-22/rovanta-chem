import { FaLinkedinIn } from "react-icons/fa";

import { PageHero } from "@/components/page-hero";
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

            <section className="py-20 md:py-24">
                <div className="site-container grid gap-6 lg:grid-cols-2">
                    {leadership.people.map((person) => (
                        <article key={person.name} className="surface-card p-7">
                            <p className="technical-label text-copper-deep">
                                {person.role}
                            </p>

                            <h2 className="mt-3 font-heading text-3xl font-bold">
                                {person.name}
                            </h2>

                            {person.linkedin ? (
                                <a
                                    href={person.linkedin}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-copper-deep"
                                >
                                    <FaLinkedinIn className="size-4" />
                                    View LinkedIn profile
                                </a>
                            ) : null}

                            <p className="mt-5 leading-8 text-ink-soft">
                                {person.description}
                            </p>

                            <ul className="mt-6 grid gap-3">
                                {person.responsibilities.map(
                                    (responsibility) => (
                                        <li
                                            key={responsibility}
                                            className="border-l-2 border-verdigris pl-4 leading-7 text-ink-soft"
                                        >
                                            {responsibility}
                                        </li>
                                    ),
                                )}
                            </ul>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
}
