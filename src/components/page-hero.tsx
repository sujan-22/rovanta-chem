import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageHeroProps {
    eyebrow: string;
    title: string;
    description: string;
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
    return (
        <section className="relative overflow-hidden bg-ink py-16 text-[#f2efe8] md:py-20">
            <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,135,59,0.17),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(46,139,110,0.15),transparent_40%)]"
            />

            <div className="site-container relative">
                <div className="mb-5 flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.12em] text-[#9fb0b7]">
                    <Link href="/" className="hover:text-white">
                        Home
                    </Link>

                    <ChevronRight className="size-3.5" />

                    <span>{eyebrow}</span>
                </div>

                <h1 className="text-balance max-w-4xl font-heading text-4xl font-bold leading-tight md:text-5xl">
                    {title}
                </h1>

                <p className="mt-5 max-w-3xl text-base leading-8 text-[#c9d2d6] md:text-lg">
                    {description}
                </p>
            </div>
        </section>
    );
}
