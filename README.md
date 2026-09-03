# Shree Balaji Industries Website

Production-ready Next.js website for an Indian wooden boards company selling Plywood, Block Boards, Flush Doors and related panel products.

## Tech Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Lucide React icons
- Motion for subtle scroll reveal animations
- Local TypeScript product data
- Front-end only, ready for Vercel deployment

## Requirements

Use Node.js `20.9.0` or newer. The project was generated with the latest available framework packages and verified with a modern Node runtime.

## Local Setup

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

The scripts also support npm if dependencies are installed with npm:

```bash
npm install
npm run dev
```

## Verification

```bash
pnpm lint
pnpm build
```

## Folder Structure

```text
src/
  app/
    about/
    applications/
    contact/
    products/
      [slug]/
    quality/
    globals.css
    layout.tsx
    page.tsx
  components/
    product-card.tsx
    product-filter-list.tsx
    reveal.tsx
    section-heading.tsx
    site-footer.tsx
    site-header.tsx
    whatsapp-floating-button.tsx
  lib/
    applications.ts
    products.ts
    site.ts
```

## Pages

- Home
- Products listing with category filters
- Individual product detail pages
- Applications
- About
- Quality
- Contact

## Customization Notes

- Update company name, phone, email, address and WhatsApp URL in `src/lib/site.ts`.
- Update product categories, descriptions, badges, sizes and use cases in `src/lib/products.ts`.
- Update application recommendations in `src/lib/applications.ts`.
- Replace placeholder testimonials, address and map card once real client details are available.
- Add verified certifications, lab reports or grade-specific datasheets before making certification claims.

## Deployment

Deploy on Vercel as a standard Next.js project. Keep the build command as:

```bash
pnpm build
```

No backend or environment variables are required for the current front-end version.
