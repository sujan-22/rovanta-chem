import type { Metadata } from "next";
import { Roboto_Slab, Space_Grotesk } from "next/font/google";
import "./globals.css";

import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    variable: "--font-sans",
});

const robotoSlab = Roboto_Slab({
    subsets: ["latin"],
    variable: "--font-heading",
});

export const metadata: Metadata = {
    metadataBase: new URL(siteConfig.domain),
    title: {
        default: `${siteConfig.name} | Specialty Chemical Manufacturer`,
        template: `%s | ${siteConfig.shortName}`,
    },
    description: siteConfig.description,
    keywords: siteConfig.keywords,
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    openGraph: {
        type: "website",
        locale: "en_IN",
        url: siteConfig.domain,
        siteName: siteConfig.name,
        title: `${siteConfig.name} | Specialty Chemical Manufacturer`,
        description: siteConfig.description,
    },
    alternates: {
        canonical: siteConfig.domain,
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en-IN"
            className={cn(
                "dark scroll-smooth",
                spaceGrotesk.variable,
                robotoSlab.variable,
            )}
            suppressHydrationWarning
        >
            <body className="min-h-screen overflow-x-hidden antialiased">
                {children}
            </body>
        </html>
    );
}
