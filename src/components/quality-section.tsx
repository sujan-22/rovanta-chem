import { CheckCircle2, ClipboardCheck, Globe2 } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";

const items = [
    "Raw material and finished product quality checks",
    "Customer-specific manufacturing and technical support",
    "Domestic and international business inquiry support",
];

export function QualitySection() {
    return (
        <section id="quality" className="px-6 py-24">
            <div className="mx-auto max-w-7xl rounded-[2rem] border border-primary/20 bg-primary/10 p-8 md:p-12">
                <SectionHeading
                    eyebrow="Quality"
                    title="Focused on consistent output and dependable supply."
                    description="Rovanta works with a quality-first approach across sourcing, manufacturing, testing, and customer communication."
                />

                <div className="grid gap-6 md:grid-cols-3">
                    {items.map((item) => (
                        <div
                            key={item}
                            className="rounded-2xl border border-white/10 bg-background/50 p-6"
                        >
                            <CheckCircle2 className="h-7 w-7 text-primary" />
                            <p className="mt-4 leading-7 text-muted-foreground">
                                {item}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-2">
                        <ClipboardCheck className="h-4 w-4 text-primary" />
                        Specifications upon request
                    </span>
                    <span className="inline-flex items-center gap-2">
                        <Globe2 className="h-4 w-4 text-primary" />
                        Business inquiries welcome
                    </span>
                </div>
            </div>
        </section>
    );
}
