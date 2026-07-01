import { Mail, MapPin, Phone } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/lib/site";

export function ContactSection() {
    return (
        <section id="contact" className="px-6 py-24">
            <div className="mx-auto max-w-7xl">
                <SectionHeading
                    eyebrow="Contact"
                    title="Request product information or a quotation."
                    description="Reach out to Rovanta for product availability, technical discussions, custom manufacturing requirements, and commercial inquiries."
                />

                <div className="grid gap-6 lg:grid-cols-3">
                    <Card className="glass-card">
                        <CardHeader>
                            <Mail className="h-7 w-7 text-primary" />
                            <CardTitle className="font-heading">
                                Email
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="grid gap-2 text-muted-foreground">
                            <a
                                href={`mailto:${siteConfig.email}`}
                                className="hover:text-foreground"
                            >
                                {siteConfig.email}
                            </a>
                            <a
                                href={`mailto:${siteConfig.salesEmail}`}
                                className="hover:text-foreground"
                            >
                                {siteConfig.salesEmail}
                            </a>
                            <a
                                href={`mailto:${siteConfig.purchaseEmail}`}
                                className="hover:text-foreground"
                            >
                                {siteConfig.purchaseEmail}
                            </a>
                        </CardContent>
                    </Card>

                    <Card className="glass-card">
                        <CardHeader>
                            <Phone className="h-7 w-7 text-primary" />
                            <CardTitle className="font-heading">
                                Phone
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground">
                            <a
                                href={`tel:${siteConfig.phone.replaceAll(" ", "")}`}
                                className="hover:text-foreground"
                            >
                                {siteConfig.phone}
                            </a>
                        </CardContent>
                    </Card>

                    <Card className="glass-card">
                        <CardHeader>
                            <MapPin className="h-7 w-7 text-primary" />
                            <CardTitle className="font-heading">
                                Address
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="leading-7 text-muted-foreground">
                            {siteConfig.address}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
