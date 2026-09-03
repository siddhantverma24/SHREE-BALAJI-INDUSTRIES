import { ArrowRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { navItems, siteInfo } from "@/lib/site";
import { productCategories } from "@/lib/products";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-bark/10 bg-panel text-panel-text">
      <div className="soft-grid absolute inset-0 opacity-10" />
      <div className="wood-grain absolute -right-24 top-10 h-72 w-72 rotate-12 rounded-lg opacity-10 blur-sm" />
      <div className="container-page relative grid gap-10 py-14 lg:grid-cols-[1.3fr_0.7fr_0.7fr_1fr]">
        <div>
          <Link href="/" className="focus-ring inline-flex items-center gap-3 rounded-md">
            <span className="wood-grain grid size-11 place-items-center rounded-md text-lg font-black text-panel-text">
              AB
            </span>
            <span>
              <span className="block text-xl font-black">{siteInfo.name}</span>
              <span className="mt-1 block text-xs font-semibold uppercase tracking-[0.2em] text-sage">
                Premium boards
              </span>
            </span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-7 text-panel-text/72">
            Plywood, Block Boards, Flush Doors and panel solutions crafted for
            durability, finish and everyday Indian usage.
          </p>
          <a
            href={siteInfo.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="focus-ring mt-6 inline-flex items-center gap-2 rounded-md bg-forest px-4 py-3 text-sm font-black text-cream shadow-premium transition hover:-translate-y-0.5 hover:bg-copper"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            Enquire on WhatsApp
          </a>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.18em] text-sage">
            Navigate
          </h2>
          <ul className="mt-4 grid gap-3 text-sm text-panel-text/72">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  className="focus-ring inline-flex rounded-md transition hover:text-panel-text"
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.18em] text-sage">
            Products
          </h2>
          <ul className="mt-4 grid gap-3 text-sm text-panel-text/72">
            {productCategories.map((category) => (
              <li key={category}>
                <Link
                  className="focus-ring inline-flex items-center gap-2 rounded-md transition hover:text-panel-text"
                  href="/products"
                >
                  <ArrowRight className="size-3.5" aria-hidden="true" />
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <address className="not-italic">
          <h2 className="text-sm font-black uppercase tracking-[0.18em] text-sage">
            Contact
          </h2>
          <div className="mt-4 grid gap-4 text-sm text-panel-text/72">
            <a
              className="focus-ring flex gap-3 rounded-md transition hover:text-panel-text"
              href={siteInfo.phoneHref}
            >
              <Phone className="mt-0.5 size-4 text-sage" aria-hidden="true" />
              {siteInfo.phone}
            </a>
            <a
              className="focus-ring flex gap-3 rounded-md transition hover:text-panel-text"
              href={siteInfo.whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle className="mt-0.5 size-4 text-sage" aria-hidden="true" />
              WhatsApp enquiry
            </a>
            <a
              className="focus-ring flex gap-3 rounded-md transition hover:text-panel-text"
              href={`mailto:${siteInfo.email}`}
            >
              <Mail className="mt-0.5 size-4 text-sage" aria-hidden="true" />
              {siteInfo.email}
            </a>
            <a
              className="focus-ring flex gap-3 rounded-md transition hover:text-panel-text"
              href={siteInfo.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
            >
              <MapPin className="mt-0.5 size-4 shrink-0 text-sage" aria-hidden="true" />
              {siteInfo.coordinates}
            </a>
          </div>
        </address>
      </div>
      <div className="relative border-t border-panel-text/10">
        <div className="container-page flex flex-col gap-3 py-5 text-xs text-panel-text/55 md:flex-row md:items-center md:justify-between">
          <p>Copyright 2026 {siteInfo.name}. All rights reserved.</p>
          <p>Certification-ready product information. Final specs can be customized.</p>
        </div>
      </div>
    </footer>
  );
}
