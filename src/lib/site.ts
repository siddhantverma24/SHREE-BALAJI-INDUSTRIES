import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  Building2,
  Clock,
  Factory,
  Handshake,
  Leaf,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Truck,
} from "lucide-react";

export const siteInfo = {
  name: "Shree Balaji Industries",
  tagline: "Premium wooden boards for stronger Indian interiors.",
  contactPerson: "Ronit Jain",
  phone: "+91 70656 17116",
  phoneHref: "tel:+917065617116",
  email: "sales@shreebalajiindustries.in",
  address: "28\u00b046'12.3\"N 76\u00b048'39.1\"E",
  coordinates: "28\u00b046'12.3\"N 76\u00b048'39.1\"E",
  googleMapsUrl:
    "https://www.google.com/maps/place/28%C2%B046'12.3%22N+76%C2%B048'39.1%22E/@28.7636639,76.8106734,14.55z/data=!4m4!3m3!8m2!3d28.770071!4d76.8108597?hl=en&entry=ttu&g_ep=EgoyMDI2MDYyMy4wIKXMDSoASAFQAw%3D%3D",
  whatsapp:
    "https://wa.me/917065617116?text=Hi%2C%20I%20want%20to%20enquire%20about%20your%20wooden%20boards",
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Applications", href: "/applications" },
  { label: "Showcase", href: "/showcase" },
  { label: "About", href: "/about" },
  { label: "Quality", href: "/quality" },
  { label: "Contact", href: "/contact" },
] as const;

export type IconPoint = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const whyChooseUs: IconPoint[] = [
  {
    title: "Made for Indian weather",
    description:
      "Panels selected for heat, seasonal moisture and everyday site conditions across Indian homes.",
    icon: Leaf,
  },
  {
    title: "Strong bonding and long life",
    description:
      "Practical board choices for furniture, doors and interiors that need dependable hold.",
    icon: ShieldCheck,
  },
  {
    title: "Smooth interior finish",
    description:
      "Consistent surfaces that support laminates, veneers, paints and premium fittings.",
    icon: Sparkles,
  },
  {
    title: "Dealer and bulk support",
    description:
      "Responsive supply conversations for carpenters, contractors, designers and dealers.",
    icon: Truck,
  },
  {
    title: "Quality checked panels",
    description:
      "Each batch is reviewed for finish, strength, calibration and application readiness.",
    icon: BadgeCheck,
  },
];

export const contactCards = [
  {
    title: "Contact person",
    value: siteInfo.contactPerson,
    href: siteInfo.whatsapp,
    icon: Handshake,
  },
  {
    title: "Call Ronit Jain",
    value: siteInfo.phone,
    href: siteInfo.phoneHref,
    icon: Phone,
  },
  {
    title: "Email",
    value: siteInfo.email,
    href: `mailto:${siteInfo.email}`,
    icon: Mail,
  },
  {
    title: "Factory desk",
    value: "Mon-Sat, 10 AM to 7 PM",
    href: "/contact",
    icon: Clock,
  },
  {
    title: "Location",
    value: siteInfo.coordinates,
    href: siteInfo.googleMapsUrl,
    icon: MapPin,
  },
];

export const aboutHighlights = [
  {
    title: "Manufacturer and supplier mindset",
    description:
      "Built for practical Indian projects where availability, finish and predictable performance matter.",
    icon: Factory,
  },
  {
    title: "Trade friendly",
    description:
      "Clear product guidance for carpenters, contractors, architects, interior designers and dealers.",
    icon: Handshake,
  },
  {
    title: "Project ready range",
    description:
      "Plywood, block boards, flush doors and decorative panel choices for homes and commercial sites.",
    icon: Building2,
  },
];
