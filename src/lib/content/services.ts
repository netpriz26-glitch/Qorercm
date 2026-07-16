import {
  FileText,
  Workflow,
  IdCard,
  ShieldAlert,
  Search,
  BarChart3,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  icon: LucideIcon;
  bullets: string[];
};

export const services: Service[] = [
  {
    slug: "revenue-cycle-management",
    name: "Revenue Cycle Management",
    shortDescription:
      "Full-service, end-to-end RCM — one accountable team across the entire billing lifecycle.",
    description:
      "A single dedicated team owns your revenue cycle from eligibility verification through final payment, so nothing falls through the cracks between departments or vendors.",
    icon: Workflow,
    bullets: [
      "Eligibility verification and prior authorization tracking",
      "End-to-end claim lifecycle ownership",
      "Monthly performance reviews with your account manager",
      "Custom workflows for your specialty and payer mix",
    ],
  },
  {
    slug: "medical-billing-coding",
    name: "Medical Billing & Coding",
    shortDescription:
      "Accurate, compliant claim submission from certified coders who know your payer rules.",
    description:
      "Certified coders translate clinical documentation into clean, compliant claims the first time, reducing the rework that quietly drains most practices' revenue.",
    icon: FileText,
    bullets: [
      "AAPC-certified coding by specialty",
      "Charge capture audits",
      "Payer-specific edits applied pre-submission",
      "Clean-claim rate reporting",
    ],
  },
  {
    slug: "denial-management",
    name: "Denial Management & Appeals",
    shortDescription: "Root-cause denial analysis and aggressive, timely appeals.",
    description:
      "Denials are diagnosed at the root cause — not just resubmitted — and appealed within payer timely-filing windows by a team that tracks outcomes by denial reason.",
    icon: ShieldAlert,
    bullets: [
      "Denial-reason trend analysis",
      "Timely, evidence-backed appeals",
      "Payer escalation for repeat issues",
      "Prevention feedback loop into coding and intake",
    ],
  },
  {
    slug: "credentialing",
    name: "Provider Credentialing",
    shortDescription: "Payer enrollment and re-credentialing handled end-to-end.",
    description:
      "From initial payer enrollment to CAQH maintenance and re-credentialing, we keep every provider active on every panel — so credentialing gaps never delay reimbursement.",
    icon: IdCard,
    bullets: [
      "Initial payer enrollment",
      "CAQH profile maintenance",
      "Re-credentialing tracking and alerts",
      "Panel status monitoring",
    ],
  },
  {
    slug: "ar-recovery",
    name: "A/R & Old Claims Recovery",
    shortDescription: "A dedicated team works your aging accounts receivable.",
    description:
      "A dedicated recovery team works claims aging past 90, 120, and 180 days — the balances most practices have already written off — to recover revenue that's still collectible.",
    icon: Search,
    bullets: [
      "Aging A/R triage and prioritization",
      "Payer follow-up on stalled claims",
      "Old-claims recovery projects",
      "Write-off review before any balance is closed",
    ],
  },
  {
    slug: "healthcare-analytics",
    name: "Healthcare Analytics & Reporting",
    shortDescription: "Transparent monthly dashboards — no black box.",
    description:
      "Collections, denial rate, days in A/R, and payer performance in one transparent monthly report, so you always know exactly where your revenue cycle stands.",
    icon: BarChart3,
    bullets: [
      "Monthly collections and denial-rate dashboards",
      "Payer performance benchmarking",
      "Days-in-A/R and clean-claim-rate tracking",
      "Custom reporting on request",
    ],
  },
  {
    slug: "ai-automation",
    name: "AI-Powered Automation",
    shortDescription: "Automated eligibility checks and predictive denial-risk scoring.",
    description:
      "Automation handles the repetitive, error-prone steps — eligibility verification, claim scrubbing, denial-risk scoring — so your certified billing team spends its time on the claims that actually need judgment.",
    icon: Sparkles,
    bullets: [
      "Automated real-time eligibility verification",
      "AI-assisted claim scrubbing before submission",
      "Predictive denial-risk scoring",
      "Human review on every flagged claim — never fully automated decisions",
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
