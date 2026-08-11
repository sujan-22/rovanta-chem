import { siteContent } from "@/content/site-content";

export function OrganizationJsonLd() {
    const { company } = siteContent;

    const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: company.legalName,
        url: company.domain,
        email: company.email,
        telephone: company.phoneHref,
        description: company.description,
        sameAs: [company.linkedin],
        address: {
            "@type": "PostalAddress",
            streetAddress: company.address.street,
            addressLocality: company.address.city,
            addressRegion: company.address.region,
            postalCode: company.address.postalCode,
            addressCountry: "IN",
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: company.coordinates.latitude,
            longitude: company.coordinates.longitude,
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(schema),
            }}
        />
    );
}
