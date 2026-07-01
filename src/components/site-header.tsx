import { Beaker, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
    { label: "About", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "Facility", href: "#facility" },
    { label: "Quality", href: "#quality" },
    { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-xl">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:h-24">
                <a href="#home" className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/25 md:h-14 md:w-14">
                        <Beaker className="h-6 w-6" />
                    </div>

                    <div>
                        <p className="font-heading text-xl font-bold tracking-[0.22em] text-foreground md:text-2xl">
                            ROVANTA
                        </p>
                        <p className="text-sm uppercase tracking-[0.28em] text-muted-foreground">
                            PVT. LTD.
                        </p>
                    </div>
                </a>

                <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="transition hover:text-foreground"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                <div className="hidden md:block">
                    <Button asChild className="rounded-full px-6 font-semibold">
                        <a href="#contact">Request Quote</a>
                    </Button>
                </div>

                <Sheet>
                    <SheetTrigger asChild>
                        <Button
                            variant="outline"
                            size="icon"
                            className="h-12 w-12 rounded-full border-white/15 bg-white/4 text-white backdrop-blur hover:border-primary/50 hover:bg-primary/10 hover:text-primary md:hidden"
                        >
                            <Menu className="h-6 w-6 text-current" />
                            <span className="sr-only">Open navigation</span>
                        </Button>
                    </SheetTrigger>

                    <SheetContent
                        side="right"
                        className="w-[82vw] border-l border-white/10 bg-background/95 px-7 py-8 backdrop-blur-xl sm:max-w-sm"
                    >
                        <SheetHeader className="mb-10 text-left pl-0">
                            <SheetTitle className="font-heading text-3xl text-foreground">
                                Rovanta
                            </SheetTitle>
                        </SheetHeader>

                        <nav className="flex flex-col gap-7">
                            {navItems.map((item) => (
                                <SheetClose key={item.href} asChild>
                                    <a
                                        href={item.href}
                                        className="text-2xl font-medium tracking-tight text-muted-foreground transition hover:text-primary"
                                    >
                                        {item.label}
                                    </a>
                                </SheetClose>
                            ))}
                        </nav>

                        <div className="mt-10">
                            <SheetClose asChild>
                                <Button asChild className="w-full rounded-full">
                                    <a href="#contact">Request Quote</a>
                                </Button>
                            </SheetClose>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
}
