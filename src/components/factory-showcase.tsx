"use client";

import { useRef, useState } from "react";
import styles from "@/components/factory-showcase.module.css";

type FactoryVideo = {
  id: string;
  src: string;
  label: string;
  title: string;
  featured: boolean;
};

type FactoryProduct = {
  src: string;
  alt: string;
};

const videos: FactoryVideo[] = [
  {
    id: "factory-1",
    src: "/factory/videos/factory-1.mp4",
    label: "Production Line",
    title: "Manufacturing Process",
    featured: true,
  },
  {
    id: "factory-2",
    src: "/factory/videos/factory-2.mp4",
    label: "QA & Standards",
    title: "Quality Check",
    featured: false,
  },
  {
    id: "factory-3",
    src: "/factory/videos/factory-3.mp4",
    label: "Equipment",
    title: "Machinery Overview",
    featured: false,
  },
  {
    id: "factory-4",
    src: "/factory/videos/factory-4.mp4",
    label: "Site Tour",
    title: "Factory Walkthrough",
    featured: false,
  },
];

const products: FactoryProduct[] = [
  {
    src: "/factory/products/product-1.jpg",
    alt: "Product 1",
  },
  {
    src: "/factory/products/product-2.jpg",
    alt: "Product 2",
  },
  {
    src: "/factory/products/product-3.jpg",
    alt: "Product 3",
  },
  {
    src: "/factory/products/product-4.jpg",
    alt: "Product 4",
  },
  {
    src: "/factory/products/product-5.jpg",
    alt: "Product 5",
  },
  {
    src: "/factory/products/product-6.jpg",
    alt: "Product 6",
  },
];

export function FactoryShowcase() {
  const [failedVideos, setFailedVideos] = useState<Set<string>>(new Set());
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());
  const [pausedVideos, setPausedVideos] = useState<Record<string, boolean>>({});
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  function markVideoFailed(src: string) {
    setFailedVideos((current) => new Set(current).add(src));
  }

  function toggleVideo(videoId: string, element: HTMLVideoElement | null) {
    if (!element) {
      return;
    }

    if (element.paused) {
      void element.play();
      setPausedVideos((previous) => ({ ...previous, [videoId]: false }));
    } else {
      element.pause();
      setPausedVideos((previous) => ({ ...previous, [videoId]: true }));
    }
  }

  function markImageFailed(src: string) {
    setFailedImages((current) => new Set(current).add(src));
  }

  return (
    <div className={styles.showcasePage}>
      <section className={styles.showcaseSection} id="factory-insights">
        <div className={styles.container}>
          <SectionHeader
            eyebrow="Behind the scenes"
            title="Factory Insights"
            sub="Explore our production process, machinery, and quality standards."
          />

          <div className={styles.videoGrid}>
            {videos.map((video) => {
              const missingVideo = failedVideos.has(video.src);

              return (
                <div
                  key={video.id}
                  className={`${styles.videoCard} ${
                    video.featured ? styles.videoCardFeatured : ""
                  }`}
                >
                  {missingVideo ? (
                    <VideoPlaceholder />
                  ) : (
                    <video
                      ref={(element) => {
                        videoRefs.current[video.id] = element;
                      }}
                      src={video.src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      onPlay={() =>
                        setPausedVideos((previous) => ({
                          ...previous,
                          [video.id]: false,
                        }))
                      }
                      onPause={() =>
                        setPausedVideos((previous) => ({
                          ...previous,
                          [video.id]: true,
                        }))
                      }
                      onError={() => markVideoFailed(video.src)}
                    />
                  )}
                  {!missingVideo ? (
                    <button
                      type="button"
                      className={styles.videoToggle}
                      aria-label={
                        pausedVideos[video.id] ? "Play video" : "Pause video"
                      }
                      onClick={() =>
                        toggleVideo(video.id, videoRefs.current[video.id])
                      }
                    >
                      {pausedVideos[video.id] ? "Play" : "Pause"}
                    </button>
                  ) : null}
                  <CardOverlay label={video.label} title={video.title} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className={styles.sectionDivider} aria-hidden="true" />

      <section className={styles.showcaseSection} id="our-products">
        <div className={styles.container}>
          <SectionHeader
            eyebrow="What we make"
            title="Our Products"
            sub="A closer look at the products crafted with precision."
          />

          <div className={styles.productGrid}>
            {products.map((product) => {
              const missingImage = failedImages.has(product.src);

              return (
                <article className={styles.productCard} key={product.src}>
                  <div className={styles.productImageWrap}>
                    {missingImage ? (
                      <ProductPlaceholder />
                    ) : (
                      <img
                        src={product.src}
                        alt={product.alt}
                        loading="lazy"
                        onError={() => markImageFailed(product.src)}
                      />
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: string;
  sub: string;
}) {
  return (
    <div className={styles.sectionHeader}>
      <span className={styles.sectionEyebrow}>{eyebrow}</span>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <p className={styles.sectionSub}>{sub}</p>
    </div>
  );
}

function CardOverlay({ label, title }: { label: string; title: string }) {
  return (
    <div className={styles.cardOverlay}>
      <span className={styles.cardLabel}>{label}</span>
      <h3 className={styles.cardTitle}>{title}</h3>
    </div>
  );
}

function VideoPlaceholder() {
  return (
    <div className={styles.videoPlaceholder}>
      <span>Video asset pending</span>
    </div>
  );
}

function ProductPlaceholder() {
  return <div className={styles.productPlaceholder} aria-hidden="true" />;
}
