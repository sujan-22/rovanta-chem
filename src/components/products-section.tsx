import { ArrowUpRight } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const products = [
    {
        title: "Agrochemical Intermediates",
        description:
            "Manufacturing support for crop protection and agrochemical applications.",
    },
    {
        title: "Copper Compounds",
        description:
            "Copper Oxychloride, Copper Sulphate, Copper Oxide, and related copper-based products.",
    },
    {
        title: "Pharmaceutical Intermediates",
        description:
            "High-purity intermediate manufacturing support for pharmaceutical and API customers.",
    },
    {
        title: "Specialty Chemicals",
        description:
            "Customized specialty chemical solutions developed for specific customer requirements.",
    },
];

export function ProductsSection() {
    return (
        <section id="products" className="px-6 py-24">
            <div className="mx-auto max-w-7xl">
                <SectionHeading
                    eyebrow="Product Portfolio"
                    title="Chemical solutions for industrial and commercial applications."
                    description="Explore Rovanta’s core manufacturing categories. Product specifications, grades, and technical details can be shared upon request."
                />

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {products.map((product) => (
                        <Card
                            key={product.title}
                            className="glass-card group transition duration-300 hover:-translate-y-1 hover:border-primary/50"
                        >
                            <CardHeader>
                                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 text-primary">
                                    <ArrowUpRight className="h-5 w-5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </div>
                                <CardTitle className="font-heading text-xl">
                                    {product.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="leading-7 text-muted-foreground">
                                {product.description}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
