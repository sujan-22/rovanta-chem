import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { FacilitySection } from "@/components/facility-section";
import { HeroSection } from "@/components/hero-section";
import { ProductsSection } from "@/components/products-section";
import { QualitySection } from "@/components/quality-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
    return (
        <>
            <SiteHeader />
            <main>
                <HeroSection />
                <AboutSection />
                <ProductsSection />
                <FacilitySection />
                <QualitySection />
                <ContactSection />
            </main>
            <SiteFooter />
        </>
    );
}
