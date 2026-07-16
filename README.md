# QoreRCM — Marketing Site

A full marketing site for QoreRCM LLC (medical billing / revenue cycle
management): Home, Services, About, Leadership, Case Studies, Resources,
Blog, and Contact. Built against two source documents:

- `../deep-research-report (14).md` — Quality Score alignment, Google Ads
  policy compliance, CRO best practices, tag/consent management, technical
  SEO. The Home page is still the single-CTA conversion page this describes.
- `~/Downloads/Premium_3D_UI_UX_Website_Redesign_Guidelines.md` — the
  glassmorphism/3D/motion design system and multi-page structure.

One substitution from that second doc: it specifies Vite + React Snap +
shadcn/ui. This app keeps Next.js instead (real SSR, and it doesn't throw
away the Server Actions the lead/contact forms and consent flow depend on)
and hand-builds shadcn-style primitives in `src/components/ui/` rather than
running the shadcn CLI. "AI-generated illustrations" are real interactive
3D/WebGL (React Three Fiber + Drei, see `src/components/three/`) and CSS 3D
transforms instead of generated raster images — there's no image-generation
tool in this stack.

**All business content (name, address, phone, email, stats, testimonials,
compliance claims) is placeholder data.** Replace every value in
`src/lib/site-config.ts` — and the stats/testimonials in
`src/components/Stats.tsx` and `src/components/Testimonials.tsx` — with real,
verifiable information before this goes live. Making unverifiable or
exaggerated claims (e.g. fake certifications) risks both Google Ads policy
suspension and legal exposure for a healthcare-adjacent business.

## Getting started

```bash
npm install
cp .env.local.example .env.local   # then fill in real values
npm run dev
```

## What's implemented

- **Next.js App Router**, TypeScript, Tailwind v4 — SSR by default for fast,
  crawlable pages, across all 8 top-level routes plus `/blog/[slug]`.
- **Design system** (`src/app/globals.css`, `src/components/ui/`) — glass /
  glass-light utilities matching the spec's exact CSS, a `brand`/`ink`/
  `accent` color system, gradient/magnetic/ripple buttons
  (`ui/Button.tsx`), tilt-on-hover cards (`ui/TiltCard.tsx`), a CSS-3D icon
  tile for card grids (`ui/Icon3DTile.tsx`).
- **Motion** (`src/components/motion/`) — Framer Motion `Reveal` (fade
  up/left/right/scale, viewport-triggered), `StaggerGroup`, and
  `AnimatedCounter`, all with a `prefers-reduced-motion` fallback baked in.
- **3D** (`src/components/three/`) — React Three Fiber + Drei scenes
  (floating glass panels for the hero, an orbiting node network for
  About/Contact), lazy-loaded via `next/dynamic({ ssr: false })` so
  three.js never ships to users with reduced motion and never blocks the
  initial page render. Service/Resource/Blog/Case-Study card grids use the
  cheaper CSS-3D `Icon3DTile` instead of stacking multiple WebGL canvases.
- **Lead form** (`src/components/LeadForm.tsx`) — 4 fields, a Server Action
  (`src/app/actions.ts`) with Zod validation, honeypot spam field, and
  progressive enhancement (works without client JS). Lives in the Home
  page's hero (as a dashboard illustration) and bottom CTA (`#audit-form`,
  the actual form) per the CRO source doc.
- **Contact form** (`src/components/ContactForm.tsx`) — separate Server
  Action, supports `?resource=<slug>` prefill from the Resources page.
- **Thank-you page** (`/thank-you`, noindexed) — fires a `generate_lead`
  data-layer event with the submitted email/phone for Google Ads Enhanced
  Conversions, per Google's documented data-layer pattern. Copy adapts to
  whichever form (audit or contact) sent the visitor there.
- **Consent Mode v2** — `ConsentDefaults` sets everything to `denied` before
  GTM loads; `CookieConsentBanner` updates consent on Accept/Decline and
  remembers the choice in `localStorage`.
- **Structured data** — Organization (site-wide), Service and FAQPage (home
  page), BlogPosting (posts), BreadcrumbList (every sub-page) — see
  `src/lib/schema.ts`.
- **SEO file conventions** — `sitemap.ts` (all routes + blog posts),
  `robots.ts`, per-page canonical URLs and Open Graph metadata.
- **Legal pages** — Privacy Policy, Terms & Conditions, Cookie Policy, all
  linked in the footer, all flagged as templates needing legal review.
- **Content data** (`src/lib/content/`) — services, leadership, case
  studies, blog posts, and resources each live in one typed file, so adding
  a new one is a data change, not a new component.

## Analytics & tag configuration

Everything routes through one GTM container (`NEXT_PUBLIC_GTM_ID`) instead of
hardcoding individual pixels, per the source report's recommendation. Inside
Google Tag Manager, configure:

| Tag | Trigger |
| --- | --- |
| GA4 Configuration | All Pages |
| Google Ads Conversion Tracking | Custom event `generate_lead` |
| Google Ads "User-provided data" | Same trigger — map `user_data.email` / `user_data.phone_number` from the data layer for Enhanced Conversions |
| Meta Pixel (base + Lead event) | All Pages / `generate_lead` |
| LinkedIn Insight Tag | All Pages |
| Microsoft UET | All Pages / `generate_lead` |

Consent changes push a `consent_update` event to the data layer as well, if
you want to gate any of the above behind a consent trigger in addition to
Consent Mode itself.

## Lead delivery

`src/app/actions.ts` posts each validated submission as JSON to
`LEAD_WEBHOOK_URL` if set (a Zapier/Make catch hook, HubSpot Forms API, or any
CRM's inbound webhook all work). Without it, submissions are only
`console.info`-logged server-side — set this before launch or leads will be
lost.

## Pre-launch checklist

- [ ] Replace all placeholder content: `site-config.ts`, `Stats.tsx`,
      `Testimonials.tsx`, `TrustBar.tsx`, and everything in
      `src/lib/content/` (services copy, leadership bios, case study
      results, blog posts, resource guides) with real, verifiable
      information.
- [ ] Resource guides (`src/lib/content/resources.ts`) currently route to
      the contact form, not a real download — wire up actual gated PDFs (or
      keep the contact-request flow) intentionally, not by default.
- [ ] Replace `src/app/favicon.ico` and the "Q" text logomark in `Header.tsx`
      / `Footer.tsx` with a real logo.
- [ ] Set `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_GTM_ID`, `LEAD_WEBHOOK_URL`.
- [ ] Configure the GTM tags/triggers listed above; verify with Tag Assistant
      and Meta Pixel Helper.
- [ ] Validate structured data with Google's Rich Results Test.
- [ ] Have Privacy Policy / Terms & Conditions / Cookie Policy reviewed by
      counsel, especially HIPAA business-associate language.
- [ ] Run `npm run build` and a Lighthouse audit; confirm Core Web Vitals
      (LCP < 2.5s, INP < 200ms, CLS < 0.1).
- [ ] Verify the domain in Google Search Console.
- [ ] Confirm the ad's final URL, display URL, and landing page headline all
      message-match (Quality Score / policy requirement).
