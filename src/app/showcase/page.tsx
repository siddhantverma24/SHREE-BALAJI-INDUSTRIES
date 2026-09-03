import type { Metadata } from "next";
import { FactoryShowcase } from "@/components/factory-showcase";

export const metadata: Metadata = {
  title: "Factory Showcase",
  description:
    "Factory insights and product showcase for Shree Balaji Industries manufacturing, quality and board products.",
};

export default function ShowcasePage() {
  return <FactoryShowcase />;
}
