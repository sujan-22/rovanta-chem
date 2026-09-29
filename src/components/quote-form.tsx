"use client";

import { type FormEvent, useState } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { siteContent } from "@/content/site-content";
import { ENQUIRY_FIELDS } from "@/lib/enquiry";

/* Underline fields rather than boxes, to match the rules used across the site. */
const fieldClass =
    "h-11 rounded-none border-0 border-b border-line bg-transparent px-0 text-base text-ink shadow-none transition-colors focus-visible:border-ink focus-visible:ring-0 md:text-sm";

const selectClass = `${fieldClass} appearance-none bg-[length:1rem] bg-[right_center] bg-no-repeat pr-6`;

type Status = "idle" | "sending" | "sent" | "error";

interface QuoteFormProps {
    defaultProduct?: string;
    defaultRequestType?: string;
}

export function QuoteForm({
    defaultProduct = "",
    defaultRequestType = "Quotation",
}: QuoteFormProps) {
    const [status, setStatus] = useState<Status>("idle");
    const [error, setError] = useState<string | null>(null);

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);

        const payload = Object.fromEntries(
            [...ENQUIRY_FIELDS, "website"].map((field) => [
                field,
                String(formData.get(field) ?? ""),
            ]),
        );

        setStatus("sending");
        setError(null);

        try {
            const response = await fetch("/api/enquiry", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                const data = await response.json().catch(() => null);

                throw new Error(
                    data?.error ??
                        "We could not send that. Please try again shortly.",
                );
            }

            form.reset();
            setStatus("sent");
        } catch (caught) {
            setStatus("error");
            setError(
                caught instanceof Error
                    ? caught.message
                    : "We could not send that. Please try again shortly.",
            );
        }
    }

    if (status === "sent") {
        return (
            <div className="border-t border-ink pt-10">
                <p className="label text-copper">Enquiry received</p>

                <h2 className="font-display type-subtitle mt-6 max-w-[20ch] text-ink">
                    Thank you. We have your enquiry.
                </h2>

                <p className="text-pretty type-lead mt-5 max-w-[48ch] text-ink-soft">
                    Our sales desk replies with pricing, documentation and lead
                    times, usually within one business day. For anything urgent,
                    call {siteContent.company.phoneDisplay}.
                </p>

                <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="group mt-9 inline-flex items-center gap-3 border-b border-ink pb-1.5 text-lg text-ink transition-colors hover:border-copper hover:text-copper"
                >
                    Send another enquiry
                    <span
                        aria-hidden="true"
                        className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                        &rarr;
                    </span>
                </button>
            </div>
        );
    }

    const sending = status === "sending";

    return (
        <form onSubmit={handleSubmit} className="grid gap-8">
            {/* Honeypot: hidden from people, irresistible to bots. */}
            <div aria-hidden="true" className="absolute left-[-9999px]">
                <label htmlFor="website">Website</label>
                <input
                    id="website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                />
            </div>

            <div className="grid gap-5 md:grid-cols-2">
                <div className="grid gap-2">
                    <Label className="label text-ink-faint" htmlFor="name">
                        Full name *
                    </Label>
                    <Input
                        className={fieldClass}
                        id="name"
                        name="name"
                        autoComplete="name"
                        required
                    />
                </div>

                <div className="grid gap-2">
                    <Label className="label text-ink-faint" htmlFor="company">
                        Company *
                    </Label>
                    <Input
                        className={fieldClass}
                        id="company"
                        name="company"
                        autoComplete="organization"
                        required
                    />
                </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
                <div className="grid gap-2">
                    <Label className="label text-ink-faint" htmlFor="email">
                        Email *
                    </Label>
                    <Input
                        className={fieldClass}
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                    />
                </div>

                <div className="grid gap-2">
                    <Label className="label text-ink-faint" htmlFor="phone">
                        Phone / WhatsApp
                    </Label>
                    <Input
                        className={fieldClass}
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                    />
                </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
                <div className="grid gap-2">
                    <Label className="label text-ink-faint" htmlFor="product">
                        Product *
                    </Label>
                    <select
                        id="product"
                        name="product"
                        defaultValue={defaultProduct}
                        required
                        className={selectClass}
                    >
                        <option value="">Select a product</option>
                        {siteContent.products.items.map((product) => (
                            <option key={product.slug} value={product.name}>
                                {product.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="grid gap-2">
                    <Label className="label text-ink-faint" htmlFor="quantity">
                        Quantity (MT / kg) *
                    </Label>
                    <Input
                        className={fieldClass}
                        id="quantity"
                        name="quantity"
                        placeholder="Example: 5 MT"
                        required
                    />
                </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
                <div className="grid gap-2">
                    <Label
                        className="label text-ink-faint"
                        htmlFor="requestType"
                    >
                        Request type
                    </Label>
                    <select
                        id="requestType"
                        name="requestType"
                        defaultValue={defaultRequestType}
                        className={selectClass}
                    >
                        {siteContent.quote.requestTypes.map((requestType) => (
                            <option key={requestType} value={requestType}>
                                {requestType}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="grid gap-2">
                    <Label
                        className="label text-ink-faint"
                        htmlFor="destination"
                    >
                        Destination
                    </Label>
                    <Input
                        className={fieldClass}
                        id="destination"
                        name="destination"
                        placeholder="City / Port / Country"
                    />
                </div>
            </div>

            <div className="grid gap-2">
                <Label className="label text-ink-faint" htmlFor="message">
                    Your requirement *
                </Label>
                <Textarea
                    id="message"
                    name="message"
                    rows={7}
                    className="rounded-none border-0 border-b border-line bg-transparent px-0 text-base text-ink shadow-none transition-colors focus-visible:border-ink focus-visible:ring-0 md:text-sm"
                    placeholder="Product, grade, target specifications, packaging, application and delivery timeline."
                    required
                />
            </div>

            {error ? (
                <p
                    role="alert"
                    className="text-pretty border-l-2 border-destructive pl-5 text-sm leading-relaxed text-ink"
                >
                    {error} You can also email{" "}
                    <a
                        href={`mailto:${siteContent.company.salesEmail}`}
                        className="text-copper underline underline-offset-4"
                    >
                        {siteContent.company.salesEmail}
                    </a>
                    .
                </p>
            ) : null}

            <div className="flex flex-wrap items-center gap-6">
                <button
                    type="submit"
                    disabled={sending}
                    className="group inline-flex min-w-60 items-center justify-between gap-4 bg-ink px-7 py-4 text-on-ink transition-colors hover:bg-ink-lift disabled:cursor-not-allowed disabled:opacity-70"
                >
                    {sending ? "Sending…" : "Send enquiry"}
                    <span
                        aria-hidden="true"
                        className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                        &rarr;
                    </span>
                </button>

                <p className="text-sm text-ink-faint">
                    Goes straight to our sales desk.
                </p>
            </div>
        </form>
    );
}
