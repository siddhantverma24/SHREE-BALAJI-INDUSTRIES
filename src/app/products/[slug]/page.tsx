import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  CheckCircle2,
  Layers3,
  MessageCircle,
  Ruler,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import {
  getProductBySlug,
  getRelatedProducts,
  products,
} from "@/lib/products";
import { siteInfo } from "@/lib/site";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product not found",
    };
  }

  return {
    title: product.name,
    description: product.shortDescription,
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product);

  return (
    <>
      <section className="relative overflow-hidden bg-cream py-16 md:py-24">
        <div className="soft-grid absolute inset-0 opacity-45" />
        <div className="wood-grain absolute -right-20 top-16 h-72 w-72 rounded-lg opacity-20 blur-sm" />
        <div className="container-page relative grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <Reveal>
            <Link
              href="/products"
              className="focus-ring mb-6 inline-flex items-center gap-2 rounded-md text-sm font-black text-forest"
            >
              <ArrowRight className="size-4 rotate-180" aria-hidden="true" />
              Back to products
            </Link>
            <span className="inline-flex rounded-md bg-sage px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-forest">
              {product.category}
            </span>
            <h1 className="mt-5 text-4xl font-black leading-tight text-walnut md:text-6xl">
              {product.name}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-bark/78">
              {product.longDescription}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={siteInfo.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-md bg-forest px-6 py-4 text-sm font-black text-cream shadow-premium transition hover:bg-walnut"
              >
                <MessageCircle className="size-4" aria-hidden="true" />
                Ask on WhatsApp
              </a>
              <Link
                href="/contact"
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-md border border-bark/15 px-6 py-4 text-sm font-black text-walnut transition hover:border-forest hover:text-forest"
              >
                Request quote
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="relative min-h-80 overflow-hidden rounded-lg border border-bark/10 bg-walnut p-6 shadow-premium">
              <div className="wood-grain absolute inset-x-8 bottom-8 top-8 rounded-md" />
              <div className="wood-lines absolute inset-0 opacity-55" />
              <div className="absolute left-8 top-8 rounded-md bg-cream/92 px-4 py-2 text-sm font-black text-walnut">
                {product.badge}
              </div>
              <div className="absolute bottom-8 left-8 right-8 rounded-lg bg-cream/92 p-5 backdrop-blur">
                <p className="text-sm font-black uppercase tracking-[0.16em] text-forest">
                  Best for
                </p>
                <p className="mt-2 text-xl font-black text-walnut">
                  {product.bestUseCases.slice(0, 2).join(" and ")}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-page grid gap-8 lg:grid-cols-3">
          <Reveal className="lg:col-span-1">
            <SectionHeading
              eyebrow="Product details"
              title="Built for practical site decisions."
              description="Use the details below as placeholders until exact technical datasheets and availability are provided."
            />
          </Reveal>
          <div className="grid gap-5 lg:col-span-2">
            <Reveal>
              <div className="rounded-lg border border-bark/10 bg-cream p-6">
                <div className="flex items-center gap-3">
                  <Sparkles className="size-6 text-copper" aria-hidden="true" />
                  <h2 className="text-2xl font-black text-walnut">Features</h2>
                </div>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm leading-6 text-bark/78">
                      <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-forest" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.04}>
              <div className="rounded-lg border border-bark/10 bg-cream p-6">
                <div className="flex items-center gap-3">
                  <Layers3 className="size-6 text-copper" aria-hidden="true" />
                  <h2 className="text-2xl font-black text-walnut">
                    Best applications
                  </h2>
                </div>
                <div className="mt-5 flex flex-wrap gap-3">
                  {product.bestUseCases.map((useCase) => (
                    <span
                      key={useCase}
                      className="rounded-md bg-sage px-3 py-2 text-sm font-bold text-forest"
                    >
                      {useCase}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="rounded-lg border border-bark/10 bg-cream p-6">
                <div className="flex items-center gap-3">
                  <Ruler className="size-6 text-copper" aria-hidden="true" />
                  <h2 className="text-2xl font-black text-walnut">
                    Available sizes and thickness
                  </h2>
                </div>
                <div className="mt-5 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
                  {product.sizes.map((size) => (
                    <div
                      key={size}
                      className="rounded-md border border-bark/10 bg-ivory px-4 py-3 text-sm font-black text-walnut"
                    >
                      {size}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="rounded-lg border border-bark/10 bg-walnut p-6 text-cream">
                <h2 className="text-2xl font-black">Why choose this product</h2>
                <ul className="mt-5 grid gap-3">
                  {product.whyChoose.map((reason) => (
                    <li key={reason} className="flex gap-3 text-sm leading-6 text-cream/76">
                      <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-sage" aria-hidden="true" />
                      {reason}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {relatedProducts.length > 0 ? (
        <section className="bg-cream py-16 md:py-24">
          <div className="container-page">
            <Reveal>
              <SectionHeading
                eyebrow="Related products"
                title={`More in ${product.category}`}
                description="Explore similar boards before sending your enquiry."
              />
            </Reveal>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {relatedProducts.map((relatedProduct, index) => (
                <Reveal key={relatedProduct.slug} delay={index * 0.05}>
                  <ProductCard product={relatedProduct} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
