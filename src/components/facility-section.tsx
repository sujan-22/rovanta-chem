import { Building2, Microscope, Recycle, Settings2 } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const capabilities = [
    {
        title: "Modern Equipment",
        description:
            "Advanced processing equipment for controlled manufacturing operations.",
        icon: Settings2,
    },
    {
        title: "Quality Laboratory",
        description:
            "Testing and analysis support for quality-focused production.",
        icon: Microscope,
    },
    {
        title: "Manufacturing Facility",
        description:
            "Facility infrastructure designed for scalable chemical production.",
        icon: Building2,
    },
    {
        title: "Responsible Operations",
        description:
            "Safety-focused and environmentally responsible manufacturing practices.",
        icon: Recycle,
    },
];

export function FacilitySection() {
    return (
        <section id="facility" className="px-6 py-24">
            <div className="mx-auto max-w-7xl">
                <SectionHeading
                    eyebrow="Facility"
                    title="Manufacturing capability with quality-focused operations."
                    description="Rovanta supports production, testing, process development, and customer-specific manufacturing requirements."
                />

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {capabilities.map((item) => {
                        const Icon = item.icon;

                        return (
                            <Card key={item.title} className="glass-card">
                                <CardHeader>
                                    <Icon className="h-8 w-8 text-primary" />
                                    <CardTitle className="font-heading text-xl">
                                        {item.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="leading-7 text-muted-foreground">
                                    {item.description}
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
