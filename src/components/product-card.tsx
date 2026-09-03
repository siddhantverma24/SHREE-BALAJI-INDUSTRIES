import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import type { Product } from "@/lib/products";
import { siteInfo } from "@/lib/site";

const categoryTone: Record<Product["category"], string> = {
  Plywood: "bg-gold text-panel",
  "Block Boards": "bg-sage text-forest",
  "Flush Doors": "bg-ember text-cream",
};

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group grid h-full overflow-hidden rounded-lg border border-bark/10 bg-white shadow-premium transition duration-300 hover:-translate-y-1 hover:border-ember/35 hover:shadow-[0_28px_90px_rgba(17,17,17,0.18)]">
      <div className="wood-grain relative min-h-40 overflow-hidden">
        <div className="wood-lines absolute inset-0 opacity-70" />
        <div className="absolute inset-x-8 top-5 h-16 rounded-full bg-cream/15 blur-2xl" />
        <div className="absolute left-5 top-5 rounded-md bg-panel px-3 py-1 text-xs font-black uppercase text-panel-text shadow-sm">
          {product.badge}
        </div>
        <div className="absolute bottom-4 right-4 flex items-end gap-2">
          <span className="h-20 w-9 rounded-sm border border-cream/20 bg-cream/22 shadow-xl backdrop-blur" />
          <span className="h-28 w-9 rounded-sm border border-cream/20 bg-walnut/25 shadow-xl backdrop-blur" />
          <span className="h-16 w-9 rounded-sm border border-cream/20 bg-forest/25 shadow-xl backdrop-blur" />
        </div>
      </div>

      <div className="flex h-full flex-col p-5">
        <span
          className={`mb-4 w-fit rounded-md px-3 py-1 text-xs font-black uppercase ${categoryTone[product.category]}`}
        >
          {product.category}
        </span>
        <h3 className="font-display text-2xl font-black leading-tight text-walnut">
          {product.name}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-bark/78">
          {product.shortDescription}
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <Link
            href={`/products/${product.slug}`}
            className="focus-ring inline-flex items-center justify-center gap-2 rounded-md bg-action px-4 py-3 text-sm font-black text-action-text transition hover:bg-ember hover:text-cream"
          >
            View Details
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
          <a
            href={siteInfo.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="focus-ring inline-flex items-center justify-center gap-2 rounded-md border border-bark/15 px-4 py-3 text-sm font-black text-walnut transition hover:border-ember hover:text-ember"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            Ask
          </a>
        </div>
      </div>
    </article>
  );
}
