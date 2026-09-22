import { PageHero } from "@/components/page-hero";
import { QuoteForm } from "@/components/quote-form";
import { Reveal } from "@/components/reveal";
import { siteContent } from "@/content/site-content";
import { createPageMetadata } from "@/lib/metadata";

const { quote } = siteContent;

export const metadata = createPageMetadata(
    quote.hero.title,
    quote.hero.description,
    "/quote",
);

interface QuotePageProps {
    searchParams: Promise<{
        product?: string | string[];
        type?: string | string[];
    }>;
}

export default async function QuotePage({ searchParams }: QuotePageProps) {
    const query = await searchParams;

    const defaultProduct =
        typeof query.product === "string" ? query.product : "";

    const defaultRequestType =
        typeof query.type === "string" ? query.type : "Quotation";

    return (
        <main>
            <PageHero {...quote.hero} />

            <section className="ground-paper band">
                <div className="shell grid gap-x-16 gap-y-14 lg:grid-cols-12">
                    <div className="lg:col-span-7">
                        <QuoteForm
                            defaultProduct={defaultProduct}
                            defaultRequestType={defaultRequestType}
                        />
                    </div>

                    <Reveal
                        delay={0.08}
                        className="lg:col-span-4 lg:col-start-9"
                    >
                        <p className="label border-t border-ink pt-4 text-copper">
                            How it works
                        </p>

                        <ol className="mt-2">
                            {quote.workflow.map((step, index) => (
                                <li
                                    key={step}
                                    className="flex gap-6 border-b border-line py-5"
                                >
                                    <span className="label shrink-0 pt-1 text-ink-faint">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                    <span className="text-pretty text-sm leading-relaxed text-ink">
                                        {step}
                                    </span>
                                </li>
                            ))}
                        </ol>

                        <p className="text-pretty mt-8 border-l-2 border-copper pl-5 text-sm leading-relaxed text-ink-soft">
                            Prefer WhatsApp? Use the button at the bottom right
                            to reach the sales desk directly.
                        </p>
                    </Reveal>
                </div>
            </section>
        </main>
    );
}
