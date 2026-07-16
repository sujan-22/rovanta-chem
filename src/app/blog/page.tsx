import { PageHero } from "@/components/page-hero";
import { siteContent } from "@/content/site-content";
import { createPageMetadata } from "@/lib/metadata";

const { blog } = siteContent;

export const metadata = createPageMetadata(
    blog.hero.title,
    blog.hero.description,
    "/blog"
);

export default function BlogPage() {
    return (
        <main>
            <PageHero {...blog.hero} />

            <section className="py-20 md:py-24">
                <div className="site-container grid gap-5 md:grid-cols-3">
                    {blog.posts.map((post) => (
                        <article
                            key={post.title}
                            className="surface-card p-6"
                        >
                            <p className="technical-label text-copper-deep">
                                Draft · {post.category}
                            </p>
                            <h2 className="mt-4 font-heading text-xl font-bold">
                                {post.title}
                            </h2>
                            <p className="mt-3 leading-7 text-ink-soft">
                                {post.description}
                            </p>
                            <span className="mt-5 inline-block rounded-md border border-dashed border-copper bg-[#fff6e8] px-3 py-1 font-mono text-xs text-copper-deep">
                                {post.status}
                            </span>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
}
