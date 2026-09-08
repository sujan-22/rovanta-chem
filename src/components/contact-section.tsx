import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { siteContent } from "@/content/site-content";

export function ContactSection() {
    const { company, contact } = siteContent;

    const emailContacts = [
        {
            title: "General Inquiries",
            value: company.email,
            href: `mailto:${company.email}`,
        },
        {
            title: "Sales",
            value: company.salesEmail,
            href: `mailto:${company.salesEmail}`,
        },
        {
            title: "Purchasing",
            value: company.purchaseEmail,
            href: `mailto:${company.purchaseEmail}`,
        },
    ];

    return (
        <section id="contact" className="scroll-mt-24 py-20 md:py-24">
            <div className="site-container">
                <Reveal>
                    <SectionHeading
                        eyebrow={contact.hero.eyebrow}
                        title={contact.hero.title}
                        description={contact.hero.description}
                    />
                </Reveal>

                <div className="mt-12 grid gap-5 md:grid-cols-3">
                    {emailContacts.map((item, index) => (
                        <Reveal key={item.title} delay={index * 0.07}>
                            <a
                                href={item.href}
                                className="surface-card block h-full p-6 transition hover:-translate-y-1 hover:border-copper"
                            >
                                <Mail className="size-6 text-copper-deep" />

                                <h3 className="mt-5 font-heading text-lg font-bold text-ink">
                                    {item.title}
                                </h3>

                                <p className="mt-2 break-all text-sm text-ink-soft">
                                    {item.value}
                                </p>
                            </a>
                        </Reveal>
                    ))}
                </div>

                <div className="mt-6 grid gap-5 lg:grid-cols-2">
                    <Reveal>
                        <div className="surface-card h-full p-6">
                            <Phone className="size-6 text-verdigris-deep" />

                            <h3 className="mt-5 font-heading text-xl font-bold text-ink">
                                Phone and WhatsApp
                            </h3>

                            <a
                                href={`tel:${company.phoneHref}`}
                                className="mt-2 block text-ink-soft transition hover:text-ink"
                            >
                                {company.phoneDisplay}
                            </a>

                            <p className="mt-2 text-sm text-ink-soft">
                                {company.hours}
                            </p>

                            <Button asChild className="mt-6">
                                <Link href="/quote">Start an Inquiry</Link>
                            </Button>
                        </div>
                    </Reveal>

                    <Reveal delay={0.08}>
                        <div className="surface-card h-full p-6">
                            <MapPin className="size-6 text-sulphate" />

                            <h3 className="mt-5 font-heading text-xl font-bold text-ink">
                                Registered Office and Works
                            </h3>

                            <p className="mt-2 leading-7 text-ink-soft">
                                {company.address.full}
                            </p>

                            <dl className="mt-5 grid gap-3 border-t border-line pt-5">
                                {contact.transport.map((item) => (
                                    <div
                                        key={item.label}
                                        className="grid gap-1 sm:grid-cols-[130px_1fr]"
                                    >
                                        <dt className="font-mono text-xs uppercase tracking-wider text-ink-soft">
                                            {item.label}
                                        </dt>

                                        <dd className="text-sm leading-6 text-ink">
                                            {item.value}
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
