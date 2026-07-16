import { Mail, MapPin, Phone } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { siteContent } from "@/content/site-content";
import { createPageMetadata } from "@/lib/metadata";

const { contact, company } = siteContent;

export const metadata = createPageMetadata(
    contact.hero.title,
    contact.hero.description,
    "/contact"
);

export default function ContactPage() {
    return (
        <main>
            <PageHero {...contact.hero} />

            <section className="py-20 md:py-24">
                <div className="site-container grid gap-8 lg:grid-cols-2">
                    <div>
                        <div className="surface-card overflow-hidden">
                            <table className="w-full border-collapse text-left">
                                <tbody>
                                    <tr className="border-b border-line">
                                        <th className="w-44 bg-paper-deep px-5 py-4 font-mono text-xs uppercase tracking-wider">
                                            Email
                                        </th>
                                        <td className="px-5 py-4">
                                            <a href={`mailto:${company.email}`}>
                                                {company.email}
                                            </a>
                                            <br />
                                            <a
                                                href={`mailto:${company.salesEmail}`}
                                            >
                                                {company.salesEmail}
                                            </a>
                                            <br />
                                            <a
                                                href={`mailto:${company.purchaseEmail}`}
                                            >
                                                {company.purchaseEmail}
                                            </a>
                                        </td>
                                    </tr>

                                    <tr className="border-b border-line">
                                        <th className="bg-paper-deep px-5 py-4 font-mono text-xs uppercase tracking-wider">
                                            Phone / WhatsApp
                                        </th>
                                        <td className="px-5 py-4">
                                            <a
                                                href={`tel:${company.phoneHref}`}
                                            >
                                                {company.phoneDisplay}
                                            </a>
                                        </td>
                                    </tr>

                                    <tr className="border-b border-line">
                                        <th className="bg-paper-deep px-5 py-4 font-mono text-xs uppercase tracking-wider">
                                            Coordinates
                                        </th>
                                        <td className="px-5 py-4 font-mono">
                                            {company.coordinates.display}
                                        </td>
                                    </tr>

                                    {contact.transport.map((item) => (
                                        <tr
                                            key={item.label}
                                            className="border-b border-line last:border-b-0"
                                        >
                                            <th className="bg-paper-deep px-5 py-4 font-mono text-xs uppercase tracking-wider">
                                                {item.label}
                                            </th>
                                            <td className="px-5 py-4">
                                                {item.value}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <iframe
                            className="mt-6 h-[380px] w-full rounded-xl border-0"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="ROVANTA plant location map"
                            src={`https://www.google.com/maps?q=${company.coordinates.latitude},${company.coordinates.longitude}&z=13&output=embed`}
                        />
                    </div>

                    <div className="grid content-start gap-5">
                        <article className="surface-card p-6">
                            <Mail className="size-6 text-copper-deep" />
                            <h2 className="mt-4 font-heading text-xl font-bold">
                                Sales and general inquiries
                            </h2>
                            <p className="mt-3 leading-7 text-ink-soft">
                                Use the quotation page for product, sample,
                                specification and document requests.
                            </p>
                        </article>

                        <article className="surface-card p-6">
                            <Phone className="size-6 text-verdigris-deep" />
                            <h2 className="mt-4 font-heading text-xl font-bold">
                                Business hours
                            </h2>
                            <p className="mt-3 text-ink-soft">
                                {company.hours}
                            </p>
                        </article>

                        <article className="surface-card p-6">
                            <MapPin className="size-6 text-sulphate" />
                            <h2 className="mt-4 font-heading text-xl font-bold">
                                Registered office & works
                            </h2>
                            <p className="mt-3 leading-7 text-ink-soft">
                                {company.address.full}
                            </p>
                        </article>
                    </div>
                </div>
            </section>
        </main>
    );
}
