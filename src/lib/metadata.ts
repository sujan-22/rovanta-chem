import type { Metadata } from "next";

import { siteConfig } from "@/lib/site";

export function createPageMetadata(
    title: string,
    description: string,
    path: string,
): Metadata {
    const canonical = new URL(path, siteConfig.domain).toString();

    return {
        title,
        description,
        alternates: {
            canonical,
        },
        openGraph: {
            title,
            description,
            url: canonical,
            siteName: siteConfig.name,
            type: "website",
            locale: "en_IN",
        },
    };
}
