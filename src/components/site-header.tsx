"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
import { siteContent, visibleLinks } from "@/content/site-content";
import { cn } from "@/lib/utils";

export function SiteHeader() {
    const { company } = siteContent;
    const navigation = visibleLinks(siteContent.navigation);
    const primaryNavigation = visibleLinks(siteContent.primaryNavigation);
    const pathname = usePathname();

    // The quote CTA is pinned in the sheet footer rather than left at the end
    // of a scrolling list, so it stays reachable on short screens.
    const sheetLinks = navigation.filter((item) => !item.cta);
    const sheetCta = navigation.find((item) => item.cta);

    const isCurrent = (href: string) =>
        href === "/" ? pathname === "/" : pathname.startsWith(href);

    return (
        <header className="sticky top-0 z-50">
            <div className="hidden border-b border-white/10 bg-ink py-2.5 lg:block">
                <div className="shell flex items-center justify-between gap-8">
                    <p className="label text-on-ink-faint">
                        {company.address.short}
                    </p>

                    <div className="flex items-center gap-7">
                        <a
                            href={`mailto:${company.email}`}
                            className="label inline-flex items-center gap-2 text-on-ink-soft transition-colors hover:text-copper-bright"
                        >
                            <Mail className="size-3" />
                            {company.email}
                        </a>

                        <a
                            href={`tel:${company.phoneHref}`}
                            className="label inline-flex items-center gap-2 text-on-ink-soft transition-colors hover:text-copper-bright"
                        >
                            <Phone className="size-3" />
                            {company.phoneDisplay}
                        </a>

                        <a
                            href={company.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="ROVANTA on LinkedIn"
                            className="text-on-ink-soft transition-colors hover:text-copper-bright"
                        >
                            <FaLinkedinIn className="size-3.5" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="border-b border-line bg-paper/90 backdrop-blur-xl">
                <div className="shell flex h-18 items-center justify-between gap-8 md:h-20">
                    <Link
                        href="/"
                        aria-label={`${company.legalName} home`}
                        className="flex shrink-0 items-center"
                    >
                        <Image
                            src="/final-logo.png"
                            alt={`${company.legalName} logo`}
                            width={1536}
                            height={1024}
                            priority
                            className="h-12 w-auto object-contain md:h-14"
                        />
                    </Link>

                    <nav
                        aria-label="Primary"
                        className="hidden items-center gap-9 lg:flex"
                    >
                        {primaryNavigation
                            .filter((item) => !item.cta)
                            .map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    aria-current={
                                        isCurrent(item.href)
                                            ? "page"
                                            : undefined
                                    }
                                    className={cn(
                                        "relative py-1 text-sm transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-copper after:transition-transform after:duration-300 hover:text-copper hover:after:scale-x-100",
                                        isCurrent(item.href)
                                            ? "text-copper after:scale-x-100"
                                            : "text-ink-soft",
                                    )}
                                >
                                    {item.label}
                                </Link>
                            ))}

                        {primaryNavigation
                            .filter((item) => item.cta)
                            .map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="group inline-flex items-center gap-2 border-b border-ink pb-1 text-sm text-ink transition-colors hover:border-copper hover:text-copper"
                                >
                                    {item.label}
                                    <span
                                        aria-hidden="true"
                                        className="transition-transform duration-300 group-hover:translate-x-1"
                                    >
                                        &rarr;
                                    </span>
                                </Link>
                            ))}
                    </nav>

                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="rounded-none text-ink hover:bg-paper-2 lg:hidden"
                            >
                                <Menu className="size-5" />
                                <span className="sr-only">Open navigation</span>
                            </Button>
                        </SheetTrigger>

                        {/*
                         * Fixed logo, scrolling link list, pinned footer. The
                         * safe-area padding keeps the logo out from under the
                         * notch and the CTA above the iOS home indicator.
                         */}
                        <SheetContent
                            side="right"
                            className="flex w-[90vw] flex-col overflow-hidden border-line bg-paper p-0 sm:max-w-md"
                        >
                            <SheetHeader className="shrink-0 border-b border-line px-6 pt-[max(1.25rem,env(safe-area-inset-top))] pb-4 text-left">
                                <SheetTitle>
                                    <Link
                                        href="/"
                                        aria-label={`${company.legalName} home`}
                                        className="inline-flex"
                                    >
                                        <Image
                                            src="/final-logo.png"
                                            alt={`${company.legalName} logo`}
                                            width={1536}
                                            height={1024}
                                            className="h-12 w-auto object-contain"
                                        />
                                    </Link>
                                </SheetTitle>
                            </SheetHeader>

                            <nav
                                aria-label="Mobile"
                                className="flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-contain px-6"
                            >
                                {sheetLinks.map((item, index) => (
                                    <SheetClose key={item.href} asChild>
                                        <Link
                                            href={item.href}
                                            aria-current={
                                                isCurrent(item.href)
                                                    ? "page"
                                                    : undefined
                                            }
                                            className={cn(
                                                "flex items-baseline gap-4 border-b border-line py-4 font-display text-2xl transition-colors",
                                                isCurrent(item.href)
                                                    ? "text-copper"
                                                    : "text-ink hover:text-copper",
                                            )}
                                        >
                                            <span className="label text-ink-faint">
                                                {String(index + 1).padStart(
                                                    2,
                                                    "0",
                                                )}
                                            </span>
                                            {item.label}
                                        </Link>
                                    </SheetClose>
                                ))}
                            </nav>

                            <div className="shrink-0 border-t border-line px-6 pt-5 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
                                {sheetCta ? (
                                    <SheetClose asChild>
                                        <Link
                                            href={sheetCta.href}
                                            className="block bg-ink px-5 py-4 text-center text-sm tracking-wide text-on-ink transition-colors hover:bg-ink-lift"
                                        >
                                            {sheetCta.label}
                                        </Link>
                                    </SheetClose>
                                ) : null}

                                <div className="mt-5 grid gap-2.5">
                                    <a
                                        href={`mailto:${company.email}`}
                                        className="inline-flex items-center gap-2.5 text-sm text-ink-soft transition-colors hover:text-ink"
                                    >
                                        <Mail className="size-3.5" />
                                        {company.email}
                                    </a>

                                    <a
                                        href={`tel:${company.phoneHref}`}
                                        className="inline-flex items-center gap-2.5 text-sm text-ink-soft transition-colors hover:text-ink"
                                    >
                                        <Phone className="size-3.5" />
                                        {company.phoneDisplay}
                                    </a>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
