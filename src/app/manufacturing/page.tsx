import { PageHero } from "@/components/page-hero";
import { siteContent } from "@/content/site-content";
import { createPageMetadata } from "@/lib/metadata";

const { manufacturing } = siteContent;

export const metadata = createPageMetadata(
    manufacturing.hero.title,
    manufacturing.hero.description,
    "/manufacturing"
);

export default function ManufacturingPage() {
    return (
        <main>
            <PageHero {...manufacturing.hero} />

            <section className="py-20 md:py-24">
                <div className="site-container">
                    <div className="grid gap-6 lg:grid-cols-2">
                        {manufacturing.processes.map((process) => (
                            <article
                                key={process.number}
                                className="surface-card p-7"
                            >
                                <p className="technical-label text-copper-deep">
                                    {process.number} · {process.formula}
                                </p>
                                <h2 className="mt-3 font-heading text-2xl font-bold">
                                    {process.title}
                                </h2>
                                <p className="mt-4 leading-8 text-ink-soft">
                                    {process.description}
                                </p>
                                <p className="mt-5 overflow-x-auto rounded-lg bg-paper-deep p-4 font-mono text-sm text-verdigris-deep">
                                    {process.equation}
                                </p>
                            </article>
                        ))}
                    </div>

                    <div className="mt-14">
                        <p className="technical-label text-copper-deep">
                            Plant infrastructure
                        </p>
                        <h2 className="mt-3 font-heading text-3xl font-bold">
                            Engineered for safety and consistency.
                        </h2>

                        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                            {manufacturing.infrastructure.map((item) => (
                                <article
                                    key={item.title}
                                    className="surface-card p-6"
                                >
                                    <h3 className="font-heading text-xl font-bold">
                                        {item.title}
                                    </h3>
                                    <p className="mt-3 leading-7 text-ink-soft">
                                        {item.description}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>

                    <div className="mt-14">
                        <p className="technical-label text-copper-deep">
                            Logistics
                        </p>
                        <h2 className="mt-3 font-heading text-3xl font-bold">
                            On the NH-8 corridor.
                        </h2>

                        <div className="surface-card mt-7 overflow-hidden">
                            <table className="w-full border-collapse text-left">
                                <tbody>
                                    {manufacturing.logistics.map((item) => (
                                        <tr
                                            key={item.label}
                                            className="border-b border-line last:border-b-0"
                                        >
                                            <th className="w-40 bg-paper-deep px-5 py-4 font-mono text-xs uppercase tracking-wider">
                                                {item.label}
                                            </th>
                                            <td className="px-5 py-4 leading-7">
                                                {item.value}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
