import type { Metadata } from "next";
import { IBM_Plex_Mono, Instrument_Serif, Inter } from "next/font/google";

import "./globals.css";

import { MotionProvider } from "@/components/motion-provider";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-body",
});

/*
 * A single-weight high-contrast display serif. Weight contrast in the design
 * comes from the sans, so this is never faux-bolded.
 */
const instrumentSerif = Instrument_Serif({
    subsets: ["latin"],
    weight: "400",
    style: ["normal", "italic"],
    variable: "--font-display-serif",
});

const plexMono = IBM_Plex_Mono({
    subsets: ["latin"],
    weight: ["400", "500"],
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
                instrumentSerif.variable,
                plexMono.variable,
            )}
        >
            <body>
                <MotionProvider>
                    <SiteHeader />

                    {children}
                    <Analytics />
                    <SiteFooter />
                    <WhatsAppFloat />
                </MotionProvider>
            </body>
        </html>
    );
}
