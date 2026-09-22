import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MediaFrame } from "@/components/media-frame";
import { PageHero } from "@/components/page-hero";
import { ProductRow } from "@/components/product-row";
import { Reveal } from "@/components/reveal";
import { siteContent } from "@/content/site-content";
import { siteConfig } from "@/lib/site";

interface ProductPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
    return siteContent.products.items.map((product) => ({
        slug: product.slug,
    }));
}

export async function generateMetadata({
    params,
}: ProductPageProps): Promise<Metadata> {
    const { slug } = await params;

    const product = siteContent.products.items.find(
        (item) => item.slug === slug,
    );

    if (!product) {
        return {
            title: "Product Not Found",
        };
    }

    const url = `${siteConfig.domain}/products/${product.slug}`;

    return {
        title: product.name,
        description: product.shortDescription,
        alternates: {
            canonical: url,
        },
        openGraph: {
            type: "website",
            title: `${product.name} | ${siteConfig.name}`,
            description: product.shortDescription,
            url,
            siteName: siteConfig.name,
        },
    };
}

export default async function ProductPage({ params }: ProductPageProps) {
    const { slug } = await params;

    const product = siteContent.products.items.find(
        (item) => item.slug === slug,
    );

    if (!product) {
        notFound();
    }

    const relatedProducts = siteContent.products.items
        .filter((item) => item.slug !== product.slug)
        .slice(0, 4);

    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        name: product.name,
        description: product.shortDescription,
        category: product.category,
        sku: product.slug,
        manufacturer: {
            "@type": "Organization",
            name: siteConfig.name,
        },
    };

    const documents = [
        {
            code: "TDS",
            title: "Technical Data Sheet",
            status: "Pending upload",
        },
        { code: "SDS", title: "Safety Data Sheet", status: "Pending upload" },
        { code: "COA", title: "Certificate of Analysis", status: "Per lot" },
    ];

    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(productSchema),
                }}
            />

            <PageHero
                eyebrow="Products"
                title={product.name}
                description={product.shortDescription}
            />

            <section className="ground-paper band-tight">
                <div className="shell">
                    {/* Identity strip: what a buyer checks first. */}
                    <dl className="grid gap-x-16 border-t border-ink pt-6 sm:grid-cols-3">
                        <div>
                            <dt className="label text-ink-faint">Formula</dt>
                            <dd className="font-mono mt-2 text-lg text-copper">
                                {product.formula}
                            </dd>
                        </div>

                        <div className="mt-6 sm:mt-0">
                            <dt className="label text-ink-faint">CAS number</dt>
                            <dd className="font-mono mt-2 text-lg text-ink">
                                {product.cas ?? "Not applicable"}
                            </dd>
                        </div>

                        <div className="mt-6 sm:mt-0">
                            <dt className="label text-ink-faint">Capacity</dt>
                            <dd className="font-mono mt-2 text-lg text-ink">
                                {product.capacity}
                            </dd>
                        </div>
                    </dl>

                    <div className="mt-16 grid gap-x-16 gap-y-14 lg:grid-cols-12">
                        <div className="lg:col-span-7">
                            <Reveal>
                                <p className="label text-copper">Overview</p>
                                <p className="text-pretty type-lead mt-6 leading-[1.85] text-ink-soft">
                                    {product.overview}
                                </p>
                            </Reveal>

                            <Reveal delay={0.06}>
                                <h2 className="label mt-16 border-t border-ink pt-4 text-copper">
                                    Applications
                                </h2>

                                <ul className="mt-2">
                                    {product.applications.map(
                                        (application, index) => (
                                            <li
                                                key={application}
                                                className="flex gap-6 border-b border-line py-5"
                                            >
                                                <span className="label shrink-0 pt-1 text-ink-faint">
                                                    {String(index + 1).padStart(
                                                        2,
                                                        "0",
                                                    )}
                                                </span>
                                                <span className="text-pretty leading-relaxed text-ink">
                                                    {application}
                                                </span>
                                            </li>
                                        ),
                                    )}
                                </ul>
                            </Reveal>

                            <Reveal delay={0.06}>
                                <h2 className="label mt-16 border-t border-ink pt-4 text-copper">
                                    Indicative specification
                                </h2>

                                <dl className="mt-2">
                                    {product.specifications.map(
                                        (specification) => (
                                            <div
                                                key={specification.label}
                                                className="grid grid-cols-1 gap-1 border-b border-line py-4 sm:grid-cols-[14rem_1fr] sm:gap-8"
                                            >
                                                <dt className="label pt-1 text-ink-faint">
                                                    {specification.label}
                                                </dt>

                                                <dd className="text-ink">
                                                    {"pendingVerification" in
                                                        specification &&
                                                    specification.pendingVerification ? (
                                                        <span className="font-mono border-b border-dashed border-copper pb-0.5 text-sm text-copper">
                                                            {
                                                                specification.value
                                                            }
                                                        </span>
                                                    ) : (
                                                        specification.value
                                                    )}
                                                </dd>
                                            </div>
                                        ),
                                    )}
                                </dl>

                                <p className="text-pretty mt-8 border-l-2 border-copper pl-5 text-sm leading-relaxed text-ink-soft">
                                    Values marked pending are placeholders.
                                    Final specifications, certifications and
                                    regulatory data are published only after
                                    verification.
                                </p>
                            </Reveal>

                            <Reveal delay={0.06}>
                                <div className="mt-16 grid gap-x-16 gap-y-10 sm:grid-cols-2">
                                    <div className="border-t border-ink pt-4">
                                        <h2 className="label text-copper">
                                            Packaging
                                        </h2>
                                        <p className="text-pretty mt-4 leading-relaxed text-ink-soft">
                                            {product.packaging}
                                        </p>
                                    </div>

                                    <div className="border-t border-ink pt-4">
                                        <h2 className="label text-copper">
                                            Storage and handling
                                        </h2>
                                        <p className="text-pretty mt-4 leading-relaxed text-ink-soft">
                                            {product.storage}
                                        </p>
                                    </div>
                                </div>
                            </Reveal>
                        </div>

                        <aside className="lg:col-span-4 lg:col-start-9">
                            <div className="lg:sticky lg:top-28">
                                <MediaFrame
                                    className="aspect-square w-full"
                                    caption={product.name}
                                    sizes="(min-width: 1024px) 33vw, 100vw"
                                />

                                <div className="mt-10">
                                    <p className="label border-t border-ink pt-4 text-copper">
                                        Documentation
                                    </p>

                                    <div className="mt-2">
                                        {documents.map((document) => (
                                            <div
                                                key={document.code}
                                                className="flex items-baseline justify-between gap-4 border-b border-line py-4"
                                            >
                                                <span className="text-sm text-ink">
                                                    {document.title}
                                                </span>
                                                <span className="font-mono shrink-0 text-xs text-ink-faint">
                                                    {document.status}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-10 grid gap-5">
                                    <Link
                                        href={`/quote?product=${encodeURIComponent(
                                            product.name,
                                        )}&type=Quotation`}
                                        className="group inline-flex items-center justify-between gap-3 bg-ink px-6 py-4 text-on-ink transition-colors hover:bg-ink-lift"
                                    >
                                        Request a quote
                                        <span
                                            aria-hidden="true"
                                            className="transition-transform duration-300 group-hover:translate-x-1"
                                        >
                                            &rarr;
                                        </span>
                                    </Link>

                                    <Link
                                        href={`/quote?product=${encodeURIComponent(
                                            product.name,
                                        )}&type=Sample`}
                                        className="group inline-flex items-center justify-between gap-3 border border-line px-6 py-4 text-ink transition-colors hover:border-ink"
                                    >
                                        Request a sample
                                        <span
                                            aria-hidden="true"
                                            className="transition-transform duration-300 group-hover:translate-x-1"
                                        >
                                            &rarr;
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            <section className="ground-paper-2 band">
                <div className="shell">
                    <p className="label border-t border-ink pt-4 text-copper">
                        Other product lines
                    </p>

                    <div className="mt-10">
                        {relatedProducts.map((related, index) => (
                            <ProductRow
                                key={related.slug}
                                product={related}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
