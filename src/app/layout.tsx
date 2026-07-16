import type { Metadata } from "next";
import { Inter, Libre_Baskerville, Roboto_Mono } from "next/font/google";

import "./globals.css";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-body",
});

const libreBaskerville = Libre_Baskerville({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-display",
});

const robotoMono = Roboto_Mono({
    subsets: ["latin"],
    variable: "--font-code",
});

export const metadata: Metadata = {
    metadataBase: new URL(siteConfig.domain),
    title: {
        default:
            "ROVANTA PVT. LTD. | Specialty Copper Compounds & Chemical Manufacturing",
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
        title: "ROVANTA PVT. LTD. | Specialty Copper Compounds & Chemical Manufacturing",
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
                inter.variable,
                libreBaskerville.variable,
                robotoMono.variable,
            )}
        >
            <body>
                <SiteHeader />

                {children}

                <SiteFooter />
                <WhatsAppFloat />
            </body>
        </html>
    );
}
