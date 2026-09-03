import {
  ArrowRight,
  CheckCircle2,
  DoorOpen,
  Home as HomeIcon,
  Layers3,
  MessageCircle,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import {
  PhotoShowcaseCard,
  ShowcasePreviewLink,
  VideoShowcaseCard,
} from "@/components/showcase-card";
import { applications } from "@/lib/applications";
import { featuredProducts, productCategories } from "@/lib/products";
import { photoShowcaseItems, videoShowcaseItems } from "@/lib/showcase";
import { siteInfo, whyChooseUs } from "@/lib/site";

export default function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-panel/20 bg-panel text-panel-text">
        <div className="soft-grid absolute inset-0 opacity-15" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-ivory via-ivory/25 to-transparent" />
        <div className="wood-grain absolute -right-28 top-10 h-72 w-72 rotate-6 rounded-lg opacity-30 blur-sm md:h-[520px] md:w-[520px]" />
        <div className="absolute inset-y-0 right-0 hidden w-1/2 overflow-hidden lg:block">
          <div className="wood-grain absolute right-24 top-16 h-[540px] w-40 rotate-6 rounded-md shadow-premium" />
          <div className="wood-grain absolute right-52 top-28 h-[520px] w-32 -rotate-3 rounded-md shadow-premium brightness-110" />
          <div className="wood-grain absolute right-5 top-40 h-[460px] w-28 rotate-12 rounded-md shadow-premium saturate-75" />
          <div className="wood-lines absolute inset-0 opacity-40" />
        </div>
        <div className="container-page relative z-10 py-16 md:py-24 lg:py-28">
          <div className="max-w-3xl">
            <Reveal>
              <p className="mb-5 inline-flex rounded-md border border-gold/40 bg-gold px-4 py-2 text-xs font-black uppercase text-panel">
                Premium Indian panel solutions
              </p>
              <h1 className="font-display text-5xl font-black text-panel-text md:text-7xl lg:text-8xl">
                Premium Wooden Boards for Stronger Indian Homes & Interiors
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-panel-text/76 md:text-xl">
                Plywood, Block Boards, Flush Doors and panel solutions crafted
                for durability, finish and everyday Indian usage.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/products"
                  className="focus-ring inline-flex items-center justify-center gap-2 rounded-md bg-ember px-6 py-4 text-sm font-black text-cream shadow-premium transition hover:bg-gold hover:text-panel"
                >
                  Explore Products
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
                <a
                  href={siteInfo.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring inline-flex items-center justify-center gap-2 rounded-md border border-panel-text/20 bg-panel-text/10 px-6 py-4 text-sm font-black text-panel-text backdrop-blur transition hover:border-gold hover:text-gold"
                >
                  <MessageCircle className="size-4" aria-hidden="true" />
                  Get Quote on WhatsApp
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal className="mt-12 grid gap-3 sm:grid-cols-3 lg:max-w-3xl" delay={0.1}>
            {[
              ["14+", "Board types"],
              ["3", "Main categories"],
              ["India", "Market ready"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-lg border border-panel-text/10 bg-panel-text/10 p-4 shadow-sm backdrop-blur"
              >
                <p className="font-display text-3xl font-black text-gold">{value}</p>
                <p className="mt-1 text-sm font-bold text-panel-text/68">{label}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Product categories"
              title="Choose boards by the work they need to do."
              description="A focused range for carpentry teams, designers, contractors, dealers and homeowners who want clear choices."
            />
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {productCategories.map((category, index) => {
              const Icon =
                category === "Plywood"
                  ? Layers3
                  : category === "Block Boards"
                    ? HomeIcon
                    : DoorOpen;

              return (
                <Reveal key={category} delay={index * 0.08}>
                  <Link
                    href="/products"
                    className="focus-ring group block h-full rounded-lg border border-bark/10 bg-cream p-6 shadow-premium transition hover:-translate-y-1"
                  >
                    <span className="grid size-12 place-items-center rounded-md bg-sage text-forest">
                      <Icon className="size-6" aria-hidden="true" />
                    </span>
                    <h3 className="mt-7 text-2xl font-black text-walnut">
                      {category}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-bark/75">
                      {category === "Plywood"
                        ? "Interior, waterproof, marine, calibrated and decorative options for furniture and panels."
                        : category === "Block Boards"
                          ? "Stable boards for shutters, long panels, partitions and furniture spans."
                          : "Clean, modern doors for homes, offices, hotels and utility zones."}
                    </p>
                    <span className="mt-7 inline-flex items-center gap-2 text-sm font-black text-forest">
                      View range
                      <ArrowRight className="size-4 transition group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 md:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <SectionHeading
              eyebrow="Why choose us"
              title="Premium feel, practical performance."
              description="Built around the way Indian interiors are actually made: site conditions, hardware loads, laminate finishes and fast dealer conversations."
            />
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {whyChooseUs.map((point, index) => (
              <Reveal key={point.title} delay={index * 0.05}>
              <div className="h-full rounded-lg border border-bark/10 bg-white p-5 shadow-sm">
                  <point.icon className="size-6 text-forest" aria-hidden="true" />
                  <h3 className="mt-5 text-lg font-black text-walnut">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-bark/72">
                    {point.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Applications"
              title="From modular kitchens to warm wall panels."
              description="Each application points users toward product types that suit the job, so enquiry conversations start clearer."
              align="center"
            />
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {applications.slice(0, 6).map((item, index) => (
              <Reveal key={item.title} delay={index * 0.04}>
                <div className="h-full rounded-lg border border-bark/10 bg-cream p-5">
                  <Wrench className="size-5 text-copper" aria-hidden="true" />
                  <h3 className="mt-4 text-lg font-black text-walnut">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-bark/72">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/applications"
              className="focus-ring inline-flex items-center gap-2 rounded-md border border-bark/15 bg-cream px-5 py-3 text-sm font-black text-walnut transition hover:border-forest hover:text-forest"
            >
              Explore applications
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 md:py-24">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Featured products"
              title="Popular boards for everyday Indian projects."
              description="A starter shortlist for kitchens, wardrobes, shutters and modern flush-door requirements."
            />
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product, index) => (
              <Reveal key={product.slug} delay={index * 0.05}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Comparison guide"
              title="Make the right board choice faster."
              description="Helpful starting points for homeowners and trade buyers comparing common material decisions."
            />
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Plywood vs Block Board",
                text: "Compare strength, weight and stability for furniture panels and shutters.",
                icon: ShieldCheck,
              },
              {
                title: "Commercial vs Waterproof Plywood",
                text: "Choose between dry-area value and moisture-ready performance.",
                icon: CheckCircle2,
              },
              {
                title: "Flush Door vs Traditional Wooden Door",
                text: "Understand finish, stability and modern interior usage.",
                icon: DoorOpen,
              },
            ].map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06}>
                <article className="h-full rounded-lg border border-bark/10 bg-white p-6 shadow-sm">
                  <item.icon className="size-6 text-forest" aria-hidden="true" />
                  <h3 className="mt-5 text-xl font-black text-walnut">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-bark/72">{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-panel py-16 text-panel-text md:py-20">
        <div className="wood-grain absolute -right-24 top-8 h-72 w-72 rotate-12 rounded-lg opacity-10 blur-sm" />
        <div className="container-page grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <Reveal>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-sage">
              Dealer and contractor enquiry
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-black leading-tight md:text-5xl">
              Need boards for a project, site or regular trade supply?
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-panel-text/72">
              Share the use case, quantity and city. The team can guide you on
              suitable plywood, block board and flush door options.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <a
              href={siteInfo.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-md bg-ember px-6 py-4 text-sm font-black text-cream transition hover:bg-gold hover:text-panel"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              Start WhatsApp Enquiry
            </a>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Customer voices"
              title="Clear, practical feedback from project buyers."
              description="Real testimonials can be added when the business is ready. These placeholders show the intended tone."
              align="center"
            />
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                quote:
                  "The product guidance made it easy to choose BWP plywood for our kitchen and commercial plywood for wardrobes.",
                name: "Rakesh Mehta",
                role: "Homeowner, Ahmedabad",
              },
              {
                quote:
                  "The range is simple to explain to clients. Calibrated plywood helped our modular work look cleaner on site.",
                name: "Nisha Rao",
                role: "Interior designer, Pune",
              },
              {
                quote:
                  "For regular shutter and furniture work, the block board options are practical and trade-friendly.",
                name: "Imran Shaikh",
                role: "Contractor, Mumbai",
              },
            ].map((testimonial, index) => (
              <Reveal key={testimonial.name} delay={index * 0.06}>
                <figure className="h-full rounded-lg border border-bark/10 bg-white p-6 shadow-sm">
                  <blockquote className="text-base leading-7 text-bark/82">
                    {testimonial.quote}
                  </blockquote>
                  <figcaption className="mt-6 border-t border-bark/10 pt-4">
                    <p className="font-black text-walnut">{testimonial.name}</p>
                    <p className="mt-1 text-sm text-bark/65">{testimonial.role}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-14 md:py-20">
        <div className="container-page">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <Reveal>
              <SectionHeading
                eyebrow="Work showcase"
                title="A preview of projects, process clips and finished interiors."
                description="Explore product photos, factory moments, short demos and real application categories for Indian homes and commercial spaces."
              />
            </Reveal>
            <Reveal delay={0.08}>
              <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                <ShowcasePreviewLink />
              </div>
            </Reveal>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_1fr_1fr]">
            {photoShowcaseItems.slice(0, 3).map((item, index) => (
              <Reveal key={item.id} delay={index * 0.05}>
                <PhotoShowcaseCard item={item} compact />
              </Reveal>
            ))}
          </div>

          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {videoShowcaseItems.slice(0, 2).map((item, index) => (
              <Reveal key={item.id} delay={index * 0.05}>
                <VideoShowcaseCard item={item} compact />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 md:py-20">
        <div className="container-page rounded-lg border border-bark/10 bg-ivory p-6 shadow-premium md:p-10">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-forest">
                Ready to talk boards?
              </p>
              <h2 className="mt-3 text-3xl font-black text-walnut md:text-4xl">
                Get product suggestions for your space.
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-bark/72">
                Tell us whether you are building a kitchen, wardrobe, door,
                office or dealer enquiry. We will help you shortlist the right
                board type.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={siteInfo.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-md bg-forest px-5 py-3 text-sm font-black text-cream"
              >
                <MessageCircle className="size-4" aria-hidden="true" />
                WhatsApp
              </a>
              <Link
                href="/contact"
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-md border border-bark/15 px-5 py-3 text-sm font-black text-walnut hover:border-forest hover:text-forest"
              >
                Contact page
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
