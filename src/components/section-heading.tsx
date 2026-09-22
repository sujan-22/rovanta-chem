import { cn } from "@/lib/utils";

interface SectionHeadingProps {
    eyebrow: string;
    title: string;
    description?: string;
    /** Editorial index, e.g. "01". Printed opposite the eyebrow. */
    index?: string;
    theme?: "light" | "dark";
    className?: string;
}

/*
 * Section opener: an indexed label sitting on a rule, then the display title.
 * The rule does the work the old card borders used to do.
 */
export function SectionHeading({
    eyebrow,
    title,
    description,
    index,
    theme = "light",
    className,
}: SectionHeadingProps) {
    const dark = theme === "dark";

    return (
        <div className={className}>
            <div
                className={cn(
                    "flex items-baseline justify-between gap-6 border-t pt-4",
                    dark ? "border-white/15" : "border-ink",
                )}
            >
                <p
                    className={cn(
                        "label",
                        dark ? "text-copper-bright" : "text-copper",
                    )}
                >
                    {eyebrow}
                </p>

                {index ? (
                    <p
                        className={cn(
                            "label",
                            dark ? "text-on-ink-faint" : "text-ink-faint",
                        )}
                    >
                        {index}
                    </p>
                ) : null}
            </div>

            <h2
                className={cn(
                    "text-balance font-display type-title mt-8 max-w-[18ch]",
                    dark ? "text-on-ink" : "text-ink",
                )}
            >
                {title}
            </h2>

            {description ? (
                <p
                    className={cn(
                        "text-pretty type-lead mt-6 max-w-[52ch]",
                        dark ? "text-on-ink-soft" : "text-ink-soft",
                    )}
                >
                    {description}
                </p>
            ) : null}
        </div>
    );
}
