"use client";

import type { FormEvent } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { siteContent } from "@/content/site-content";

/* Underline fields rather than boxes, to match the rules used across the site. */
const fieldClass =
    "h-11 rounded-none border-0 border-b border-line bg-transparent px-0 text-base text-ink shadow-none transition-colors focus-visible:border-ink focus-visible:ring-0 md:text-sm";

interface QuoteFormProps {
    defaultProduct?: string;
    defaultRequestType?: string;
}

export function QuoteForm({
    defaultProduct = "",
    defaultRequestType = "Quotation",
}: QuoteFormProps) {
    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const fields = {
            name: String(formData.get("name") ?? ""),
            company: String(formData.get("company") ?? ""),
            email: String(formData.get("email") ?? ""),
            phone: String(formData.get("phone") ?? ""),
            product: String(formData.get("product") ?? ""),
            quantity: String(formData.get("quantity") ?? ""),
            requestType: String(formData.get("requestType") ?? ""),
            destination: String(formData.get("destination") ?? ""),
            message: String(formData.get("message") ?? ""),
        };

        const subject = `${fields.requestType}: ${
            fields.product || "General chemical requirement"
        }`;

        const body = [
            `Full name: ${fields.name}`,
            `Company: ${fields.company}`,
            `Email: ${fields.email}`,
            `Phone / WhatsApp: ${fields.phone}`,
            `Product: ${fields.product}`,
            `Quantity: ${fields.quantity}`,
            `Request type: ${fields.requestType}`,
            `Destination: ${fields.destination}`,
            "",
            "Requirement:",
            fields.message,
        ].join("\n");

        window.location.href = `mailto:${
            siteContent.company.salesEmail
        }?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }

    return (
        <form onSubmit={handleSubmit} className="grid gap-8">
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
                        className={fieldClass}
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
                        className={fieldClass}
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

            <button
                type="submit"
                className="group mt-2 inline-flex items-center justify-between gap-3 bg-ink px-6 py-4 text-on-ink transition-colors hover:bg-ink-lift"
            >
                Prepare email enquiry
                <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                >
                    &rarr;
                </span>
            </button>
        </form>
    );
}
