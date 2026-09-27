# Rovanta

**Copper chemistry, presented for business buyers.** The website for Rovanta, a specialty chemical manufacturer in India that makes copper compounds. Every product page carries its formula, CAS number and specifications, and a quote request is one click away.

**Live:** [rovantachem.com](https://www.rovantachem.com)

## What's in it

- **Eight product lines:** copper oxychloride, copper oxide, copper sulphate, copper compounds, specialty chemicals, agrochemical and pharmaceutical intermediates, and custom manufacturing. Each has its own page, generated from typed content.
- **Quote requests** from any product. The form prefills an email to the sales team with the product, quantity, destination and request type, and a WhatsApp button sits on every page.
- **The company story:** about, leadership, manufacturing, quality, research and development, sustainability, industries served, careers and downloads.
- **Built to be found.** Per-page metadata, Organization and Product structured data (JSON-LD), a sitemap and robots rules.
- **A design system** with a copper-and-verdigris palette taken from the products themselves.
- **Honest navigation.** Pages that need a backend (a customer portal and an admin area) stay in the repo but are hidden: `isRouteHidden` makes them 404 and drops them from the header, footer and sitemap until they're built.

## Stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · Motion · Vercel

## Run it locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
npm run lint
```

## Where things live

- `src/content/site-content.ts` all copy and product data, plus the list of hidden routes
- `src/lib/site.ts` company details and shared site settings
- `src/lib/metadata.ts` page metadata helpers
- `src/components` page sections, the quote form and structured data
- `src/app` one folder per route

Built by [Sujan Rokad](https://sujanrokad.com).
