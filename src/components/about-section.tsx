import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/lib/site";

export function AboutSection() {
    return (
        <section id="about" className="px-6 py-24">
            <div className="mx-auto max-w-7xl">
                <SectionHeading
                    eyebrow="About Rovanta"
                    title="Built for quality, consistency, and responsible manufacturing."
                    description="Rovanta focuses on dependable chemical solutions while maintaining strong standards for quality, safety, and operational responsibility."
                />

                <div className="grid gap-6 md:grid-cols-2">
                    <Card className="glass-card">
                        <CardHeader>
                            <CardTitle className="font-heading text-2xl">
                                Company Profile
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="leading-8 text-muted-foreground">
                            {siteConfig.name} is a chemical manufacturing
                            company focused on specialty chemicals, agrochemical
                            intermediates, pharmaceutical intermediates, and
                            copper compounds for industrial customers.
                        </CardContent>
                    </Card>

                    <Card className="glass-card">
                        <CardHeader>
                            <CardTitle className="font-heading text-2xl">
                                Our Mission
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="leading-8 text-muted-foreground">
                            To provide reliable and cost-effective chemical
                            solutions while supporting customer requirements
                            through quality-focused manufacturing, technical
                            capability, and responsible operations.
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
