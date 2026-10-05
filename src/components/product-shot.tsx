import Image from "next/image";

import { cn } from "@/lib/utils";

interface ProductShotProps {
    src: string;
    alt: string;
    /** Sizing/aspect classes for the wrapper. */
    className?: string;
    /**
     * Background class matching the section the shot sits on. `multiply` blends
     * against the nearest backdrop, and a stacking context between the image and
     * the page (a sticky wrapper, an animating transform) would otherwise leave
     * the studio white showing as a box.
     */
    ground?: string;
    sizes?: string;
    priority?: boolean;
}

/*
 * A product photograph placed directly on the page: contained so the dish is
 * never cropped, and multiplied so its studio background disappears into the
 * paper rather than reading as a white card.
 */
export function ProductShot({
    src,
    alt,
    className,
    ground = "bg-paper",
    sizes = "(min-width: 1024px) 40vw, 90vw",
    priority = false,
}: ProductShotProps) {
    return (
        <div className={cn("relative", ground, className)}>
            <Image
                src={src}
                alt={alt}
                fill
                priority={priority}
                sizes={sizes}
                className="product-shot object-contain"
            />
        </div>
    );
}
