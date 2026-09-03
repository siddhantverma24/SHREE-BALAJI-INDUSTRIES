import type { Metadata } from "next";
import {
  CheckCircle2,
  ClipboardCheck,
  Droplets,
  Layers3,
  PackageCheck,
  Ruler,
  SearchCheck,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Quality",
  description:
    "See the quality process for raw material selection, bonding, calibration, moisture checks and final inspection.",
};

const qualitySteps = [
  {
    title: "Raw material selection",
    description:
      "Timber and veneer inputs are reviewed for practical suitability before board production begins.",
    icon: SearchCheck,
  },
  {
    title: "Core composition",
    description:
      "Core layers are arranged with strength, stability and product application in mind.",
    icon: Layers3,
  },
  {
    title: "Bonding strength",
    description:
      "Adhesive bonding is checked against the intended product grade and usage environment.",
    icon: ClipboardCheck,
  },
  {
    title: "Pressing and calibration",
    description:
      "Panels are pressed and finished for cleaner thickness, surface behavior and handling.",
    icon: Ruler,
  },
  {
    title: "Moisture resistance checks",
    description:
      "Moisture-facing products are reviewed for water-resistance readiness before dispatch.",
    icon: Droplets,
  },
  {
    title: "Final inspection",
    description:
      "Panels are quality checked for surface finish, edges, visible defects and batch readiness.",
    icon: PackageCheck,
  },
];

export default function QualityPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-cream py-16 md:py-24">
        <div className="soft-grid absolute inset-0 opacity-45" />
        <div className="container-page relative">
          <Reveal>
            <SectionHeading
              eyebrow="Quality"
              title="A practical quality process for dependable boards."
              description="No unsupported certification claims. The website uses certification-ready and quality checked language until actual certificates and test data are supplied."
            />
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-page">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {qualitySteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.05}>
                <article className="h-full rounded-lg border border-bark/10 bg-cream p-6 shadow-premium">
                  <span className="grid size-12 place-items-center rounded-md bg-sage text-forest">
                    <step.icon className="size-6" aria-hidden="true" />
                  </span>
                  <p className="mt-6 text-sm font-black uppercase tracking-[0.16em] text-copper">
                    Step {index + 1}
                  </p>
                  <h2 className="mt-2 text-xl font-black text-walnut">
                    {step.title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-bark/75">
                    {step.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-panel py-16 text-panel-text md:py-20">
        <div className="container-page grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Quality checked"
              title="Prepared for technical proof when real data is available."
              description="The content is intentionally careful: it leaves room for lab reports, certifications, warranty terms and grade-specific datasheets once the business provides them."
            />
          </Reveal>
          <Reveal delay={0.08}>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Batch-wise inspection language",
                "Certification-ready wording",
                "No fake ISI or lab claims",
                "Room for future datasheets",
              ].map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-lg border border-panel-text/10 bg-panel-text/8 p-4"
                >
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-sage" aria-hidden="true" />
                  <p className="text-sm font-bold text-panel-text/78">{item}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
