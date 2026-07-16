export type CaseStudy = {
  slug: string;
  client: string;
  specialty: string;
  summary: string;
  challenge: string;
  approach: string;
  metrics: { label: string; before: string; after: string }[];
};

// Illustrative example case studies — replace with real, verified client
// results (with permission) before publishing.
export const caseStudies: CaseStudy[] = [
  {
    slug: "multi-specialty-clinic-denial-rate",
    client: "Multi-Specialty Clinic",
    specialty: "12-provider multi-specialty group",
    summary: "Cut denial rate from 18% to under 5% within two billing cycles.",
    challenge:
      "The clinic's in-house billing team was overwhelmed by a growing denial backlog, with claims aging past 120 days going largely unworked.",
    approach:
      "QoreRCM's team ran a root-cause denial audit, corrected upstream coding and eligibility issues, and stood up a dedicated appeals workflow.",
    metrics: [
      { label: "Denial rate", before: "18%", after: "4.8%" },
      { label: "Days in A/R", before: "62 days", after: "34 days" },
      { label: "Monthly collections", before: "Baseline", after: "+27%" },
    ],
  },
  {
    slug: "family-practice-ar-recovery",
    client: "Independent Family Practice",
    specialty: "Single-location family medicine",
    summary: "Recovered $180K in claims the practice had already written off.",
    challenge:
      "Years of billing-staff turnover had left a large backlog of aging, unworked claims that the practice had stopped actively pursuing.",
    approach:
      "A dedicated A/R recovery project triaged every claim over 90 days, re-filed correctable claims, and appealed denials still within payer timely-filing windows.",
    metrics: [
      { label: "Recovered revenue", before: "$0 (written off)", after: "$180,000" },
      { label: "Claims over 120 days", before: "340", after: "22" },
    ],
  },
  {
    slug: "outpatient-surgical-center-clean-claims",
    client: "Outpatient Surgical Center",
    specialty: "Ambulatory surgical center",
    summary: "Raised clean-claim rate to 98% while onboarding two new payers.",
    challenge:
      "Expanding into two new payer contracts introduced unfamiliar coding and authorization requirements, driving up first-pass claim errors.",
    approach:
      "Certified coders built payer-specific edit rules before go-live, and eligibility/authorization checks were automated ahead of every scheduled procedure.",
    metrics: [
      { label: "Clean-claim rate", before: "89%", after: "98%" },
      { label: "Avg. reimbursement time", before: "41 days", after: "27 days" },
    ],
  },
];
