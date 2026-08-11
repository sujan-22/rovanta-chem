import { Check } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { QuoteForm } from "@/components/quote-form";
import { siteContent } from "@/content/site-content";
import { createPageMetadata } from "@/lib/metadata";

const { quote } = siteContent;

export const metadata = createPageMetadata(
    quote.hero.title,
    quote.hero.description,
    "/quote"
);

interface QuotePageProps {
    searchParams: Promise<{
        product?: string | string[];
        type?: string | string[];
    }>;
}

export default async function QuotePage({
    searchParams,
}: QuotePageProps) {
    const query = await searchParams;

    const defaultProduct =
        typeof query.product === "string"
            ? query.product
            : "";

    const defaultRequestType =
        typeof query.type === "string"
            ? query.type
            : "Quotation";

    return (
        <main>
            <PageHero {...quote.hero} />

            <section className="py-20 md:py-24">
                <div className="site-container grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
                    <QuoteForm
                        defaultProduct={defaultProduct}
                        defaultRequestType={defaultRequestType}
                    />

                    <div>
                        <p className="technical-label text-copper-deep">
                            How it works
                        </p>
                        <h2 className="mt-3 font-heading text-3xl font-bold">
                            From enquiry to dispatch.
                        </h2>

                        <ul className="mt-7 grid gap-4">
                            {quote.workflow.map((step) => (
                                <li
                                    key={step}
                                    className="flex items-start gap-3"
                                >
                                    <span className="mt-1 grid size-5 shrink-0 place-items-center rounded bg-verdigris text-white">
                                        <Check className="size-3.5" />
                                    </span>
                                    <span className="leading-7 text-ink-soft">
                                        {step}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-8 rounded-xl border border-[#e8c79a] bg-[#fff6e8] p-5 text-sm leading-7 text-[#6b4a1e]">
                            Prefer WhatsApp? Use the green button at
                            bottom-right to contact the sales team.
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
