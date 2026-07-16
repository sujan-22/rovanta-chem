"use client";

import type { FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { siteContent } from "@/content/site-content";

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
            requestType: String(
                formData.get("requestType") ?? ""
            ),
            destination: String(
                formData.get("destination") ?? ""
            ),
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
        }?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
            body
        )}`;
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="surface-card grid gap-5 p-6 md:p-8"
        >
            <div className="grid gap-5 md:grid-cols-2">
                <div className="grid gap-2">
                    <Label htmlFor="name">Full name *</Label>
                    <Input
                        id="name"
                        name="name"
                        autoComplete="name"
                        required
                    />
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="company">Company *</Label>
                    <Input
                        id="company"
                        name="company"
                        autoComplete="organization"
                        required
                    />
                </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
                <div className="grid gap-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                    />
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="phone">
                        Phone / WhatsApp
                    </Label>
                    <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                    />
                </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
                <div className="grid gap-2">
                    <Label htmlFor="product">Product *</Label>
                    <select
                        id="product"
                        name="product"
                        defaultValue={defaultProduct}
                        required
                        className="h-10 rounded-md border border-input bg-card px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                        <option value="">Select a product</option>
                        {siteContent.products.items.map((product) => (
                            <option
                                key={product.slug}
                                value={product.name}
                            >
                                {product.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="quantity">
                        Quantity (MT / kg) *
                    </Label>
                    <Input
                        id="quantity"
                        name="quantity"
                        placeholder="Example: 5 MT"
                        required
                    />
                </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
                <div className="grid gap-2">
                    <Label htmlFor="requestType">
                        Request type
                    </Label>
                    <select
                        id="requestType"
                        name="requestType"
                        defaultValue={defaultRequestType}
                        className="h-10 rounded-md border border-input bg-card px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                        {siteContent.quote.requestTypes.map(
                            (requestType) => (
                                <option
                                    key={requestType}
                                    value={requestType}
                                >
                                    {requestType}
                                </option>
                            )
                        )}
                    </select>
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="destination">
                        Destination
                    </Label>
                    <Input
                        id="destination"
                        name="destination"
                        placeholder="City / Port / Country"
                    />
                </div>
            </div>

            <div className="grid gap-2">
                <Label htmlFor="message">
                    Your requirement *
                </Label>
                <Textarea
                    id="message"
                    name="message"
                    rows={7}
                    placeholder="Product, grade, target specifications, packaging, application and delivery timeline."
                    required
                />
            </div>

            <Button type="submit" size="lg">
                Prepare email inquiry
            </Button>
        </form>
    );
}
