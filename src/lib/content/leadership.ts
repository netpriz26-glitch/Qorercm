export type Leader = {
  name: string;
  title: string;
  bio: string;
  initials: string;
};

// Placeholder leadership profiles — replace with real people, titles, and
// bios before publishing. Initials-based avatars are used deliberately
// instead of stock photography standing in for real executives.
export const leadership: Leader[] = [
  {
    name: "Founder & CEO Name",
    title: "Chief Executive Officer",
    bio: "20+ years in healthcare revenue cycle operations, previously leading RCM for a multi-state hospital network.",
    initials: "CE",
  },
  {
    name: "COO Name",
    title: "Chief Operating Officer",
    bio: "Oversees day-to-day delivery across billing, coding, and denial management teams.",
    initials: "CO",
  },
  {
    name: "VP of Coding Compliance Name",
    title: "VP, Coding & Compliance",
    bio: "AAPC-certified coder and auditor, responsible for coding accuracy and payer-compliance standards.",
    initials: "VC",
  },
  {
    name: "VP of Client Success Name",
    title: "VP, Client Success",
    bio: "Leads onboarding and account management, ensuring every practice has a direct line to their team.",
    initials: "VS",
  },
];
