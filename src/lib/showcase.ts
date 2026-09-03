export type ShowcasePhotoItem = {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string | null;
  imageAlt: string;
  tone: "teak" | "walnut" | "sandal" | "forest";
};

export type ShowcaseVideoItem = {
  id: string;
  title: string;
  description: string;
  duration: string;
  video: string | null;
  poster: string | null;
  tone: "teak" | "walnut" | "sandal" | "forest";
};

export type FeaturedProjectItem = {
  id: string;
  title: string;
  projectType: string;
  description: string;
  recommendedProducts: string[];
  image: string | null;
  imageAlt: string;
  tone: "teak" | "walnut" | "sandal" | "forest";
};

export const photoShowcaseItems: ShowcasePhotoItem[] = [
  {
    id: "modular-kitchen-work",
    title: "Modular kitchen work",
    category: "Kitchen",
    description:
      "Moisture-ready boards planned for sink zones, shutters and daily Indian cooking conditions.",
    image: null,
    imageAlt: "Modular kitchen completed with premium plywood boards",
    tone: "teak",
  },
  {
    id: "wardrobe-interiors",
    title: "Wardrobe interiors",
    category: "Wardrobe",
    description:
      "Smooth calibrated panels and stable shutters for bedroom storage and loft systems.",
    image: null,
    imageAlt: "Wardrobe interior made with wooden boards",
    tone: "walnut",
  },
  {
    id: "flush-door-installation",
    title: "Flush door installation",
    category: "Doors",
    description:
      "Clean modern doors prepared for laminate, veneer, paint and premium hardware.",
    image: null,
    imageAlt: "Flush door installation at an interior project site",
    tone: "sandal",
  },
  {
    id: "plywood-sheets",
    title: "Plywood sheets",
    category: "Plywood",
    description:
      "Finished sheets stacked for furniture, cabinets, partitions and site dispatch.",
    image: null,
    imageAlt: "Premium plywood sheets stacked at the factory",
    tone: "teak",
  },
  {
    id: "block-board-close-up",
    title: "Block board close-up",
    category: "Block board",
    description:
      "A closer look at stable long-panel board construction for shutters and furniture spans.",
    image: null,
    imageAlt: "Close-up of block board texture and core",
    tone: "walnut",
  },
  {
    id: "factory-process-shot",
    title: "Factory/process shot",
    category: "Process",
    description:
      "Behind-the-scenes board handling, checking and production workflow moments.",
    image: null,
    imageAlt: "Factory process shot for wooden board production",
    tone: "forest",
  },
  {
    id: "office-interiors",
    title: "Office interiors",
    category: "Commercial",
    description:
      "Durable panels for cabins, partitions, display counters and high-use office spaces.",
    image: null,
    imageAlt: "Commercial office interior finished with board products",
    tone: "sandal",
  },
  {
    id: "wall-panelling",
    title: "Wall panelling",
    category: "Decor",
    description:
      "Warm panel surfaces for feature walls, reception zones and refined interiors.",
    image: null,
    imageAlt: "Wood finish wall panelling in an interior space",
    tone: "teak",
  },
];

export const videoShowcaseItems: ShowcaseVideoItem[] = [
  {
    id: "board-manufacturing-process",
    title: "Board manufacturing process",
    description:
      "A short look at how board layers, bonding and finishing can be demonstrated.",
    duration: "0:30",
    video: null,
    poster: null,
    tone: "walnut",
  },
  {
    id: "plywood-finishing",
    title: "Plywood finishing",
    description:
      "Surface preparation, finishing checks and dispatch-ready sheet presentation.",
    duration: "0:30",
    video: null,
    poster: null,
    tone: "teak",
  },
  {
    id: "flush-door-making",
    title: "Flush door making",
    description:
      "A simple demo slot for door core, pressing, finishing and edge preparation.",
    duration: "0:30",
    video: null,
    poster: null,
    tone: "sandal",
  },
  {
    id: "site-installation",
    title: "Site installation",
    description:
      "Quick installation clips from kitchens, wardrobes, doors and commercial sites.",
    duration: "0:30",
    video: null,
    poster: null,
    tone: "forest",
  },
  {
    id: "interior-application-walkthrough",
    title: "Interior application walkthrough",
    description:
      "Before-after or walkthrough videos for finished interiors using the board range.",
    duration: "0:30",
    video: null,
    poster: null,
    tone: "teak",
  },
  {
    id: "product-strength-demo-test",
    title: "Product strength/demo test",
    description:
      "Short demonstration clips for strength, screw holding and moisture-use confidence.",
    duration: "0:30",
    video: null,
    poster: null,
    tone: "walnut",
  },
];

export const featuredProjectItems: FeaturedProjectItem[] = [
  {
    id: "residential-interiors",
    title: "Residential Interiors",
    projectType: "Homes and apartments",
    description:
      "Kitchen, wardrobe, wall panel and flush-door recommendations for premium residential work.",
    recommendedProducts: [
      "BWP Waterproof Plywood",
      "Calibrated Plywood",
      "Decorative Flush Door",
    ],
    image: null,
    imageAlt: "Residential interior project using wooden boards",
    tone: "teak",
  },
  {
    id: "commercial-office-fitout",
    title: "Commercial Office Fitout",
    projectType: "Office and retail",
    description:
      "Durable panel choices for cabins, counters, partitions and high-traffic interior fixtures.",
    recommendedProducts: [
      "Hardwood Block Board",
      "Marine Plywood",
      "Solid Core Flush Door",
    ],
    image: null,
    imageAlt: "Commercial office fitout with board products",
    tone: "walnut",
  },
  {
    id: "dealer-display-setup",
    title: "Dealer Display Setup",
    projectType: "Showroom display",
    description:
      "A premium product display setup for dealers to show board finishes, grades and applications.",
    recommendedProducts: [
      "Decorative Plywood",
      "Commercial Block Board",
      "Veneer Finish Flush Door",
    ],
    image: null,
    imageAlt: "Dealer display setup for wooden boards",
    tone: "forest",
  },
];
