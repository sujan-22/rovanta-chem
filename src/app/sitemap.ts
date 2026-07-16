import { allPublicRoutes, siteContent } from "@/content/site-content";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return allPublicRoutes.map((route) => ({
        url: `${siteContent.company.domain}${route}`,
        lastModified: new Date(),
        changeFrequency: route === "/" ? "weekly" : "monthly",
        priority:
            route === "/"
                ? 1
                : route === "/products"
                  ? 0.9
                  : route.startsWith("/products/")
                    ? 0.8
                    : 0.7,
    }));
}
