import type { MetadataRoute } from "next";

import { hiddenRoutes } from "@/content/site-content";
import { siteConfig } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            // Not-yet-built areas. These already 404, but stating it here keeps
            // crawlers from spending budget on them and records the intent.
            disallow: [...hiddenRoutes],
        },
        sitemap: `${siteConfig.domain}/sitemap.xml`,
    };
}
