import {
  ArrowRight,
  Camera,
  CheckCircle2,
  Film,
  Play,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type {
  FeaturedProjectItem,
  ShowcasePhotoItem,
  ShowcaseVideoItem,
} from "@/lib/showcase";
import { siteInfo } from "@/lib/site";

const placeholderTone: Record<
  ShowcasePhotoItem["tone"] | ShowcaseVideoItem["tone"],
  string
> = {
  teak: "from-[#111111] via-[#8c4d24] to-[#c78342]",
  walnut: "from-[#111111] via-[#432415] to-[#7b4728]",
  sandal: "from-[#111111] via-[#a35f29] to-[#ffd84d]",
  forest: "from-[#111111] via-[#2f6f4e] to-[#8c4d24]",
};

type ShowcasePlaceholderProps = {
  tone: ShowcasePhotoItem["tone"] | ShowcaseVideoItem["tone"];
  label: string;
  kind: "image" | "video";
  compact?: boolean;
};

function ShowcasePlaceholder({
  tone,
  label,
  kind,
  compact = false,
}: ShowcasePlaceholderProps) {
  const Icon = kind === "video" ? Film : Camera;

  return (
    <div
      className={`showcase-placeholder relative flex h-full min-h-full items-center justify-center overflow-hidden bg-gradient-to-br ${placeholderTone[tone]}`}
    >
      <div className="wood-lines absolute inset-0 opacity-55" />
      <div className="absolute inset-x-8 top-8 h-20 rounded-full bg-cream/15 blur-2xl" />
      <div className="relative z-10 grid place-items-center text-center text-cream">
        <span className="grid size-14 place-items-center rounded-full border border-gold/40 bg-cream/15 shadow-premium backdrop-blur">
          <Icon className="size-6" aria-hidden="true" />
        </span>
        <span
          className={`mt-4 max-w-44 text-xs font-black uppercase tracking-[0.18em] text-cream/88 ${
            compact ? "hidden sm:block" : ""
          }`}
        >
          {label}
        </span>
      </div>
    </div>
  );
}

type PhotoShowcaseCardProps = {
  item: ShowcasePhotoItem;
  compact?: boolean;
  featured?: boolean;
};

export function PhotoShowcaseCard({
  item,
  compact = false,
  featured = false,
}: PhotoShowcaseCardProps) {
  return (
    <article className="group h-full overflow-hidden rounded-lg border border-bark/10 bg-white shadow-premium transition duration-300 hover:-translate-y-1 hover:border-ember/35 hover:shadow-[0_28px_90px_rgba(17,17,17,0.18)]">
      <div
        className={`relative overflow-hidden ${
          featured
            ? "min-h-[360px] lg:h-full"
            : compact
              ? "aspect-[4/3]"
              : "aspect-[5/4] md:aspect-[4/3]"
        }`}
      >
        {item.image ? (
          <Image
            src={item.image}
            alt={item.imageAlt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <ShowcasePlaceholder
            tone={item.tone}
            label="Image coming soon"
            kind="image"
            compact={compact}
          />
        )}
        <div className="absolute left-4 top-4 rounded-md border border-cream/30 bg-white/90 px-3 py-1 text-xs font-black uppercase text-walnut shadow-sm backdrop-blur">
          {item.category}
        </div>
        {!item.image ? (
          <div className="absolute bottom-4 left-4 rounded-md bg-panel/82 px-3 py-1 text-xs font-black text-panel-text backdrop-blur">
            Image coming soon
          </div>
        ) : null}
      </div>
      <div className={compact ? "p-4" : featured ? "p-6" : "p-5"}>
        <h3
          className={`font-display font-black leading-tight text-walnut ${
            featured ? "text-2xl md:text-3xl" : "text-xl"
          }`}
        >
          {item.title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-bark/75">
          {item.description}
        </p>
      </div>
    </article>
  );
}

type VideoShowcaseCardProps = {
  item: ShowcaseVideoItem;
  compact?: boolean;
  featured?: boolean;
};

export function VideoShowcaseCard({
  item,
  compact = false,
  featured = false,
}: VideoShowcaseCardProps) {
  return (
    <article className="group h-full overflow-hidden rounded-lg border border-panel-text/10 bg-panel text-panel-text shadow-premium transition duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_28px_90px_rgba(17,17,17,0.22)]">
      <div
        className={`relative overflow-hidden bg-panel ${
          featured ? "aspect-[16/10] md:aspect-video" : "aspect-video"
        }`}
      >
        {item.video ? (
          <video
            className="h-full w-full object-cover"
            controls
            preload="metadata"
            poster={item.poster ?? undefined}
          >
            <source src={item.video} type="video/mp4" />
          </video>
        ) : (
          <ShowcasePlaceholder
            tone={item.tone}
            label="Demo video coming soon"
            kind="video"
            compact={compact}
          />
        )}
        {!item.video ? (
          <div className="absolute inset-0 grid place-items-center">
            <span className="grid size-16 place-items-center rounded-full border border-gold/45 bg-cream/20 text-gold shadow-premium backdrop-blur transition group-hover:scale-105">
              <Play className="ml-1 size-7 fill-current" aria-hidden="true" />
            </span>
          </div>
        ) : null}
        <div className="absolute right-4 top-4 rounded-md bg-gold px-3 py-1 text-xs font-black text-panel backdrop-blur">
          {item.duration}
        </div>
        {!item.video ? (
          <div className="absolute bottom-4 left-4 rounded-md bg-ember px-3 py-1 text-xs font-black text-cream backdrop-blur">
            Demo video coming soon
          </div>
        ) : null}
      </div>
      <div className={compact ? "p-4" : featured ? "p-6" : "p-5"}>
        <h3
          className={`font-display font-black leading-tight text-panel-text ${
            featured ? "text-2xl md:text-3xl" : "text-xl"
          }`}
        >
          {item.title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-panel-text/72">
          {item.description}
        </p>
      </div>
    </article>
  );
}

type FeaturedProjectCardProps = {
  item: FeaturedProjectItem;
};

export function FeaturedProjectCard({ item }: FeaturedProjectCardProps) {
  return (
    <article className="group grid h-full overflow-hidden rounded-lg border border-bark/10 bg-white shadow-premium transition duration-300 hover:-translate-y-1 hover:border-ember/35">
      <div className="relative aspect-[4/3] overflow-hidden">
        {item.image ? (
          <Image
            src={item.image}
            alt={item.imageAlt}
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <ShowcasePlaceholder
            tone={item.tone}
            label="Project image coming soon"
            kind="image"
          />
        )}
        <div className="absolute left-4 top-4 rounded-md bg-gold px-3 py-1 text-xs font-black uppercase text-panel backdrop-blur">
          {item.projectType}
        </div>
      </div>
      <div className="flex h-full flex-col p-5">
        <div className="flex items-start gap-3">
          <span className="grid size-10 shrink-0 place-items-center rounded-md bg-sage text-forest">
            <Sparkles className="size-5" aria-hidden="true" />
          </span>
          <div>
            <h3 className="font-display text-2xl font-black leading-tight text-walnut">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-bark/75">
              {item.description}
            </p>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-xs font-black uppercase text-bark/58">
            Recommended products
          </p>
          <ul className="mt-3 grid gap-2">
            {item.recommendedProducts.map((product) => (
              <li key={product} className="flex gap-2 text-sm font-bold text-walnut">
                <CheckCircle2
                  className="mt-0.5 size-4 shrink-0 text-forest"
                  aria-hidden="true"
                />
                {product}
              </li>
            ))}
          </ul>
        </div>

        <a
          href={siteInfo.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="focus-ring mt-7 inline-flex items-center justify-center gap-2 rounded-md bg-action px-4 py-3 text-sm font-black text-action-text transition hover:bg-ember hover:text-cream"
        >
          Enquire for Similar Work
          <ArrowRight className="size-4" aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}

type ShowcasePreviewLinkProps = {
  href?: string;
};

export function ShowcasePreviewLink({ href = "/showcase" }: ShowcasePreviewLinkProps) {
  return (
    <Link
      href={href}
      className="focus-ring inline-flex items-center justify-center gap-2 rounded-md bg-action px-5 py-3 text-sm font-black text-action-text shadow-premium transition hover:bg-ember hover:text-cream"
    >
      View Full Showcase
      <ArrowRight className="size-4" aria-hidden="true" />
    </Link>
  );
}
