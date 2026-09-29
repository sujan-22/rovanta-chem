import type { Metadata } from "next";
import { IBM_Plex_Mono, Inter, Newsreader } from "next/font/google";

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
 * Editorial serif with moderate stroke contrast and a real weight range, so
 * display type reads as sturdy rather than delicate at large sizes.
 */
const newsreader = Newsreader({
    subsets: ["latin"],
    weight: ["300", "400", "500"],
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
                newsreader.variable,
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
