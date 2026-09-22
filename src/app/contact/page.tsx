import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { siteContent } from "@/content/site-content";
import { createPageMetadata } from "@/lib/metadata";

const { contact, company } = siteContent;

export const metadata = createPageMetadata(
    contact.hero.title,
    contact.hero.description,
    "/contact",
);

const desks = [
    { title: "General enquiries", value: company.email },
    { title: "Sales", value: company.salesEmail },
    { title: "Purchasing", value: company.purchaseEmail },
];

export default function ContactPage() {
    return (
        <main>
            <PageHero {...contact.hero} />

            <section className="ground-paper band">
                <div className="shell">
                    <Reveal>
                        <div className="grid gap-x-16 border-t border-ink pt-6 sm:grid-cols-3">
                            {desks.map((desk) => (
                                <div key={desk.title} className="py-2">
                                    <p className="label text-ink-faint">
                                        {desk.title}
                                    </p>
                                    <a
                                        href={`mailto:${desk.value}`}
                                        className="mt-3 block break-all text-ink transition-colors hover:text-copper"
                                    >
                                        {desk.value}
                                    </a>
                                </div>
                            ))}
                        </div>
                    </Reveal>

                    <div className="mt-16 grid gap-x-16 gap-y-14 lg:grid-cols-12">
                        <div className="lg:col-span-5">
                            <Reveal>
                                <p className="label border-t border-ink pt-4 text-copper">
                                    Phone and WhatsApp
                                </p>

                                <a
                                    href={`tel:${company.phoneHref}`}
                                    className="font-display mt-5 block text-3xl text-ink transition-colors hover:text-copper md:text-4xl"
                                >
                                    {company.phoneDisplay}
                                </a>

                                <p className="mt-3 text-sm text-ink-faint">
                                    {company.hours}
                                </p>

                                <Link
                                    href="/quote"
                                    className="group mt-9 inline-flex items-center gap-3 border-b border-ink pb-1.5 text-lg text-ink transition-colors hover:border-copper hover:text-copper"
                                >
                                    Send a detailed enquiry
                                    <span
                                        aria-hidden="true"
                                        className="transition-transform duration-300 group-hover:translate-x-1"
                                    >
                                        &rarr;
                                    </span>
                                </Link>
                            </Reveal>

                            <Reveal delay={0.08}>
                                <p className="label mt-14 border-t border-ink pt-4 text-copper">
                                    Registered office and works
                                </p>

                                <address className="text-pretty mt-5 max-w-[42ch] not-italic leading-[1.85] text-ink-soft">
                                    {company.address.full}
                                </address>

                                <p className="font-mono mt-4 text-sm text-ink-faint">
                                    {company.coordinates.display}
                                </p>
                            </Reveal>
                        </div>

                        <Reveal
                            delay={0.12}
                            className="lg:col-span-6 lg:col-start-7"
                        >
                            <p className="label border-t border-ink pt-4 text-copper">
                                Getting here
                            </p>

                            <dl className="mt-2">
                                {contact.transport.map((item) => (
                                    <div
                                        key={item.label}
                                        className="grid grid-cols-1 gap-1 border-b border-line py-4 sm:grid-cols-[9rem_1fr] sm:gap-8"
                                    >
                                        <dt className="label pt-1 text-ink-faint">
                                            {item.label}
                                        </dt>
                                        <dd className="text-pretty leading-relaxed text-ink">
                                            {item.value}
                                        </dd>
                                    </div>
                                ))}
                            </dl>

                            <iframe
                                className="mt-10 h-[420px] w-full border border-line"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="ROVANTA plant location map"
                                src={`https://www.google.com/maps?q=${company.coordinates.latitude},${company.coordinates.longitude}&z=13&output=embed`}
                            />
                        </Reveal>
                    </div>
                </div>
            </section>
        </main>
    );
}
