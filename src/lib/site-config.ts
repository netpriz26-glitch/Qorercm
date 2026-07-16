// Placeholder business details — replace every value before launch.
export const siteConfig = {
  name: "QoreRCM",
  legalName: "QoreRCM LLC",
  tagline: "Revenue Cycle Management for Healthcare Practices",
  description:
    "QoreRCM helps healthcare practices reduce claim denials, recover lost revenue, and get paid faster with a dedicated U.S.-based medical billing team.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",

  offer: {
    headline: "Stop Losing Revenue to Billing Errors",
    subheadline:
      "Get a free, no-obligation Revenue Cycle Audit and see exactly where your practice is leaving money on the table — usually within 48 hours.",
    ctaLabel: "Get My Free RCM Audit",
    formTitle: "Get Your Free Revenue Cycle Audit",
    formSubtitle:
      "Tell us a bit about your practice. A senior RCM consultant will follow up within one business day — no cost, no obligation.",
  },

  contact: {
    phone: "+1 (555) 010-1234",
    phoneHref: "+15550101234",
    email: "hello@qorercm.com",
    address: {
      line1: "1201 Medical Center Drive, Suite 400",
      city: "Dallas",
      state: "TX",
      zip: "75201",
      country: "USA",
    },
    // Approximate downtown Dallas coordinates — replace with the real
    // office location before launch.
    geo: {
      latitude: 32.7767,
      longitude: -96.797,
    },
    openingHours: ["Mo-Fr 08:00-18:00"],
  },

  social: {
    linkedin: "https://www.linkedin.com/company/qorercm",
    facebook: "https://www.facebook.com/qorercm",
    twitter: "https://x.com/qorercm",
  },

  legal: {
    entityType: "LLC",
    jurisdiction: "Texas, USA",
  },
} as const;

export type SiteConfig = typeof siteConfig;
