export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  readingMinutes: number;
  body: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "common-causes-of-claim-denials",
    title: "5 Common Causes of Claim Denials (and How to Prevent Them)",
    excerpt:
      "Most denials trace back to a handful of avoidable, upstream issues. Here's what to check before you resubmit.",
    category: "Denial Management",
    publishedAt: "2026-06-02",
    readingMinutes: 6,
    body: [
      "Denials rarely come from one dramatic mistake — they come from small, repeatable gaps earlier in the claim lifecycle. Fixing the root cause prevents the same denial from recurring next month.",
      "**1. Eligibility not verified at time of service.** Coverage can change between scheduling and the visit. Verifying eligibility on the day of service, not just at scheduling, catches lapses before a claim is even filed.",
      "**2. Missing or invalid prior authorization.** Auth requirements vary by payer and by procedure code, and they change often. A pre-visit authorization check against current payer rules — not last year's rules — avoids this entirely.",
      "**3. Coding that doesn't match documentation.** A code has to be fully supported by the clinical note. Charge-capture audits that compare codes against documentation before submission catch mismatches early.",
      "**4. Duplicate claim submissions.** Resubmitting before a payer has finished processing the original claim reads as a duplicate and gets denied. Tracking claim status before refiling avoids the loop.",
      "**5. Timely filing missed.** Every payer has a filing deadline, and they're not all the same. A claim that sits in a queue for three weeks before anyone notices it wasn't filed is a claim you can no longer appeal.",
      "The pattern across all five: denials are a downstream symptom of an upstream process gap. Tracking denials by reason code — not just by dollar amount — is what turns a denial log into a prevention plan.",
    ],
  },
  {
    slug: "what-is-revenue-cycle-management",
    title: "What Is Revenue Cycle Management? A Practice Owner's Guide",
    excerpt:
      "A plain-English walkthrough of the RCM lifecycle, and where most practices lose revenue without realizing it.",
    category: "RCM Basics",
    publishedAt: "2026-05-18",
    readingMinutes: 8,
    body: [
      "Revenue cycle management (RCM) is the full financial process of a patient encounter — from the moment an appointment is scheduled to the moment the balance is paid in full. It spans five broad stages.",
      "**Pre-visit:** scheduling, eligibility verification, and prior authorization. Errors here are the cheapest to fix and the most expensive to ignore, since they compound into every later stage.",
      "**Charge capture:** translating the clinical encounter into billable codes. This is where coding accuracy either sets up a clean claim or seeds a future denial.",
      "**Claim submission:** sending the coded claim to the payer, ideally after it's been checked against that specific payer's edit rules.",
      "**Payment posting and denial management:** reconciling what was actually paid against what was billed, and working any denials or underpayments.",
      "**Patient billing:** collecting the patient-responsibility portion — copays, deductibles, and coinsurance — clearly and courteously.",
      "Most practices don't lose revenue in one dramatic stage. They lose small percentages at each of the five, and those small losses compound. A practice with a 95% clean-claim rate and a 92% collection rate on patient balances is, in aggregate, losing more revenue than either number alone suggests.",
      "That compounding effect is exactly why RCM is usually handled as one connected process rather than five disconnected tasks — a gap in eligibility verification shows up three weeks later as a denial, and nobody connects the two unless someone is looking at the whole cycle.",
    ],
  },
  {
    slug: "how-to-reduce-days-in-ar",
    title: "How to Reduce Days in A/R: A Practical Framework",
    excerpt:
      "Days in A/R is a lagging indicator of a dozen smaller process issues. Here's a framework for diagnosing which ones apply to you.",
    category: "Analytics",
    publishedAt: "2026-04-30",
    readingMinutes: 7,
    body: [
      "Days in accounts receivable (A/R) measures the average time between billing a claim and collecting payment for it. It's a useful single number, but it's a symptom, not a root cause — reducing it requires knowing which upstream issue is driving it up.",
      "**Segment your A/R by age bucket.** 0–30, 31–60, 61–90, 91–120, and 120+ days. A healthy revenue cycle has the vast majority of dollars in the 0–30 bucket. If a meaningful share is sitting past 90 days, that's where to focus first — not on new claims.",
      "**Segment by payer.** Days in A/R often varies dramatically by payer. If one payer is consistently slow, that's a targeted follow-up problem, not a global process problem.",
      "**Check first-pass clean-claim rate.** Every claim that gets denied and resubmitted adds weeks to its own A/R days, and pulls staff time away from claims that were clean the first time. Improving clean-claim rate reduces A/R age indirectly but significantly.",
      "**Set a follow-up cadence, not a follow-up pile.** Claims that cross 30 days without payer response should trigger an automatic follow-up — not wait until someone happens to notice them at 90 days.",
      "**Review write-offs before they're finalized.** A claim written off at 120 days because 'it's too old to pursue' is sometimes still fully collectible. A second set of eyes on write-offs before they're closed recovers real revenue.",
      "Days in A/R won't move from a single fix — it moves when eligibility verification, coding accuracy, denial follow-up, and write-off review are all pulling in the same direction at once.",
    ],
  },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
