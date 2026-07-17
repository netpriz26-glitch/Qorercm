import {
  FileText,
  ClipboardList,
  BookOpen,
  LayoutTemplate,
  ShieldCheck,
  Video,
  BarChart3,
  TrendingUp,
  Workflow,
  Gauge,
  type LucideIcon,
} from "lucide-react";

export type Resource = {
  slug: string;
  title: string;
  description: string;
  format: string;
  icon: LucideIcon;
};

// These guides aren't hosted as downloadable files yet — each links to the
// contact form so a real request goes to a real inbox instead of a dead
// link. Wire up actual gated PDFs (and point `href` at them) when ready.
export const resources: Resource[] = [
  {
    slug: "denial-prevention-checklist",
    title: "The Denial Prevention Checklist",
    description:
      "A pre-submission checklist covering the five most common, avoidable causes of claim denials.",
    format: "Checklist",
    icon: ClipboardList,
  },
  {
    slug: "rcm-vendor-evaluation-guide",
    title: "How to Evaluate an RCM Partner",
    description:
      "The questions to ask any medical billing vendor before signing — pricing structure, reporting cadence, and data ownership.",
    format: "Guide",
    icon: BookOpen,
  },
  {
    slug: "credentialing-timeline-guide",
    title: "Provider Credentialing Timelines by Payer Type",
    description:
      "What to expect, payer by payer, when enrolling a new provider — and how to avoid reimbursement gaps during the wait.",
    format: "Guide",
    icon: FileText,
  },
  {
    slug: "behavioral-health-billing-audit-checklist",
    title: "Behavioral Health Billing Audit Checklist",
    description:
      "A comprehensive checklist to audit your current billing workflows and identify revenue leakage.",
    format: "Checklist",
    icon: ClipboardList,
  },
  {
    slug: "credentialing-checklist",
    title: "Credentialing Checklist",
    description:
      "Step-by-step guide to gathering required documentation for multi-payer behavioral health credentialing.",
    format: "Checklist",
    icon: ClipboardList,
  },
  {
    slug: "revenue-health-scorecard",
    title: "Revenue Health Scorecard",
    description:
      "Evaluate your practice's financial health against industry benchmarks for behavioral health.",
    format: "Template",
    icon: Gauge,
  },
  {
    slug: "denial-management-workflow",
    title: "Denial Management Workflow",
    description:
      "Standard operating procedure for identifying, appealing, and preventing common mental health claim denials.",
    format: "Guide",
    icon: Workflow,
  },
  {
    slug: "insurance-verification-sop",
    title: "Insurance Verification SOP",
    description:
      "Standardized template for front-desk staff to verify behavioral health benefits accurately.",
    format: "Template",
    icon: LayoutTemplate,
  },
  {
    slug: "hipaa-compliance-checklist",
    title: "HIPAA Compliance Checklist",
    description:
      "Ensure your billing and documentation processes meet strict federal privacy standards.",
    format: "Checklist",
    icon: ShieldCheck,
  },
  {
    slug: "telehealth-billing-guide",
    title: "Telehealth Billing Guide",
    description:
      "Navigate place-of-service codes and modifiers for virtual behavioral health sessions.",
    format: "Guide",
    icon: Video,
  },
  {
    slug: "kpi-dashboard-template",
    title: "KPI Dashboard Template",
    description:
      "Track the metrics that matter most to your practice's financial sustainability.",
    format: "Template",
    icon: BarChart3,
  },
  {
    slug: "practice-growth-assessment",
    title: "Practice Growth Assessment",
    description:
      "Strategic framework for scaling your behavioral health practice securely.",
    format: "Whitepaper",
    icon: TrendingUp,
  },
  {
    slug: "revenue-optimization-guide",
    title: "Revenue Optimization Guide",
    description:
      "Advanced strategies for maximizing reimbursement in complex payer environments.",
    format: "Guide",
    icon: BookOpen,
  },
];
