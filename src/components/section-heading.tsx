import { cn } from "@/lib/utils";

interface SectionHeadingProps {
    eyebrow: string;
    title: string;
    description?: string;
    theme?: "light" | "dark";
    centered?: boolean;
}

export function SectionHeading({
    eyebrow,
    title,
    description,
    theme = "light",
    centered = false,
}: SectionHeadingProps) {
    return (
        <div className={cn("max-w-3xl", centered && "mx-auto text-center")}>
            <p
                className={cn(
                    "technical-label mb-4",
                    theme === "dark" ? "text-copper" : "text-copper-deep",
                )}
            >
                {eyebrow}
            </p>

            <h2
                className={cn(
                    "font-heading text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl",
                    theme === "dark" ? "text-[#f2efe8]" : "text-ink",
                )}
            >
                {title}
            </h2>

            {description ? (
                <p
                    className={cn(
                        "mt-5 max-w-2xl text-base leading-8 md:text-lg",
                        centered && "mx-auto",
                        theme === "dark" ? "text-[#cbbeb2]" : "text-ink-soft",
                    )}
                >
                    {description}
                </p>
            ) : null}
        </div>
    );
}
