# Hustashana Intelligent Kitchen Designs LLP

Production-ready modular kitchen catalogue website for Hustashana Intelligent Kitchen Designs LLP.

The site serves two audiences:

- **B2B clients:** builders, architects, dealers, contractors, commercial counters, and project quotation enquiries.
- **Individual clients:** homeowners looking for modular kitchen planning, finishes, accessories, 3D previews, and installation support.

## What Is Included

- Premium responsive landing page built with Next.js App Router.
- Modern typography, catalogue sections, technical specification blocks, process flow, and finish direction board.
- Direct WhatsApp quotation flow with structured enquiry fields.
- SEO metadata, Open Graph image support, sitemap, robots, manifest, and JSON-LD business schema.
- Production build and source-level handover tests.

## Local Setup

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

## Production Build

```bash
npm run build
```

Run the handover verification:

```bash
npm test
```

## Deployment

This project is ready for Vercel or any platform that supports Next.js.

Recommended environment variable:

```text
NEXT_PUBLIC_SITE_URL=https://your-final-domain.com
```

Set this to the final client domain before production launch. It is used by canonical metadata, sitemap, robots, and structured business data.

## Main Files

- `app/page.tsx`: website content, sections, catalogue data, B2B and individual service copy.
- `app/globals.css`: complete visual design system, responsive layout, animations, and component styling.
- `app/QuoteForm.tsx`: WhatsApp enquiry form logic.
- `app/layout.tsx`: SEO metadata and social preview configuration.
- `app/sitemap.ts`: sitemap route.
- `app/robots.ts`: robots route.
- `app/manifest.ts`: web app manifest.
- `public/assets/`: kitchen visuals used across the site.
- `public/og-logo.png`: social sharing image with the Hustashana logo mark.

## Updating Business Details

Phone and WhatsApp number:

- Update `phone`, `cleanPhone`, and `whatsapp` in `app/page.tsx`.
- Update `phoneNumber` in `app/QuoteForm.tsx`.

Catalogue layouts:

- Edit the `layouts` array in `app/page.tsx`.

Technical specifications:

- Edit the `specifications` array in `app/page.tsx`.

B2B and individual service points:

- Edit the `b2b` and `individual` arrays in `app/page.tsx`.

## Handover Checklist

- `npm run build` passes.
- `npm test` passes.
- `NEXT_PUBLIC_SITE_URL` is set on production hosting.
- Contact number and WhatsApp number are confirmed by the client.
- Social preview image `public/og-logo.png` is approved.
- Final domain is connected and SSL is active.
