import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import type { Product } from "@/lib/products";
import { siteInfo } from "@/lib/site";

const categoryTone: Record<Product["category"], string> = {
  Plywood: "bg-copper/12 text-bark",
  "Block Boards": "bg-sage text-forest",
  "Flush Doors": "bg-walnut/10 text-walnut",
};

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group grid h-full overflow-hidden rounded-lg border border-bark/10 bg-cream shadow-premium transition hover:-translate-y-1">
      <div className="wood-grain relative min-h-36 overflow-hidden">
        <div className="wood-lines absolute inset-0 opacity-70" />
        <div className="absolute left-5 top-5 rounded-md bg-cream/92 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-walnut">
          {product.badge}
        </div>
        <div className="absolute bottom-4 right-4 flex gap-2">
          <span className="h-20 w-8 rounded-sm bg-cream/20 shadow-xl" />
          <span className="h-24 w-8 rounded-sm bg-walnut/20 shadow-xl" />
          <span className="h-16 w-8 rounded-sm bg-forest/20 shadow-xl" />
        </div>
      </div>

      <div className="flex h-full flex-col p-5">
        <span
          className={`mb-4 w-fit rounded-md px-3 py-1 text-xs font-black uppercase tracking-[0.15em] ${categoryTone[product.category]}`}
        >
          {product.category}
        </span>
        <h3 className="text-xl font-black leading-tight text-walnut">
          {product.name}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-bark/78">
          {product.shortDescription}
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <Link
            href={`/products/${product.slug}`}
            className="focus-ring inline-flex items-center justify-center gap-2 rounded-md bg-walnut px-4 py-3 text-sm font-black text-cream transition hover:bg-forest"
          >
            View Details
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
          <a
            href={siteInfo.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="focus-ring inline-flex items-center justify-center gap-2 rounded-md border border-bark/15 px-4 py-3 text-sm font-black text-walnut transition hover:border-forest hover:text-forest"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            Ask
          </a>
        </div>
      </div>
    </article>
  );
}
