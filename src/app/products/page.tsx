import type { Metadata } from "next";
import { ProductFilterList } from "@/components/product-filter-list";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore plywood, block boards, flush doors and panel products from Shree Balaji Industries.",
};

export default function ProductsPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-bark/10 bg-cream py-16 md:py-24">
        <div className="soft-grid absolute inset-0 opacity-50" />
        <div className="wood-grain absolute -right-20 top-10 h-72 w-72 rotate-6 rounded-lg opacity-20 blur-sm" />
        <div className="container-page relative">
          <Reveal>
            <SectionHeading
              eyebrow="Products"
              title="Plywood, Block Boards and Flush Doors."
              description="Filter the range by category, compare product use cases and start a WhatsApp enquiry from any card."
            />
          </Reveal>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container-page">
          <Reveal>
            <ProductFilterList products={products} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
