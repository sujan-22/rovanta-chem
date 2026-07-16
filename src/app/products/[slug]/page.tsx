import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, FileText, Package, ShieldCheck, Warehouse } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";
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

    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(productSchema),
                }}
            />

            <PageHero
                eyebrow={
                    product.cas ? `Products · CAS ${product.cas}` : "Products"
                }
                title={product.name}
                description={product.shortDescription}
            />

            <section className="py-20 md:py-24">
                <div className="site-container grid gap-10 lg:grid-cols-[1fr_340px]">
                    <div>
                        <section>
                            <p className="technical-label text-copper-deep">
                                Overview
                            </p>

                            <p className="mt-5 text-base leading-8 text-ink-soft">
                                {product.overview}
                            </p>
                        </section>

                        <section className="mt-10">
                            <h2 className="font-heading text-3xl font-bold">
                                Applications
                            </h2>

                            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                                {product.applications.map((application) => (
                                    <li
                                        key={application}
                                        className="flex items-start gap-3"
                                    >
                                        <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded bg-verdigris text-white">
                                            <Check className="size-3.5" />
                                        </span>

                                        <span className="leading-7 text-ink-soft">
                                            {application}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section className="mt-10">
                            <h2 className="font-heading text-3xl font-bold">
                                Indicative specification
                            </h2>

                            <div className="surface-card mt-6 overflow-hidden">
                                <table className="w-full border-collapse text-left">
                                    <tbody>
                                        {product.specifications.map(
                                            (specification) => (
                                                <tr
                                                    key={specification.label}
                                                    className="border-b border-line last:border-b-0"
                                                >
                                                    <th className="w-56 bg-paper-deep px-5 py-4 font-mono text-xs uppercase tracking-wider">
                                                        {specification.label}
                                                    </th>

                                                    <td className="px-5 py-4">
                                                        {"pendingVerification" in
                                                            specification &&
                                                        specification.pendingVerification ===
                                                            true ? (
                                                            <span className="rounded-md border border-dashed border-copper bg-[#fff6e8] px-2.5 py-1 font-mono text-xs text-copper-deep">
                                                                {
                                                                    specification.value
                                                                }
                                                            </span>
                                                        ) : (
                                                            specification.value
                                                        )}
                                                    </td>
                                                </tr>
                                            ),
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <div className="mt-8 grid gap-5 md:grid-cols-2">
                            <article className="surface-card p-6">
                                <Package className="size-6 text-copper-deep" />
                                <h2 className="mt-4 font-heading text-xl font-bold">
                                    Packaging
                                </h2>
                                <p className="mt-3 leading-7 text-ink-soft">
                                    {product.packaging}
                                </p>
                            </article>

                            <article className="surface-card p-6">
                                <Warehouse className="size-6 text-verdigris-deep" />
                                <h2 className="mt-4 font-heading text-xl font-bold">
                                    Storage & handling
                                </h2>
                                <p className="mt-3 leading-7 text-ink-soft">
                                    {product.storage}
                                </p>
                            </article>
                        </div>

                        <div className="mt-8 rounded-xl border border-[#e8c79a] bg-[#fff6e8] p-5 text-sm leading-7 text-[#6b4a1e]">
                            Values marked pending are placeholders. Final
                            specifications, certifications and regulatory data
                            must only be published after client verification.
                        </div>
                    </div>

                    <aside className="h-fit space-y-4 lg:sticky lg:top-28">
                        <div className="surface-card p-6">
                            <p className="font-mono text-sm text-ink-soft">
                                {product.formula}
                                {product.cas ? ` · CAS ${product.cas}` : ""}
                            </p>

                            <h2 className="mt-3 font-heading text-xl font-bold">
                                {product.capacity}
                            </h2>

                            <div className="mt-6 grid gap-3">
                                {[
                                    [
                                        "TDS",
                                        "Technical Data Sheet",
                                        FileText,
                                        "PDF · pending upload",
                                    ],
                                    [
                                        "SDS",
                                        "Safety Data Sheet",
                                        ShieldCheck,
                                        "PDF · pending upload",
                                    ],
                                    [
                                        "COA",
                                        "Certificate of Analysis",
                                        FileText,
                                        "Issued per lot",
                                    ],
                                ].map(([code, title, Icon, status]) => (
                                    <div
                                        key={String(code)}
                                        className="flex items-center justify-between gap-4 rounded-lg border border-line bg-paper p-4"
                                    >
                                        <div className="flex items-center gap-3">
                                            <Icon className="size-5 text-verdigris-deep" />
                                            <div>
                                                <p className="font-semibold">
                                                    {String(title)}
                                                </p>
                                                <p className="text-xs text-ink-soft">
                                                    {String(status)}
                                                </p>
                                            </div>
                                        </div>

                                        <span className="rounded-full bg-paper-deep px-3 py-1 font-mono text-xs">
                                            {String(code)}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 grid gap-3">
                                <Button asChild>
                                    <Link
                                        href={`/quote?product=${encodeURIComponent(
                                            product.name,
                                        )}&type=Quotation`}
                                    >
                                        Request a quote
                                    </Link>
                                </Button>

                                <Button asChild variant="outline">
                                    <Link
                                        href={`/quote?product=${encodeURIComponent(
                                            product.name,
                                        )}&type=Sample`}
                                    >
                                        Request a sample
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </aside>
                </div>
            </section>

            <section className="section-alt py-20">
                <div className="site-container">
                    <p className="technical-label text-copper-deep">Related</p>
                    <h2 className="mt-3 font-heading text-3xl font-bold">
                        Other product lines
                    </h2>

                    <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {relatedProducts.map((related) => (
                            <ProductCard key={related.slug} product={related} />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
