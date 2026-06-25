import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppFloatingButton } from "@/components/whatsapp-floating-button";
import { siteInfo } from "@/lib/site";
import "./globals.css";

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
    "Aaranya Boards",
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
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full bg-ivory text-walnut antialiased">
        <SiteHeader />
        <main className="min-h-screen">{children}</main>
        <SiteFooter />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
