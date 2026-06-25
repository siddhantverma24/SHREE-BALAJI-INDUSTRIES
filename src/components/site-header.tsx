"use client";

import { Menu, MessageCircle, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems, siteInfo } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-bark/10 bg-cream/90 backdrop-blur-xl">
      <div className="container-page flex h-[72px] items-center justify-between gap-4">
        <Link
          href="/"
          className="focus-ring flex items-center gap-3 rounded-md"
          onClick={() => setOpen(false)}
        >
          <span className="wood-grain grid size-11 place-items-center rounded-md text-lg font-black text-cream shadow-premium">
            AB
          </span>
          <span>
            <span className="block text-lg font-black leading-none text-walnut">
              {siteInfo.name}
            </span>
            <span className="mt-1 block text-xs font-semibold uppercase tracking-[0.2em] text-forest">
              Wooden boards
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`focus-ring rounded-md px-4 py-2 text-sm font-bold transition ${
                  active
                    ? "bg-sage text-forest"
                    : "text-bark/75 hover:bg-sand/45 hover:text-walnut"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={siteInfo.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="focus-ring inline-flex items-center gap-2 rounded-md bg-forest px-4 py-3 text-sm font-black text-cream shadow-premium transition hover:bg-walnut"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            WhatsApp Quote
          </a>
        </div>

        <button
          type="button"
          className="focus-ring inline-flex size-11 items-center justify-center rounded-md border border-bark/15 text-walnut lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? (
            <X className="size-5" aria-hidden="true" />
          ) : (
            <Menu className="size-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {open ? (
        <div className="border-t border-bark/10 bg-cream lg:hidden">
          <nav className="container-page grid gap-2 py-4" aria-label="Mobile">
            {navItems.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`focus-ring rounded-md px-4 py-3 text-sm font-bold ${
                    active
                      ? "bg-sage text-forest"
                      : "text-bark/80 hover:bg-sand/45"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
            <a
              href={siteInfo.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="focus-ring mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-forest px-4 py-3 text-sm font-black text-cream"
              onClick={() => setOpen(false)}
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              Get Quote on WhatsApp
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
