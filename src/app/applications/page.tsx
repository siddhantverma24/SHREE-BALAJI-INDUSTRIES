import type { Metadata } from "next";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { applications } from "@/lib/applications";

export const metadata: Metadata = {
  title: "Applications",
  description:
    "Find suitable plywood, block board and flush door products for kitchens, wardrobes, doors, furniture, offices and wall panels.",
};

export default function ApplicationsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-cream py-16 md:py-24">
        <div className="soft-grid absolute inset-0 opacity-45" />
        <div className="container-page relative">
          <Reveal>
            <SectionHeading
              eyebrow="Applications"
              title="Boards matched to real Indian interior work."
              description="Each section recommends product types for the way customers, carpenters, contractors and designers actually ask for boards."
            />
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-page grid gap-6 md:grid-cols-2">
          {applications.map((application, index) => (
            <Reveal key={application.title} delay={index * 0.04}>
              <article className="h-full rounded-lg border border-bark/10 bg-cream p-6 shadow-premium">
                <p className="text-sm font-black uppercase tracking-[0.16em] text-forest">
                  {application.categories.join(" / ")}
                </p>
                <h2 className="mt-4 text-2xl font-black text-walnut">
                  {application.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-bark/75">
                  {application.description}
                </p>
                <div className="mt-6">
                  <h3 className="text-sm font-black uppercase tracking-[0.16em] text-bark/60">
                    Suitable products
                  </h3>
                  <ul className="mt-4 grid gap-3">
                    {application.suitableProducts.map((product) => (
                      <li key={product} className="flex gap-3 text-sm font-bold text-walnut">
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-forest" aria-hidden="true" />
                        {product}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href="/products"
                  className="focus-ring mt-7 inline-flex items-center gap-2 rounded-md bg-walnut px-4 py-3 text-sm font-black text-cream transition hover:bg-forest"
                >
                  View matching products
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
