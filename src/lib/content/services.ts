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

export type DashboardStat = { value: string; label: string };
export type WorkflowStep = { number: string; title: string; description: string };

export type Service = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  icon: LucideIcon;
  bullets: string[];
  dashboard: { stats: DashboardStat[]; footerItems?: string[] };
  workflow: WorkflowStep[];
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
    dashboard: {
      stats: [
        { value: "1", label: "Dedicated team, zero handoffs" },
        { value: "100%", label: "Billing lifecycle ownership" },
      ],
      footerItems: ["Eligibility verified in real time", "Monthly account review scheduled"],
    },
    workflow: [
      {
        number: "01",
        title: "Audit & Map",
        description: "We audit your current billing lifecycle and map every handoff point.",
      },
      {
        number: "02",
        title: "Stand Up the Team",
        description:
          "A dedicated team is assigned and onboarded to your specialty and payer mix.",
      },
      {
        number: "03",
        title: "Manage & Report",
        description:
          "Ongoing management with transparent monthly reporting on every metric that matters.",
      },
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
    dashboard: {
      stats: [
        { value: "99.2%", label: "Coding accuracy" },
        { value: "<24h", label: "Avg. turnaround time" },
      ],
      footerItems: ["Claim #55210 — coded & queued", "Charge audit complete"],
    },
    workflow: [
      {
        number: "01",
        title: "Documentation Review",
        description: "Certified coders review clinical documentation against payer-specific rules.",
      },
      {
        number: "02",
        title: "Clean Claim Submission",
        description: "Claims are scrubbed and submitted right the first time.",
      },
      {
        number: "03",
        title: "Accuracy Reporting",
        description: "Clean-claim rate and coding accuracy tracked and reported monthly.",
      },
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
    dashboard: {
      stats: [
        { value: "<5%", label: "Denial rate on managed claims" },
        { value: "92%", label: "Appeal win rate" },
      ],
      footerItems: ["Denial #4471 — root cause found", "Appeal #4472 — submitted"],
    },
    workflow: [
      {
        number: "01",
        title: "Root-Cause Analysis",
        description: "Every denial is diagnosed for its true cause, not just resubmitted.",
      },
      {
        number: "02",
        title: "Timely Appeals",
        description: "Evidence-backed appeals filed within payer timely-filing windows.",
      },
      {
        number: "03",
        title: "Prevention Loop",
        description: "Denial trends feed back into coding and intake to stop repeat denials.",
      },
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
    dashboard: {
      stats: [
        { value: "45d", label: "Avg. enrollment time" },
        { value: "100%", label: "Panels actively monitored" },
      ],
      footerItems: ["Dr. Patel — re-credentialing due in 30d", "CAQH profile — up to date"],
    },
    workflow: [
      {
        number: "01",
        title: "Initial Enrollment",
        description: "Provider applications submitted and tracked across every payer.",
      },
      {
        number: "02",
        title: "CAQH Maintenance",
        description: "Profiles kept current so applications never stall on missing data.",
      },
      {
        number: "03",
        title: "Ongoing Monitoring",
        description:
          "Re-credentialing deadlines and panel status tracked with proactive alerts.",
      },
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
    dashboard: {
      stats: [
        { value: "$180k", label: "Recovered this quarter" },
        { value: "22", label: "Claims still open >120d" },
      ],
      footerItems: ["Claim #38821 — payer follow-up sent", "Write-off review — 14 claims cleared"],
    },
    workflow: [
      {
        number: "01",
        title: "Aging Triage",
        description: "Every claim over 90/120/180 days is triaged and prioritized.",
      },
      {
        number: "02",
        title: "Payer Follow-Up",
        description: "A dedicated team works stalled claims directly with payers.",
      },
      {
        number: "03",
        title: "Recovery or Review",
        description:
          "Correctable claims are re-filed; true write-offs get a final review before closing.",
      },
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
    dashboard: {
      stats: [
        { value: "34d", label: "Avg. days in A/R" },
        { value: "98%", label: "Clean claim rate" },
      ],
      footerItems: ["Monthly report generated", "Payer benchmark updated"],
    },
    workflow: [
      {
        number: "01",
        title: "Data Consolidation",
        description: "Collections, denials, and A/R data pulled into one dashboard.",
      },
      {
        number: "02",
        title: "Monthly Reporting",
        description: "Transparent reports delivered on a fixed monthly cadence.",
      },
      {
        number: "03",
        title: "Benchmarking",
        description: "Payer performance benchmarked so you know where you stand.",
      },
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
    dashboard: {
      stats: [
        { value: "3.2k", label: "Claims auto-scrubbed / mo" },
        { value: "41%", label: "Denial risk flagged pre-submit" },
      ],
      footerItems: ["Eligibility check automated", "High-risk claim flagged for review"],
    },
    workflow: [
      {
        number: "01",
        title: "Automated Checks",
        description: "Eligibility verification and claim scrubbing run automatically.",
      },
      {
        number: "02",
        title: "Risk Scoring",
        description: "Predictive denial-risk scoring flags claims before submission.",
      },
      {
        number: "03",
        title: "Human Review",
        description: "Every flagged claim gets human review — no fully automated decisions.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
