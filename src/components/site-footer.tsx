import { siteConfig } from "@/lib/site";

export function SiteFooter() {
    return (
        <footer className="border-t border-white/10 px-6 py-8">
            <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
                <p>© 2026 {siteConfig.name}. All rights reserved.</p>
                <p>www.rovantachem.com</p>
            </div>
        </footer>
    );
}
