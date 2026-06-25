import type { ProductCategory } from "@/lib/products";

export type Application = {
  title: string;
  description: string;
  suitableProducts: string[];
  categories: ProductCategory[];
};

export const applications: Application[] = [
  {
    title: "Kitchen interiors",
    description:
      "Moisture-ready boards for modular kitchens, sink cabinets, utility storage and hardworking Indian cooking spaces.",
    suitableProducts: [
      "BWP Waterproof Plywood",
      "Marine Plywood",
      "BWP Block Board",
      "BWP Flush Door",
    ],
    categories: ["Plywood", "Block Boards", "Flush Doors"],
  },
  {
    title: "Wardrobes",
    description:
      "Stable panels for shutters, internal shelves, lofts and premium wardrobe faces.",
    suitableProducts: [
      "Commercial Plywood",
      "Calibrated Plywood",
      "Pine Block Board",
      "Decorative Plywood",
    ],
    categories: ["Plywood", "Block Boards"],
  },
  {
    title: "Doors",
    description:
      "Clean flush door choices for bedrooms, offices, kitchens and premium entry points.",
    suitableProducts: [
      "Solid Core Flush Door",
      "BWP Flush Door",
      "Decorative Flush Door",
      "Veneer Finish Flush Door",
    ],
    categories: ["Flush Doors"],
  },
  {
    title: "Furniture",
    description:
      "Durable board options for beds, tables, counters, shelving, cabinets and everyday furniture.",
    suitableProducts: [
      "Hardwood Plywood",
      "Commercial Plywood",
      "Commercial Block Board",
      "Hardwood Block Board",
    ],
    categories: ["Plywood", "Block Boards"],
  },
  {
    title: "Commercial spaces",
    description:
      "Practical panels for offices, retail displays, counters, cabins and high-use fixtures.",
    suitableProducts: [
      "Hardwood Block Board",
      "Marine Plywood",
      "Calibrated Plywood",
      "Solid Core Flush Door",
    ],
    categories: ["Plywood", "Block Boards", "Flush Doors"],
  },
  {
    title: "Wall panels",
    description:
      "Finish-led boards for decorative panelling, feature walls and warm interior surfaces.",
    suitableProducts: [
      "Decorative Plywood",
      "Veneer Finish Flush Door",
      "Calibrated Plywood",
      "Commercial Plywood",
    ],
    categories: ["Plywood", "Flush Doors"],
  },
];
