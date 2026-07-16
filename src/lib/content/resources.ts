import { FileText, ClipboardList, BookOpen, type LucideIcon } from "lucide-react";

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
];
