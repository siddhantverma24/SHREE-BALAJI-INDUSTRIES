import type { Metadata } from "next";
import {
  Building2,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Store,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { contactCards, siteInfo } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Aaranya Boards for plywood, block board, flush door, dealer and contractor enquiries.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-cream py-16 md:py-24">
        <div className="soft-grid absolute inset-0 opacity-45" />
        <div className="container-page relative">
          <Reveal>
            <SectionHeading
              eyebrow="Contact"
              title="Tell us what you are building."
              description="Use the enquiry form UI or contact cards to start a conversation about boards, doors, quantities and applications."
            />
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-page grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <form className="rounded-lg border border-bark/10 bg-cream p-6 shadow-premium md:p-8">
              <div className="grid gap-5 md:grid-cols-2">
                <label className="grid gap-2 text-sm font-bold text-walnut">
                  Full name
                  <input
                    name="name"
                    type="text"
                    placeholder="Your name"
                    className="focus-ring rounded-md border border-bark/15 bg-ivory px-4 py-3 text-sm font-medium text-walnut placeholder:text-bark/40"
                  />
                </label>
                <label className="grid gap-2 text-sm font-bold text-walnut">
                  Phone number
                  <input
                    name="phone"
                    type="tel"
                    placeholder="+91"
                    className="focus-ring rounded-md border border-bark/15 bg-ivory px-4 py-3 text-sm font-medium text-walnut placeholder:text-bark/40"
                  />
                </label>
                <label className="grid gap-2 text-sm font-bold text-walnut">
                  Enquiry type
                  <select
                    name="type"
                    className="focus-ring rounded-md border border-bark/15 bg-ivory px-4 py-3 text-sm font-medium text-walnut"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select one
                    </option>
                    <option>Home project</option>
                    <option>Contractor enquiry</option>
                    <option>Dealer enquiry</option>
                    <option>Architect or designer enquiry</option>
                  </select>
                </label>
                <label className="grid gap-2 text-sm font-bold text-walnut">
                  City
                  <input
                    name="city"
                    type="text"
                    placeholder="City"
                    className="focus-ring rounded-md border border-bark/15 bg-ivory px-4 py-3 text-sm font-medium text-walnut placeholder:text-bark/40"
                  />
                </label>
                <label className="grid gap-2 text-sm font-bold text-walnut md:col-span-2">
                  Product interest
                  <input
                    name="product"
                    type="text"
                    placeholder="Plywood, Block Board, Flush Door..."
                    className="focus-ring rounded-md border border-bark/15 bg-ivory px-4 py-3 text-sm font-medium text-walnut placeholder:text-bark/40"
                  />
                </label>
                <label className="grid gap-2 text-sm font-bold text-walnut md:col-span-2">
                  Project details
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell us about use case, quantity and timeline"
                    className="focus-ring resize-none rounded-md border border-bark/15 bg-ivory px-4 py-3 text-sm font-medium text-walnut placeholder:text-bark/40"
                  />
                </label>
              </div>
              <button
                type="button"
                className="focus-ring mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-walnut px-5 py-3 text-sm font-black text-cream transition hover:bg-forest"
              >
                <Send className="size-4" aria-hidden="true" />
                Submit enquiry UI
              </button>
              <p className="mt-3 text-xs leading-5 text-bark/55">
                This is a front-end form only. Connect it to a CRM, email
                service or backend when ready.
              </p>
            </form>
          </Reveal>

          <div className="grid gap-5">
            {contactCards.map((card, index) => (
              <Reveal key={card.title} delay={index * 0.04}>
                <a
                  href={card.href}
                  className="focus-ring flex gap-4 rounded-lg border border-bark/10 bg-cream p-5 shadow-premium transition hover:-translate-y-1"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-md bg-sage text-forest">
                    <card.icon className="size-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-sm font-black uppercase tracking-[0.16em] text-bark/55">
                      {card.title}
                    </span>
                    <span className="mt-1 block text-base font-black text-walnut">
                      {card.value}
                    </span>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 md:py-24">
        <div className="container-page grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-lg border border-bark/10 bg-ivory p-6">
              <div className="flex items-center gap-3">
                <MapPin className="size-6 text-forest" aria-hidden="true" />
                <h2 className="text-2xl font-black text-walnut">Map placeholder</h2>
              </div>
              <div className="soft-grid mt-6 grid min-h-72 place-items-center rounded-lg border border-dashed border-bark/25 bg-cream">
                <div className="text-center">
                  <p className="text-sm font-black uppercase tracking-[0.16em] text-forest">
                    Google map embed
                  </p>
                  <p className="mt-2 max-w-sm text-sm leading-6 text-bark/65">
                    Replace this card with the verified business map once the
                    final address is available.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="h-full rounded-lg border border-bark/10 bg-walnut p-6 text-cream">
              <Store className="size-7 text-sage" aria-hidden="true" />
              <h2 className="mt-5 text-3xl font-black">Dealer enquiry</h2>
              <p className="mt-3 text-sm leading-6 text-cream/72">
                Interested in regular supply, bulk purchase or project pricing?
                Share your city, monthly requirement and preferred product
                categories over WhatsApp.
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <a
                  href={siteInfo.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring inline-flex items-center justify-center gap-2 rounded-md bg-forest px-5 py-3 text-sm font-black text-cream hover:bg-copper"
                >
                  <MessageCircle className="size-4" aria-hidden="true" />
                  WhatsApp
                </a>
                <a
                  href={siteInfo.phoneHref}
                  className="focus-ring inline-flex items-center justify-center gap-2 rounded-md border border-cream/20 px-5 py-3 text-sm font-black text-cream hover:border-sage"
                >
                  <Phone className="size-4" aria-hidden="true" />
                  Call
                </a>
              </div>
              <div className="mt-7 rounded-lg border border-cream/10 bg-cream/8 p-5">
                <Building2 className="size-5 text-sage" aria-hidden="true" />
                <p className="mt-3 text-sm font-bold leading-6 text-cream/76">
                  Placeholder address: {siteInfo.address}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
