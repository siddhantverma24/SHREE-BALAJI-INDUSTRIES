import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-20">
      <div className="container-page rounded-lg border border-bark/10 bg-cream p-8 text-center shadow-premium">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-forest">
          Not found
        </p>
        <h1 className="mt-4 text-4xl font-black text-walnut">
          This page is not available.
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-bark/72">
          The product or page may have moved. Browse the full product range to
          continue.
        </p>
        <Link
          href="/products"
          className="focus-ring mt-7 inline-flex rounded-md bg-walnut px-5 py-3 text-sm font-black text-cream transition hover:bg-forest"
        >
          View products
        </Link>
      </div>
    </section>
  );
}
