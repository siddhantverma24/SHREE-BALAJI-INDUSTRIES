import { ArrowRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { navItems, siteInfo } from "@/lib/site";
import { productCategories } from "@/lib/products";

export function SiteFooter() {
  return (
    <footer className="border-t border-bark/10 bg-walnut text-cream">
      <div className="container-page grid gap-10 py-14 lg:grid-cols-[1.3fr_0.7fr_0.7fr_1fr]">
        <div>
          <Link href="/" className="focus-ring inline-flex items-center gap-3 rounded-md">
            <span className="wood-grain grid size-11 place-items-center rounded-md text-lg font-black text-cream">
              AB
            </span>
            <span>
              <span className="block text-xl font-black">{siteInfo.name}</span>
              <span className="mt-1 block text-xs font-semibold uppercase tracking-[0.2em] text-sage">
                Premium boards
              </span>
            </span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-7 text-cream/72">
            Plywood, Block Boards, Flush Doors and panel solutions crafted for
            durability, finish and everyday Indian usage.
          </p>
          <a
            href={siteInfo.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="focus-ring mt-6 inline-flex items-center gap-2 rounded-md bg-forest px-4 py-3 text-sm font-black text-cream transition hover:bg-copper"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            Enquire on WhatsApp
          </a>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.18em] text-sage">
            Navigate
          </h2>
          <ul className="mt-4 grid gap-3 text-sm text-cream/72">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  className="focus-ring inline-flex rounded-md transition hover:text-cream"
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
          <ul className="mt-4 grid gap-3 text-sm text-cream/72">
            {productCategories.map((category) => (
              <li key={category}>
                <Link
                  className="focus-ring inline-flex items-center gap-2 rounded-md transition hover:text-cream"
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
          <div className="mt-4 grid gap-4 text-sm text-cream/72">
            <a
              className="focus-ring flex gap-3 rounded-md transition hover:text-cream"
              href={siteInfo.phoneHref}
            >
              <Phone className="mt-0.5 size-4 text-sage" aria-hidden="true" />
              {siteInfo.phone}
            </a>
            <a
              className="focus-ring flex gap-3 rounded-md transition hover:text-cream"
              href={`mailto:${siteInfo.email}`}
            >
              <Mail className="mt-0.5 size-4 text-sage" aria-hidden="true" />
              {siteInfo.email}
            </a>
            <p className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-sage" aria-hidden="true" />
              {siteInfo.address}
            </p>
          </div>
        </address>
      </div>
      <div className="border-t border-cream/10">
        <div className="container-page flex flex-col gap-3 py-5 text-xs text-cream/55 md:flex-row md:items-center md:justify-between">
          <p>Copyright 2026 {siteInfo.name}. All rights reserved.</p>
          <p>Certification-ready product information. Final specs can be customized.</p>
        </div>
      </div>
    </footer>
  );
}
