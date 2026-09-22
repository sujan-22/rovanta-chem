import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";

import { siteContent, visibleLinks } from "@/content/site-content";

export function SiteFooter() {
    const { company, footer } = siteContent;

    const productLinks = visibleLinks(footer.productLinks);
    const companyLinks = visibleLinks(footer.companyLinks);
    const legalLinks = visibleLinks(footer.legalLinks);

    const columns = [
        { title: "Products", links: productLinks },
        { title: "Company", links: companyLinks },
    ];

    return (
        <footer className="ground-ink">
            <div className="shell">
                {/* Closing call to action, set as the largest type on the page. */}
                <div className="border-b border-white/12 py-20 md:py-28">
                    <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
                        <div className="lg:col-span-7">
                            <p className="label text-copper-bright">
                                Start an enquiry
                            </p>

                            <p className="text-balance font-display type-title mt-7 max-w-[16ch] text-on-ink">
                                Tell us the grade, quantity and destination.
                            </p>
                        </div>

                        <div className="flex flex-col justify-end gap-8 lg:col-span-5">
                            <p className="text-pretty max-w-[44ch] leading-relaxed text-on-ink-soft">
                                {footer.summary}
                            </p>

                            <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
                                <Link
                                    href="/quote"
                                    className="group inline-flex items-center gap-3 border-b border-copper-bright pb-1.5 text-lg text-copper-bright transition-colors hover:border-on-ink hover:text-on-ink"
                                >
                                    Request a quote
                                    <span
                                        aria-hidden="true"
                                        className="transition-transform duration-300 group-hover:translate-x-1"
                                    >
                                        &rarr;
                                    </span>
                                </Link>

                                <Link
                                    href="/contact"
                                    className="border-b border-transparent pb-1.5 text-lg text-on-ink-soft transition-colors hover:border-on-ink-soft hover:text-on-ink"
                                >
                                    Contact
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid gap-12 py-16 md:py-20 lg:grid-cols-12 lg:gap-16">
                    <div className="lg:col-span-5">
                        <Link
                            href="/"
                            aria-label={`${company.legalName} home`}
                            className="inline-flex"
                        >
                            <Image
                                src="/final-logo-light.png"
                                alt={`${company.legalName} logo`}
                                width={1536}
                                height={1024}
                                className="h-16 w-auto object-contain"
                            />
                        </Link>

                        <address className="mt-8 max-w-[38ch] text-sm not-italic leading-relaxed text-on-ink-soft">
                            {company.address.full}
                        </address>

                        <div className="mt-6 grid gap-1.5 text-sm">
                            <a
                                href={`mailto:${company.email}`}
                                className="text-on-ink-soft transition-colors hover:text-copper-bright"
                            >
                                {company.email}
                            </a>

                            <a
                                href={`tel:${company.phoneHref}`}
                                className="text-on-ink-soft transition-colors hover:text-copper-bright"
                            >
                                {company.phoneDisplay}
                            </a>
                        </div>

                        <a
                            href={company.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="label mt-7 inline-flex items-center gap-2.5 text-on-ink-faint transition-colors hover:text-copper-bright"
                        >
                            <FaLinkedinIn className="size-3.5" />
                            LinkedIn
                        </a>
                    </div>

                    {columns.map((column) => (
                        <nav
                            key={column.title}
                            aria-label={column.title}
                            className="lg:col-span-3"
                        >
                            <p className="label border-t border-white/15 pt-4 text-on-ink-faint">
                                {column.title}
                            </p>

                            <div className="mt-5 grid gap-3">
                                {column.links.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className="text-sm text-on-ink-soft transition-colors hover:text-copper-bright"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </nav>
                    ))}
                </div>

                <div className="flex flex-col gap-4 border-t border-white/12 py-8 md:flex-row md:items-center md:justify-between">
                    <p className="label text-on-ink-faint">
                        &copy; {new Date().getFullYear()} {company.legalName}
                    </p>

                    {legalLinks.length > 0 ? (
                        <div className="flex gap-8">
                            {legalLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="label text-on-ink-faint transition-colors hover:text-on-ink"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    ) : null}
                </div>
            </div>
        </footer>
    );
}
