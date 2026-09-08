import { FaWhatsapp } from "react-icons/fa";

import { siteContent } from "@/content/site-content";

export function WhatsAppFloat() {
    const { company, contact } = siteContent;

    const url = `https://wa.me/${
        company.whatsappNumber
    }?text=${encodeURIComponent(contact.whatsappMessage)}`;

    return (
        <a
            href={url}
            target="_blank"
            rel="noreferrer"
            aria-label="Contact Rovanta through WhatsApp"
            // Offset by the safe-area inset so the button clears the iOS home
            // indicator and Safari's bottom bar rather than sitting under them.
            className="fixed right-5 bottom-[max(1.25rem,calc(env(safe-area-inset-bottom)+0.75rem))] z-50 grid size-14 place-items-center rounded-full bg-[#25d366] text-white shadow-xl transition hover:-translate-y-1 hover:bg-[#20bd5a]"
        >
            <FaWhatsapp className="size-7" />
        </a>
    );
}
