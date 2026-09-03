import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppFloatingButton } from "@/components/whatsapp-floating-button";
import { siteInfo } from "@/lib/site";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const themeInitScript = `
  (function () {
    try {
      var key = "shree-balaji-theme";
      var stored = window.localStorage.getItem(key);
      var theme = stored === "dark" || stored === "light" ? stored : "light";
      var root = document.documentElement;
      root.classList.toggle("dark", theme === "dark");
      root.dataset.theme = theme;
    } catch (error) {}
  })();
`;

export const metadata: Metadata = {
  title: {
    default: `${siteInfo.name} | Premium Wooden Boards for Indian Interiors`,
    template: `%s | ${siteInfo.name}`,
  },
  description:
    "Premium plywood, block boards, flush doors and panel solutions crafted for durable Indian homes, offices and interior projects.",
  keywords: [
    "plywood India",
    "block board",
    "flush doors",
    "waterproof plywood",
    "wooden boards",
    "Shree Balaji Industries",
  ],
  openGraph: {
    title: `${siteInfo.name} | Premium Wooden Boards`,
    description:
      "Plywood, Block Boards, Flush Doors and panel solutions for Indian interiors.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${spaceGrotesk.variable} h-full scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-ivory text-walnut antialiased">
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
        <SiteHeader />
        <main className="min-h-screen">{children}</main>
        <SiteFooter />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
