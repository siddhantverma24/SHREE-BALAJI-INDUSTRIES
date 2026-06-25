import type { Metadata } from "next";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { aboutHighlights, siteInfo } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Aaranya Boards, a practical and premium wooden boards company for Indian interiors.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-cream py-16 md:py-24">
        <div className="soft-grid absolute inset-0 opacity-45" />
        <div className="container-page relative grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="About Aaranya Boards"
              title="Warm wood character with practical Indian reliability."
              description="Aaranya Boards is a placeholder brand for a manufacturer and supplier of plywood, block boards, flush doors and panel products for homes, offices and trade projects."
            />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/products"
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-md bg-walnut px-5 py-3 text-sm font-black text-cream transition hover:bg-forest"
              >
                Explore products
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <a
                href={siteInfo.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-md border border-bark/15 px-5 py-3 text-sm font-black text-walnut hover:border-forest hover:text-forest"
              >
                Talk to us
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="relative overflow-hidden rounded-lg border border-bark/10 bg-walnut p-6 text-cream shadow-premium">
              <div className="wood-grain absolute inset-x-10 top-8 h-52 rounded-md opacity-85" />
              <div className="wood-lines absolute inset-0 opacity-45" />
              <div className="relative mt-48 rounded-lg bg-cream/95 p-6 text-walnut">
                <p className="text-sm font-black uppercase tracking-[0.16em] text-forest">
                  Brand promise
                </p>
                <p className="mt-3 text-2xl font-black leading-tight">
                  Premium boards that are simple to choose, easy to enquire
                  about and ready for Indian interiors.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-page grid gap-6 md:grid-cols-3">
          {aboutHighlights.map((highlight, index) => (
            <Reveal key={highlight.title} delay={index * 0.06}>
              <article className="h-full rounded-lg border border-bark/10 bg-cream p-6">
                <highlight.icon className="size-7 text-forest" aria-hidden="true" />
                <h2 className="mt-5 text-xl font-black text-walnut">
                  {highlight.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-bark/75">
                  {highlight.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-cream py-16 md:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionHeading
              eyebrow="How we think"
              title="Made for people who need clarity before purchase."
              description="Normal customers, carpenters, contractors, dealers, architects and interior designers ask different questions. The product range is structured to make those conversations easier."
            />
          </Reveal>
          <Reveal delay={0.08}>
            <div className="grid gap-4">
              {[
                "Clear categories for faster shortlisting.",
                "Use-case led product descriptions instead of confusing jargon.",
                "Quality checked messaging without unsupported certification claims.",
                "Dealer and bulk enquiry flows built into every product card.",
              ].map((point) => (
                <div
                  key={point}
                  className="flex gap-3 rounded-lg border border-bark/10 bg-ivory p-5"
                >
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-forest" aria-hidden="true" />
                  <p className="text-sm font-bold leading-6 text-bark/78">{point}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
