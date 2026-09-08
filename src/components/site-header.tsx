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
                            aria-label="ROVANTA on LinkedIn"
                            className="inline-flex items-center gap-1.5 transition hover:text-white"
                        >
                            <FaLinkedinIn className="size-3.5" />
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>

            <div className="border-b border-line bg-card/95 shadow-[0_1px_3px_rgb(14_37_48/6%)] backdrop-blur-xl">
                <div className="site-container flex h-20 items-center justify-between gap-6">
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
                            className="h-14 w-auto object-contain md:h-16"
                        />
                    </Link>

                    <nav
                        aria-label="Primary"
                        className="hidden items-center gap-1 lg:flex"
                    >
                        {primaryNavigation.map((item) =>
                            item.cta ? (
                                <Button
                                    key={item.href}
                                    asChild
                                    size="sm"
                                    className="ml-2 bg-copper text-white hover:bg-copper-deep"
                                >
                                    <Link href={item.href}>{item.label}</Link>
                                </Button>
                            ) : (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    aria-current={
                                        isCurrent(item.href)
                                            ? "page"
                                            : undefined
                                    }
                                    className={cn(
                                        "relative rounded-md px-3 py-2 text-sm font-medium transition-colors after:absolute after:inset-x-3 after:-bottom-px after:h-0.5 after:origin-left after:scale-x-0 after:bg-copper after:transition-transform hover:text-copper-deep hover:after:scale-x-100",
                                        isCurrent(item.href)
                                            ? "text-copper-deep after:scale-x-100"
                                            : "text-ink",
                                    )}
                                >
                                    {item.label}
                                </Link>
                            ),
                        )}
                    </nav>

                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant="outline"
                                size="icon"
                                className="text-ink lg:hidden"
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
                            className="flex w-[88vw] flex-col overflow-hidden border-line bg-card p-0 sm:max-w-sm"
                        >
                            <SheetHeader className="shrink-0 px-7 pt-[max(1.25rem,env(safe-area-inset-top))] pb-3 text-left">
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
                                            className="h-14 w-auto object-contain"
                                        />
                                    </Link>
                                </SheetTitle>
                            </SheetHeader>

                            <nav
                                aria-label="Mobile"
                                className="flex min-h-0 flex-1 flex-col gap-1 overflow-y-auto overscroll-contain px-7 py-2"
                            >
                                {sheetLinks.map((item) => (
                                    <SheetClose key={item.href} asChild>
                                        <Link
                                            href={item.href}
                                            aria-current={
                                                isCurrent(item.href)
                                                    ? "page"
                                                    : undefined
                                            }
                                            className={cn(
                                                "rounded-lg px-4 py-3 text-lg font-medium transition hover:bg-paper-deep",
                                                isCurrent(item.href)
                                                    ? "bg-paper-deep text-copper-deep"
                                                    : "text-ink",
                                            )}
                                        >
                                            {item.label}
                                        </Link>
                                    </SheetClose>
                                ))}
                            </nav>

                            <div className="shrink-0 border-t border-line px-7 pt-5 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
                                {sheetCta ? (
                                    <SheetClose asChild>
                                        <Link
                                            href={sheetCta.href}
                                            className="block rounded-lg bg-copper px-4 py-3 text-center font-semibold text-white transition hover:bg-copper-deep"
                                        >
                                            {sheetCta.label}
                                        </Link>
                                    </SheetClose>
                                ) : null}

                                <div className="mt-4 grid gap-3 text-sm text-ink-soft">
                                    <a
                                        href={`mailto:${company.email}`}
                                        className="inline-flex items-center gap-2 transition hover:text-ink"
                                    >
                                        <Mail className="size-4" />
                                        {company.email}
                                    </a>

                                    <a
                                        href={`tel:${company.phoneHref}`}
                                        className="inline-flex items-center gap-2 transition hover:text-ink"
                                    >
                                        <Phone className="size-4" />
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
