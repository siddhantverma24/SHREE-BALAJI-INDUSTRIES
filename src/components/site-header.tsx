"use client";

import { Menu, MessageCircle, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { navItems, siteInfo } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-bark/10 bg-cream/90 shadow-[0_12px_40px_rgba(17,17,17,0.08)] backdrop-blur-xl">
      <div className="container-page flex h-[72px] items-center justify-between gap-4">
        <Link
          href="/"
          className="focus-ring group flex items-center gap-3 rounded-md"
          onClick={() => setOpen(false)}
        >
          <span className="wood-grain font-display grid size-11 place-items-center rounded-md text-lg font-black text-cream shadow-premium ring-1 ring-gold/45 transition group-hover:scale-105">
            AB
          </span>
          <span>
            <span className="font-display block text-lg font-black leading-none text-walnut">
              {siteInfo.name}
            </span>
            <span className="mt-1 block text-xs font-bold uppercase text-forest">
              Wooden boards
            </span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-1 rounded-lg border border-bark/10 bg-ivory/60 p-1 shadow-sm lg:flex"
          aria-label="Main"
        >
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            const isShowcase = item.href === "/showcase";

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`focus-ring rounded-md px-3 py-2 text-sm font-black transition xl:px-4 ${
                  active
                    ? "bg-sage text-forest shadow-sm"
                    : isShowcase
                      ? "bg-gold text-panel shadow-sm ring-1 ring-panel/10 hover:bg-ember hover:text-cream"
                      : "text-bark/75 hover:bg-cream hover:text-walnut"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <a
            href={siteInfo.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="focus-ring inline-flex items-center gap-2 rounded-md bg-ember px-4 py-3 text-sm font-black text-cream shadow-premium transition hover:-translate-y-0.5 hover:bg-action"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            WhatsApp Quote
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="focus-ring inline-flex size-11 items-center justify-center rounded-md border border-bark/15 bg-cream text-walnut shadow-sm"
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
      </div>

      {open ? (
        <div className="border-t border-bark/10 bg-cream/96 shadow-premium backdrop-blur lg:hidden">
          <nav className="container-page grid gap-2 py-4" aria-label="Mobile">
            {navItems.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              const isShowcase = item.href === "/showcase";

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`focus-ring rounded-md px-4 py-3 text-sm font-bold ${
                    active
                      ? "bg-sage text-forest"
                      : isShowcase
                        ? "bg-gold text-panel ring-1 ring-panel/10"
                        : "text-bark/80 hover:bg-ivory"
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
              className="focus-ring mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-ember px-4 py-3 text-sm font-black text-cream"
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
