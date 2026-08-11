"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Menu, Phone } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { siteContent } from "@/content/site-content";

export function SiteHeader() {
    const { company, navigation } = siteContent;

    return (
        <header className="sticky top-0 z-50">
            <div className="hidden bg-oxide py-2 text-xs text-[#eadfd6] lg:block">
                <div className="site-container flex items-center justify-between gap-6">
                    <p>{company.address.short}</p>

                    <div className="flex items-center gap-5">
                        <a
                            href={`mailto:${company.email}`}
                            className="inline-flex items-center gap-1.5 transition hover:text-white"
                        >
                            <Mail className="size-3.5" />
                            {company.email}
                        </a>

                        <a
                            href={`tel:${company.phoneHref}`}
                            className="inline-flex items-center gap-1.5 transition hover:text-white"
                        >
                            <Phone className="size-3.5" />
                            {company.phoneDisplay}
                        </a>

                        <a
                            href={company.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 transition hover:text-white"
                        >
                            <FaLinkedinIn className="size-3.5" />
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>

            <div className="border-b border-line bg-card/95 backdrop-blur-xl">
                <div className="site-container flex h-24 items-center justify-between gap-5">
                    <Link
                        href="/"
                        aria-label={`${company.legalName} home`}
                        className="flex shrink-0 items-center"
                    >
                        <Image
                            src="/final-logo.png"
                            alt={`${company.legalName} logo`}
                            width={1030}
                            height={985}
                            priority
                            className="h-25 w-auto object-contain"
                        />
                    </Link>

                    <nav className="hidden items-center gap-0.5 2xl:flex">
                        {navigation.map((item) => (
                            <Button
                                key={item.href}
                                asChild
                                variant={item.cta ? "default" : "ghost"}
                                size="sm"
                            >
                                <Link href={item.href}>{item.label}</Link>
                            </Button>
                        ))}
                    </nav>

                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant="outline"
                                size="icon"
                                className="text-ink 2xl:hidden"
                            >
                                <Menu className="size-5" />
                                <span className="sr-only">Open navigation</span>
                            </Button>
                        </SheetTrigger>

                        <SheetContent
                            side="right"
                            className="w-[88vw] border-line bg-card px-7 py-8 sm:max-w-sm"
                        >
                            <SheetHeader className="text-left">
                                <SheetTitle>
                                    <Link
                                        href="/"
                                        aria-label={`${company.legalName} home`}
                                        className="inline-flex"
                                    >
                                        <Image
                                            src="/final-logo.png"
                                            alt={`${company.legalName} logo`}
                                            width={1030}
                                            height={985}
                                            className="h-24 w-auto object-contain"
                                        />
                                    </Link>
                                </SheetTitle>
                            </SheetHeader>

                            <nav className="mt-8 flex flex-col gap-1">
                                {navigation.map((item) => (
                                    <SheetClose key={item.href} asChild>
                                        <Link
                                            href={item.href}
                                            className={
                                                item.cta
                                                    ? "mt-4 rounded-lg bg-copper px-4 py-3 text-center font-semibold text-white"
                                                    : "rounded-lg px-4 py-3 text-lg font-medium text-ink transition hover:bg-paper-deep"
                                            }
                                        >
                                            {item.label}
                                        </Link>
                                    </SheetClose>
                                ))}
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
