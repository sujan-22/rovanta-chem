import Link from "next/link";
import { FileLock2, FileText } from "lucide-react";

import { notFound } from "next/navigation";

import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { siteContent, isRouteHidden } from "@/content/site-content";
import { createPageMetadata } from "@/lib/metadata";

const { downloads } = siteContent;

export const metadata = createPageMetadata(
    downloads.hero.title,
    downloads.hero.description,
    "/downloads",
);

function DocumentList({
    title,
    documents,
    gated = false,
}: {
    title: string;
    documents: readonly {
        title: string;
        status: string;
    }[];
    gated?: boolean;
}) {
    const Icon = gated ? FileLock2 : FileText;

    return (
        <section>
            <h2 className="font-display text-2xl font-bold">{title}</h2>

            <div className="mt-5 grid gap-3">
                {documents.map((document) => (
                    <div
                        key={document.title}
                        className="flex items-center justify-between gap-4 p-4"
                    >
                        <span className="flex items-center gap-3 font-semibold">
                            <Icon className="size-5 text-copper" />
                            {document.title}
                        </span>
                        <span className="rounded-full bg-paper-2 px-3 py-1 font-mono text-xs text-ink-soft">
                            {document.status}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}

/*
 * Not launched yet: see `hiddenRoutes` in site-content. The page below is kept
 * intact and renders as soon as the route is removed from that list.
 */
export default function DownloadsPage() {
    if (isRouteHidden("/downloads")) {
        notFound();
    }

    return (
        <main>
            <PageHero {...downloads.hero} />

            <section className="ground-paper band">
                <div className="shell grid gap-12 lg:grid-cols-2">
                    <DocumentList
                        title="Public documents"
                        documents={downloads.publicDocuments}
                    />

                    <DocumentList
                        title="Gated documents"
                        documents={downloads.gatedDocuments}
                        gated
                    />
                </div>

                <div className="shell mt-10">
                    <Button asChild>
                        <Link href="/customer-portal">
                            Open customer portal
                        </Link>
                    </Button>
                </div>
            </section>
        </main>
    );
}
