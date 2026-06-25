export const productCategories = [
  "Plywood",
  "Block Boards",
  "Flush Doors",
] as const;

export type ProductCategory = (typeof productCategories)[number];

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  badge: string;
  shortDescription: string;
  longDescription: string;
  bestUseCases: string[];
  features: string[];
  sizes: string[];
  whyChoose: string[];
  featured?: boolean;
};

export const products: Product[] = [
  {
    id: "ply-commercial",
    slug: "commercial-plywood",
    name: "Commercial Plywood",
    category: "Plywood",
    badge: "Interior Grade",
    shortDescription:
      "Reliable interior plywood for furniture, partitions and everyday home projects.",
    longDescription:
      "Commercial Plywood is a dependable choice for dry interior applications where surface finish, stable bonding and value all matter. It is suited for home furniture, shelves, partitions and routine carpentry work.",
    bestUseCases: ["Wardrobes", "Shelving", "Beds", "Partitions"],
    features: [
      "Smooth surface for laminate and veneer work",
      "Balanced strength for daily interior use",
      "Easy to cut, screw and finish on site",
      "Practical choice for value-focused projects",
    ],
    sizes: ["6 mm", "9 mm", "12 mm", "16 mm", "18 mm", "8 ft x 4 ft"],
    whyChoose: [
      "Best suited for dry areas inside homes and offices.",
      "A versatile plywood option for routine furniture work.",
      "Useful when the project needs finish and economy together.",
    ],
    featured: true,
  },
  {
    id: "ply-bwp",
    slug: "bwp-waterproof-plywood",
    name: "BWP Waterproof Plywood",
    category: "Plywood",
    badge: "Water Resistant",
    shortDescription:
      "Boiling-water-proof plywood for kitchens, utility areas and moisture-prone interiors.",
    longDescription:
      "BWP Waterproof Plywood is made for interior spaces that face higher moisture exposure, such as modular kitchens, sink zones and utility storage. It offers stronger bonding performance than standard interior grade plywood.",
    bestUseCases: ["Modular kitchens", "Utility cabinets", "Bathroom storage", "Sink zones"],
    features: [
      "Moisture resistant bonding",
      "Good screw holding for hardware-heavy cabinets",
      "Smooth face for premium laminates",
      "Suitable for demanding Indian kitchen usage",
    ],
    sizes: ["9 mm", "12 mm", "16 mm", "18 mm", "25 mm", "8 ft x 4 ft"],
    whyChoose: [
      "A smart upgrade for areas where spills and humidity are common.",
      "Designed for kitchens and hardworking interiors.",
      "Helps reduce maintenance concerns in wet-use zones.",
    ],
    featured: true,
  },
  {
    id: "ply-marine",
    slug: "marine-plywood",
    name: "Marine Plywood",
    category: "Plywood",
    badge: "Heavy Duty",
    shortDescription:
      "High-performance plywood for premium projects and demanding moisture exposure.",
    longDescription:
      "Marine Plywood is used where high bonding strength and moisture performance are important. It is suitable for premium furniture, exterior-adjacent usage and demanding interior projects that require extra durability.",
    bestUseCases: ["Premium kitchens", "Outdoor-adjacent cabinets", "Commercial fixtures", "High-use furniture"],
    features: [
      "High bonding strength",
      "Durable core construction",
      "Useful for premium site requirements",
      "Stable panel performance for demanding jobs",
    ],
    sizes: ["12 mm", "16 mm", "18 mm", "25 mm", "8 ft x 4 ft"],
    whyChoose: [
      "Selected for projects where durability is non-negotiable.",
      "Useful for premium interior and commercial applications.",
      "A stronger option for moisture-sensitive carpentry.",
    ],
  },
  {
    id: "ply-calibrated",
    slug: "calibrated-plywood",
    name: "Calibrated Plywood",
    category: "Plywood",
    badge: "Precision Finish",
    shortDescription:
      "Uniform-thickness plywood for modular furniture and machine-led interior work.",
    longDescription:
      "Calibrated Plywood is processed for improved thickness consistency, making it useful for modular interiors, CNC-led work and projects where accurate fittings and flush finishes are important.",
    bestUseCases: ["Modular furniture", "CNC cutting", "Premium wardrobes", "Office interiors"],
    features: [
      "Improved thickness consistency",
      "Cleaner fit for modular systems",
      "Supports premium laminate finish",
      "Helpful for accurate hardware alignment",
    ],
    sizes: ["9 mm", "12 mm", "16 mm", "18 mm", "8 ft x 4 ft"],
    whyChoose: [
      "Ideal when finish precision matters.",
      "Reduces adjustment effort during modular installation.",
      "Supports premium, factory-style carpentry output.",
    ],
  },
  {
    id: "ply-hardwood",
    slug: "hardwood-plywood",
    name: "Hardwood Plywood",
    category: "Plywood",
    badge: "Strong Core",
    shortDescription:
      "Sturdy plywood with a hardwood-led core for durable furniture and fixtures.",
    longDescription:
      "Hardwood Plywood is chosen for strength-oriented interior applications. It supports firm screw holding and is useful for beds, cabinets, counters and furniture that needs a dependable core.",
    bestUseCases: ["Beds", "Counters", "Cabinets", "Work tables"],
    features: [
      "Strong core composition",
      "Good screw holding capacity",
      "Durable for heavier furniture use",
      "Smooth surface for finishing materials",
    ],
    sizes: ["12 mm", "16 mm", "18 mm", "25 mm", "8 ft x 4 ft"],
    whyChoose: [
      "Useful for furniture that takes daily load.",
      "A practical option for long-lasting carpentry.",
      "Pairs well with laminates and hardware.",
    ],
  },
  {
    id: "ply-decorative",
    slug: "decorative-plywood",
    name: "Decorative Plywood",
    category: "Plywood",
    badge: "Premium Look",
    shortDescription:
      "Finish-friendly plywood for visible panels, furniture faces and feature interiors.",
    longDescription:
      "Decorative Plywood is suitable for visible surfaces, premium panels and furniture fronts. It is selected where the final look needs to feel refined while the panel remains practical for regular use.",
    bestUseCases: ["Wall panels", "Cabinet shutters", "Feature furniture", "Retail displays"],
    features: [
      "Finish-ready surface",
      "Good choice for visible applications",
      "Supports veneer, polish and laminate work",
      "Useful for premium interior styling",
    ],
    sizes: ["4 mm", "6 mm", "9 mm", "12 mm", "8 ft x 4 ft"],
    whyChoose: [
      "Works well where the panel is part of the visual design.",
      "Suitable for elegant residential and retail interiors.",
      "Helps create a warmer, more finished look.",
    ],
  },
  {
    id: "block-commercial",
    slug: "commercial-block-board",
    name: "Commercial Block Board",
    category: "Block Boards",
    badge: "Stable Panel",
    shortDescription:
      "Stable block board for long shutters, partitions and interior furniture.",
    longDescription:
      "Commercial Block Board is useful for applications that need lighter panels with better dimensional stability across longer spans. It is popular for shutters, partitions and furniture panels.",
    bestUseCases: ["Long shutters", "Partitions", "Shelves", "Table tops"],
    features: [
      "Lightweight compared with many solid alternatives",
      "Stable for long furniture panels",
      "Smooth face for laminates",
      "Easy handling at project sites",
    ],
    sizes: ["16 mm", "19 mm", "25 mm", "8 ft x 4 ft", "7 ft x 4 ft"],
    whyChoose: [
      "Useful for larger panels where stability matters.",
      "A practical choice for interior carpentry teams.",
      "Helps reduce panel bending in suitable applications.",
    ],
    featured: true,
  },
  {
    id: "block-bwp",
    slug: "bwp-block-board",
    name: "BWP Block Board",
    category: "Block Boards",
    badge: "Moisture Guard",
    shortDescription:
      "Moisture-resistant block board for shutters and furniture in demanding spaces.",
    longDescription:
      "BWP Block Board brings moisture-resistant bonding to a stable block board format. It is suited for kitchen shutters, utility storage and interior applications that need improved water resistance.",
    bestUseCases: ["Kitchen shutters", "Utility cabinets", "Long doors", "Moisture-prone furniture"],
    features: [
      "Moisture resistant bonding",
      "Stable for long panels",
      "Good finish compatibility",
      "Useful in busy Indian homes",
    ],
    sizes: ["16 mm", "19 mm", "25 mm", "8 ft x 4 ft"],
    whyChoose: [
      "A better choice for areas where humidity is expected.",
      "Maintains the stable behavior expected from block board.",
      "Useful for shutters that need everyday reliability.",
    ],
  },
  {
    id: "block-pine",
    slug: "pine-block-board",
    name: "Pine Block Board",
    category: "Block Boards",
    badge: "Lightweight",
    shortDescription:
      "Light and stable pine block board for wardrobes, partitions and panels.",
    longDescription:
      "Pine Block Board offers a lighter panel format for furniture applications where handling, shutter movement and stability matter. It is a good fit for wardrobes and long panels.",
    bestUseCases: ["Wardrobe shutters", "Partitions", "Shelving", "Interior panels"],
    features: [
      "Lightweight construction",
      "Stable for shutter applications",
      "Easy to work with on site",
      "Good surface for laminate finish",
    ],
    sizes: ["16 mm", "19 mm", "25 mm", "8 ft x 4 ft"],
    whyChoose: [
      "Good for applications that benefit from lower panel weight.",
      "Useful for wardrobes and shutters that need smooth movement.",
      "A practical balance of handling and stability.",
    ],
  },
  {
    id: "block-hardwood",
    slug: "hardwood-block-board",
    name: "Hardwood Block Board",
    category: "Block Boards",
    badge: "Heavy Use",
    shortDescription:
      "Stronger block board option for demanding furniture and commercial interiors.",
    longDescription:
      "Hardwood Block Board is selected for long panels and furniture applications where extra strength is useful. It supports robust furniture builds while retaining block board stability.",
    bestUseCases: ["Office furniture", "Counters", "Large shelves", "Commercial partitions"],
    features: [
      "Stronger core composition",
      "Stable for larger panels",
      "Good for commercial usage",
      "Supports durable furniture fittings",
    ],
    sizes: ["19 mm", "25 mm", "30 mm", "8 ft x 4 ft"],
    whyChoose: [
      "A fit for heavier-use commercial and residential furniture.",
      "Adds confidence where long panels face more load.",
      "Supports premium, sturdy installations.",
    ],
  },
  {
    id: "door-solid-core",
    slug: "solid-core-flush-door",
    name: "Solid Core Flush Door",
    category: "Flush Doors",
    badge: "Best Seller",
    shortDescription:
      "Strong flush door solution for homes, offices and everyday interior entryways.",
    longDescription:
      "Solid Core Flush Doors provide a clean, modern door surface with a dependable internal core. They are suitable for bedrooms, offices and everyday interior doors that need strength and a refined finish.",
    bestUseCases: ["Bedroom doors", "Office cabins", "Interior entryways", "Hotel rooms"],
    features: [
      "Solid core feel",
      "Clean flush surface",
      "Ready for laminate, veneer or paint",
      "Suitable for modern Indian interiors",
    ],
    sizes: ["30 mm", "32 mm", "35 mm", "38 mm", "Custom height placeholders"],
    whyChoose: [
      "A timeless option for clean interior door design.",
      "Works across residential and commercial projects.",
      "Pairs well with modern hardware and finishes.",
    ],
    featured: true,
  },
  {
    id: "door-bwp",
    slug: "bwp-flush-door",
    name: "BWP Flush Door",
    category: "Flush Doors",
    badge: "Water Resistant",
    shortDescription:
      "Moisture-resistant flush door for kitchens, utility zones and resilient interiors.",
    longDescription:
      "BWP Flush Doors are suited for door locations where higher humidity, cleaning water or seasonal moisture may be expected. They offer a practical upgrade over standard interior flush doors.",
    bestUseCases: ["Kitchen doors", "Utility doors", "Bathroom-adjacent areas", "Service rooms"],
    features: [
      "Improved moisture resistance",
      "Clean surface for finishing",
      "Stable door construction",
      "Practical for Indian household usage",
    ],
    sizes: ["30 mm", "32 mm", "35 mm", "38 mm", "Custom size placeholders"],
    whyChoose: [
      "Best for spaces where regular moisture exposure is possible.",
      "A stronger choice for utility and kitchen-adjacent doors.",
      "Keeps the clean look of flush doors with better resilience.",
    ],
  },
  {
    id: "door-decorative",
    slug: "decorative-flush-door",
    name: "Decorative Flush Door",
    category: "Flush Doors",
    badge: "Design Ready",
    shortDescription:
      "Elegant flush door base for laminates, grooves and premium interior finishes.",
    longDescription:
      "Decorative Flush Doors are selected when the door needs to become part of the design language. They are suited for laminate combinations, routed grooves, polish effects and feature door treatments.",
    bestUseCases: ["Living rooms", "Premium bedrooms", "Show apartments", "Office entrances"],
    features: [
      "Design-friendly surface",
      "Suitable for laminate and veneer treatments",
      "Clean contemporary look",
      "Flexible finishing possibilities",
    ],
    sizes: ["30 mm", "32 mm", "35 mm", "38 mm", "Custom design placeholders"],
    whyChoose: [
      "Ideal when doors need visual character.",
      "Supports premium interior styling without visual heaviness.",
      "Useful for architects and designers creating coordinated finishes.",
    ],
  },
  {
    id: "door-veneer",
    slug: "veneer-finish-flush-door",
    name: "Veneer Finish Flush Door",
    category: "Flush Doors",
    badge: "Natural Finish",
    shortDescription:
      "Flush door option for rich veneer, polish and warm wood-finish interiors.",
    longDescription:
      "Veneer Finish Flush Doors are chosen for warm, natural-looking interiors. They support veneer and polish work while offering the clean form factor of a modern flush door.",
    bestUseCases: ["Premium homes", "Hotels", "Executive cabins", "Feature doors"],
    features: [
      "Veneer-friendly face",
      "Warm natural finish potential",
      "Clean flush construction",
      "Premium appearance for visible doors",
    ],
    sizes: ["30 mm", "32 mm", "35 mm", "38 mm", "Custom veneer placeholders"],
    whyChoose: [
      "A good fit for refined wood-tone interiors.",
      "Helps create a premium door without bulky detailing.",
      "Works well in homes, hotels and client-facing spaces.",
    ],
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getRelatedProducts(product: Product) {
  return products
    .filter(
      (candidate) =>
        candidate.category === product.category && candidate.slug !== product.slug,
    )
    .slice(0, 3);
}

export const featuredProducts = products.filter((product) => product.featured);
