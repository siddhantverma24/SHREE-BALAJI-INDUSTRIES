"use client";

import { useMemo, useState } from "react";
import { ProductCard } from "@/components/product-card";
import type { Product, ProductCategory } from "@/lib/products";
import { productCategories } from "@/lib/products";

type FilterValue = ProductCategory | "All";

type ProductFilterListProps = {
  products: Product[];
};

export function ProductFilterList({ products }: ProductFilterListProps) {
  const [active, setActive] = useState<FilterValue>("All");

  const filteredProducts = useMemo(() => {
    if (active === "All") {
      return products;
    }

    return products.filter((product) => product.category === active);
  }, [active, products]);

  const filters: FilterValue[] = ["All", ...productCategories];

  return (
    <div>
      <div className="flex flex-wrap gap-3" role="tablist" aria-label="Product categories">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            className={`focus-ring rounded-md border px-4 py-3 text-sm font-black transition ${
              active === filter
                ? "border-forest bg-forest text-cream"
                : "border-bark/15 bg-cream text-walnut hover:border-forest hover:text-forest"
            }`}
            onClick={() => setActive(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
}
