import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <main className="grid min-h-[65vh] place-items-center px-6 py-20">
            <div className="max-w-xl text-center">
                <p className="technical-label text-copper-deep">404</p>

                <h1 className="mt-4 font-heading text-4xl font-bold text-ink">
                    Page not found
                </h1>

                <p className="mt-4 leading-8 text-ink-soft">
                    The requested page may have moved or may not exist.
                </p>

                <Button asChild className="mt-7">
                    <Link href="/">Return Home</Link>
                </Button>
            </div>
        </main>
    );
}
