import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { FacilitySection } from "@/components/facility-section";
import { HeroSection } from "@/components/hero-section";
import { IndustriesSection } from "@/components/industries-section";
import { OrganizationJsonLd } from "@/components/organization-json-ld";
import { ProductsSection } from "@/components/products-section";
import { QualitySection } from "@/components/quality-section";
import { WhyRovantaSection } from "@/components/why-rovanta-section";

export default function Home() {
    return (
        <>
            <OrganizationJsonLd />

            <main>
                <HeroSection />
                <AboutSection />
                <ProductsSection />
                <IndustriesSection />
                <FacilitySection />
                <QualitySection />
                <WhyRovantaSection />
                <ContactSection />
            </main>
        </>
    );
}
