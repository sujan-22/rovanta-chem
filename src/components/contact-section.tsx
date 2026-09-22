import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { siteContent } from "@/content/site-content";

export function ContactSection() {
    const { company, contact } = siteContent;

    const desks = [
        { title: "General", value: company.email },
        { title: "Sales", value: company.salesEmail },
        { title: "Purchasing", value: company.purchaseEmail },
    ];

    return (
        <section id="contact" className="ground-paper band scroll-mt-24">
            <div className="shell">
                <div className="grid gap-x-16 gap-y-12 lg:grid-cols-12">
                    <Reveal className="lg:col-span-5">
                        <SectionHeading
                            eyebrow={contact.hero.eyebrow}
                            title={contact.hero.title}
                            description={contact.hero.description}
                            index="07"
                        />

                        <Link
                            href="/quote"
                            className="group mt-10 inline-flex items-center gap-3 border-b border-ink pb-1.5 text-lg text-ink transition-colors hover:border-copper hover:text-copper"
                        >
                            Start an enquiry
                            <span
                                aria-hidden="true"
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            >
                                &rarr;
                            </span>
                        </Link>
                    </Reveal>

                    <div className="lg:col-span-6 lg:col-start-7">
                        <Reveal>
                            <div className="grid gap-x-16 sm:grid-cols-3">
                                {desks.map((desk) => (
                                    <div
                                        key={desk.title}
                                        className="border-t border-ink pt-4 pb-6"
                                    >
                                        <p className="label text-ink-faint">
                                            {desk.title}
                                        </p>
                                        <a
                                            href={`mailto:${desk.value}`}
                                            className="mt-3 block break-all text-sm text-ink transition-colors hover:text-copper"
                                        >
                                            {desk.value}
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </Reveal>

                        <Reveal delay={0.08}>
                            <div className="mt-8 grid gap-x-16 gap-y-8 sm:grid-cols-2">
                                <div className="border-t border-line pt-4">
                                    <p className="label text-ink-faint">
                                        Phone and WhatsApp
                                    </p>
                                    <a
                                        href={`tel:${company.phoneHref}`}
                                        className="font-display mt-3 block text-2xl text-ink transition-colors hover:text-copper"
                                    >
                                        {company.phoneDisplay}
                                    </a>
                                    <p className="mt-2 text-sm text-ink-faint">
                                        {company.hours}
                                    </p>
                                </div>

                                <div className="border-t border-line pt-4">
                                    <p className="label text-ink-faint">
                                        Registered office and works
                                    </p>
                                    <address className="text-pretty mt-3 text-sm not-italic leading-relaxed text-ink-soft">
                                        {company.address.full}
                                    </address>
                                </div>
                            </div>
                        </Reveal>

                        <Reveal delay={0.12}>
                            <dl className="mt-10">
                                {contact.transport.map((item) => (
                                    <div
                                        key={item.label}
                                        className="grid grid-cols-1 gap-1 border-b border-line py-4 sm:grid-cols-[9rem_1fr] sm:gap-8"
                                    >
                                        <dt className="label pt-1 text-ink-faint">
                                            {item.label}
                                        </dt>
                                        <dd className="text-sm leading-relaxed text-ink">
                                            {item.value}
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
