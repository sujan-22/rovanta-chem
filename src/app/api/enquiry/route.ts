import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

import {
    enquiryHtml,
    enquirySubject,
    enquiryText,
    parseEnquiry,
} from "@/lib/enquiry";
import { siteContent } from "@/content/site-content";

export const runtime = "nodejs";

/*
 * Zoho SMTP. Indian Zoho accounts live on the .in host, so the host is
 * configurable; everything else is standard implicit TLS on 465.
 */
const SMTP_HOST = process.env.ZOHO_SMTP_HOST ?? "smtp.zoho.in";
const SMTP_PORT = Number(process.env.ZOHO_SMTP_PORT ?? 465);
const SMTP_USER = process.env.ZOHO_SMTP_USER;
const SMTP_PASSWORD = process.env.ZOHO_SMTP_PASSWORD;
const TO_ADDRESS = process.env.ENQUIRY_TO ?? siteContent.company.salesEmail;

export async function POST(request: Request) {
    let body: unknown;

    try {
        body = await request.json();
    } catch {
        return NextResponse.json(
            { error: "Request body must be JSON." },
            { status: 400 },
        );
    }

    const parsed = parseEnquiry(body);

    if (!parsed.ok) {
        return NextResponse.json(
            { error: "Some fields need attention.", details: parsed.errors },
            { status: 400 },
        );
    }

    const enquiry = parsed.data;

    // Honeypot: accept and silently drop, so bots get no signal to adapt to.
    if (enquiry.website) {
        return NextResponse.json({ ok: true });
    }

    if (!SMTP_USER || !SMTP_PASSWORD) {
        console.error(
            "Enquiry received but SMTP is not configured. Set ZOHO_SMTP_USER and ZOHO_SMTP_PASSWORD.",
        );

        return NextResponse.json(
            {
                error: "Enquiry delivery is not configured yet. Please email us directly.",
            },
            { status: 503 },
        );
    }

    const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: SMTP_PORT,
        secure: SMTP_PORT === 465,
        auth: { user: SMTP_USER, pass: SMTP_PASSWORD },
    });

    try {
        await transporter.sendMail({
            // Zoho rejects a From it does not own, so send as the authenticated
            // mailbox and put the customer in Reply-To.
            from: `"Rovanta website" <${SMTP_USER}>`,
            to: TO_ADDRESS,
            replyTo: `"${enquiry.name}" <${enquiry.email}>`,
            subject: enquirySubject(enquiry),
            text: enquiryText(enquiry),
            html: enquiryHtml(enquiry),
        });
    } catch (error) {
        console.error("Failed to deliver enquiry", error);

        return NextResponse.json(
            { error: "We could not send that. Please try again or email us." },
            { status: 502 },
        );
    }

    return NextResponse.json({ ok: true });
}
