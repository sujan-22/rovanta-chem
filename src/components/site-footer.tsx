import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";

import { siteContent } from "@/content/site-content";

export function SiteFooter() {
    const { company, footer } = siteContent;

    return (
        <footer className="bg-oxide text-[#d8ccc1]">
            <div className="site-container py-14">
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.4fr]">
                    <div>
                        <Link
                            href="/"
                            aria-label={`${company.legalName} home`}
                            className="inline-flex"
                        >
                            <Image
                                src="/final-logo-light.png"
                                alt={`${company.legalName} logo`}
                                width={1030}
                                height={1000}
                                className="h-24 w-auto object-contain"
                            />
                        </Link>

                        <p className="mt-4 max-w-sm text-sm leading-7">
                            {footer.summary}
                        </p>

                        <a
                            href={company.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-5 inline-flex items-center gap-2 text-sm transition hover:text-white"
                        >
                            <FaLinkedinIn className="size-4" />
                            Follow ROVANTA on LinkedIn
                        </a>
                    </div>

                    <div>
                        <h3 className="font-heading font-bold text-white">
                            Products
                        </h3>

                        <div className="mt-4 grid gap-2">
                            {footer.productLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-sm transition hover:text-white hover:underline"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="font-heading font-bold text-white">
                            Company
                        </h3>

                        <div className="mt-4 grid gap-2">
                            {footer.companyLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-sm transition hover:text-white hover:underline"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="font-heading font-bold text-white">
                            Registered Office & Works
                        </h3>

                        <div className="mt-4 grid gap-3 text-sm">
                            <p className="leading-6">{company.address.full}</p>

                            <a
                                href={`mailto:${company.email}`}
                                className="flex items-start gap-2 transition hover:text-white"
                            >
                                <Mail className="mt-0.5 size-4 shrink-0" />
                                {company.email}
                            </a>

                            <a
                                href={`tel:${company.phoneHref}`}
                                className="flex items-start gap-2 transition hover:text-white"
                            >
                                <Phone className="mt-0.5 size-4 shrink-0" />
                                {company.phoneDisplay}
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-10 flex flex-col gap-4 border-t border-white/15 pt-6 text-xs text-[#a5968a] md:flex-row md:items-center md:justify-between">
                    <p>
                        © {new Date().getFullYear()} {company.legalName}. All
                        rights reserved.
                    </p>

                    <div className="flex gap-5">
                        {footer.legalLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="transition hover:text-white"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
