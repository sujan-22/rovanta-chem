import { notFound } from "next/navigation";

import { PageHero } from "@/components/page-hero";
import { siteContent, isRouteHidden } from "@/content/site-content";
import { createPageMetadata } from "@/lib/metadata";

const { blog } = siteContent;

export const metadata = createPageMetadata(
    blog.hero.title,
    blog.hero.description,
    "/blog",
);

/*
 * Not launched yet: see `hiddenRoutes` in site-content. The page below is kept
 * intact and renders as soon as the route is removed from that list.
 */
export default function BlogPage() {
    if (isRouteHidden("/blog")) {
        notFound();
    }

    return (
        <main>
            <PageHero {...blog.hero} />

            <section className="ground-paper band">
                <div className="shell grid gap-5 md:grid-cols-3">
                    {blog.posts.map((post) => (
                        <article key={post.title} className="p-6">
                            <p className="label text-copper">
                                Draft · {post.category}
                            </p>
                            <h2 className="mt-4 font-display text-xl font-bold">
                                {post.title}
                            </h2>
                            <p className="mt-3 leading-7 text-ink-soft">
                                {post.description}
                            </p>
                            <span className="mt-5 inline-block rounded-md border border-dashed border-copper bg-[#fff6e8] px-3 py-1 font-mono text-xs text-copper">
                                {post.status}
                            </span>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
}
