import Image from "next/image";

import { cn } from "@/lib/utils";

interface MediaFrameProps {
    /**
     * Path to the photograph once one exists. While this is undefined the frame
     * renders a brand-coloured abstract, so no region ever reads as a missing
     * asset. Dropping a real photo in later is a one-prop change.
     */
    src?: string;
    alt?: string;
    /** Tailwind aspect-ratio class, e.g. "aspect-[4/5]". */
    className?: string;
    /** Small caption printed inside the frame, bottom-left. */
    caption?: string;
    priority?: boolean;
    sizes?: string;
}

export function MediaFrame({
    src,
    alt = "",
    className,
    caption,
    priority = false,
    sizes = "(min-width: 1024px) 50vw, 100vw",
}: MediaFrameProps) {
    return (
        <figure className={cn("media-frame", className)}>
            {src ? (
                <Image
                    src={src}
                    alt={alt}
                    fill
                    priority={priority}
                    sizes={sizes}
                    className="object-cover"
                />
            ) : (
                <>
                    <span aria-hidden="true" className="media-abstract" />
                    <span aria-hidden="true" className="media-grid" />
                </>
            )}

            {caption ? (
                <figcaption className="label absolute bottom-0 left-0 p-5 text-on-ink-faint md:p-7">
                    {caption}
                </figcaption>
            ) : null}
        </figure>
    );
}
