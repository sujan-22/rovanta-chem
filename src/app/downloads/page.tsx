import Link from "next/link";
import { FileLock2, FileText } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { siteContent } from "@/content/site-content";
import { createPageMetadata } from "@/lib/metadata";

const { downloads } = siteContent;

export const metadata = createPageMetadata(
    downloads.hero.title,
    downloads.hero.description,
    "/downloads"
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
            <h2 className="font-heading text-2xl font-bold">
                {title}
            </h2>

            <div className="mt-5 grid gap-3">
                {documents.map((document) => (
                    <div
                        key={document.title}
                        className="surface-card flex items-center justify-between gap-4 p-4"
                    >
                        <span className="flex items-center gap-3 font-semibold">
                            <Icon className="size-5 text-copper-deep" />
                            {document.title}
                        </span>
                        <span className="rounded-full bg-paper-deep px-3 py-1 font-mono text-xs text-ink-soft">
                            {document.status}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default function DownloadsPage() {
    return (
        <main>
            <PageHero {...downloads.hero} />

            <section className="py-20 md:py-24">
                <div className="site-container grid gap-12 lg:grid-cols-2">
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

                <div className="site-container mt-10">
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
