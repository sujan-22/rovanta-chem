/**
 * Shape of a customer enquiry, shared between the form and the API route so
 * the two cannot drift apart.
 */
export interface EnquiryPayload {
    name: string;
    company: string;
    email: string;
    phone: string;
    product: string;
    quantity: string;
    requestType: string;
    destination: string;
    message: string;
    /** Honeypot. Real people leave this empty; bots fill every field. */
    website?: string;
}

export const ENQUIRY_FIELDS = [
    "name",
    "company",
    "email",
    "phone",
    "product",
    "quantity",
    "requestType",
    "destination",
    "message",
] as const satisfies readonly (keyof EnquiryPayload)[];

const REQUIRED_FIELDS = [
    "name",
    "company",
    "email",
    "product",
    "quantity",
    "message",
] as const satisfies readonly (keyof EnquiryPayload)[];

const MAX_LENGTHS: Partial<Record<keyof EnquiryPayload, number>> = {
    name: 120,
    company: 160,
    email: 200,
    phone: 40,
    product: 120,
    quantity: 80,
    requestType: 60,
    destination: 160,
    message: 4000,
};

/**
 * Validates an untrusted request body. Returns the cleaned payload, or the
 * list of problems so the caller can answer with a 400 rather than throwing.
 */
export function parseEnquiry(
    body: unknown,
): { ok: true; data: EnquiryPayload } | { ok: false; errors: string[] } {
    const errors: string[] = [];

    if (typeof body !== "object" || body === null) {
        return { ok: false, errors: ["Request body must be an object."] };
    }

    const raw = body as Record<string, unknown>;
    const data = {} as EnquiryPayload;

    for (const field of ENQUIRY_FIELDS) {
        const value = raw[field];

        if (value !== undefined && typeof value !== "string") {
            errors.push(`${field} must be a string.`);
            continue;
        }

        const trimmed = (value ?? "").trim();
        const limit = MAX_LENGTHS[field];

        if (limit && trimmed.length > limit) {
            errors.push(`${field} is longer than ${limit} characters.`);
            continue;
        }

        data[field] = trimmed;
    }

    for (const field of REQUIRED_FIELDS) {
        if (!data[field]) {
            errors.push(`${field} is required.`);
        }
    }

    if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        errors.push("email is not a valid address.");
    }

    // Newlines in a header value would let a caller inject extra headers.
    if (/[\r\n]/.test(data.email) || /[\r\n]/.test(data.name)) {
        errors.push("email and name must not contain line breaks.");
    }

    if (typeof raw.website === "string" && raw.website.trim() !== "") {
        data.website = raw.website.trim();
    }

    return errors.length > 0 ? { ok: false, errors } : { ok: true, data };
}

const LABELS: Record<(typeof ENQUIRY_FIELDS)[number], string> = {
    name: "Name",
    company: "Company",
    email: "Email",
    phone: "Phone / WhatsApp",
    product: "Product",
    quantity: "Quantity",
    requestType: "Request type",
    destination: "Destination",
    message: "Requirement",
};

export function enquirySubject(data: EnquiryPayload): string {
    const type = data.requestType || "Enquiry";
    return `${type}: ${data.product} · ${data.company}`;
}

export function enquiryText(data: EnquiryPayload): string {
    const lines = ENQUIRY_FIELDS.filter((field) => data[field]).map(
        (field) => `${LABELS[field]}: ${data[field]}`,
    );

    return [
        "New enquiry from rovantachem.com",
        "",
        ...lines,
        "",
        `Received: ${new Date().toISOString()}`,
    ].join("\n");
}

function escapeHtml(value: string): string {
    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

export function enquiryHtml(data: EnquiryPayload): string {
    const rows = ENQUIRY_FIELDS.filter((field) => data[field])
        .map(
            (field) =>
                `<tr>` +
                `<th align="left" style="padding:8px 16px 8px 0;vertical-align:top;font:600 12px/1.5 system-ui,sans-serif;color:#687377;text-transform:uppercase;letter-spacing:.08em;white-space:nowrap">${LABELS[field]}</th>` +
                `<td style="padding:8px 0;font:14px/1.6 system-ui,sans-serif;color:#0b1f27;white-space:pre-wrap">${escapeHtml(
                    data[field] as string,
                )}</td>` +
                `</tr>`,
        )
        .join("");

    return (
        `<div style="font:14px/1.6 system-ui,sans-serif;color:#0b1f27">` +
        `<p style="font:600 12px/1.5 system-ui,sans-serif;color:#8a6729;text-transform:uppercase;letter-spacing:.14em;margin:0 0 16px">New enquiry from rovantachem.com</p>` +
        `<table cellpadding="0" cellspacing="0" style="border-collapse:collapse">${rows}</table>` +
        `</div>`
    );
}
