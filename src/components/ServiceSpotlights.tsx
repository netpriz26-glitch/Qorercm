import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MockupPanel, type MockupPanelProps } from "@/components/ui/MockupPanel";
import { getServiceBySlug } from "@/lib/content/services";

// Deep-dives on the real services that fill the spec's generic
// "AI Solutions / CRM Platform / Google Ads Services / Marketing
// Automation" homepage slots — remapped to QoreRCM's actual 7 services
// instead of features this business doesn't offer.
const spotlights: { slug: string; panel: Omit<MockupPanelProps, "title" | "icon"> }[] = [
  {
    slug: "revenue-cycle-management",
    panel: {
      stats: [
        { value: "1", label: "Dedicated team, zero handoffs" },
        { value: "100%", label: "Billing lifecycle ownership" },
      ],
      footerItems: ["Eligibility verified in real time", "Monthly account review scheduled"],
    },
  },
  {
    slug: "denial-management",
    panel: {
      stats: [
        { value: "<5%", label: "Denial rate on managed claims" },
        { value: "92%", label: "Appeal win rate" },
      ],
      footerItems: ["Denial #4471 — root cause found", "Appeal #4472 — submitted"],
    },
  },
  {
    slug: "ai-automation",
    panel: {
      stats: [
        { value: "3.2k", label: "Claims auto-scrubbed / mo" },
        { value: "41%", label: "Denial risk flagged pre-submit" },
      ],
      footerItems: ["Eligibility check automated", "High-risk claim flagged for review"],
    },
  },
  {
    slug: "healthcare-analytics",
    panel: {
      stats: [
        { value: "34d", label: "Avg. days in A/R" },
        { value: "98%", label: "Clean claim rate" },
      ],
      footerItems: ["Monthly report generated", "Payer benchmark updated"],
    },
  },
];

export function ServiceSpotlights() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <SectionHeader
        eyebrow="How We Help"
        title="Purpose-Built for Every Part of Your Revenue Cycle"
        description="From day-to-day billing to AI-assisted denial prevention, each service below is delivered by the same dedicated team."
      />

      <div className="mt-16 space-y-20">
        {spotlights.map((spotlight, index) => {
          const service = getServiceBySlug(spotlight.slug);
          if (!service) return null;
          const reversed = index % 2 === 1;

          return (
            <div
              key={service.slug}
              className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              <Reveal variant={reversed ? "fadeLeft" : "fadeRight"} className={reversed ? "lg:order-2" : undefined}>
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-400 to-accent-500 shadow-[0_10px_30px_rgba(96,165,250,0.35)]">
                    <service.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-2xl font-heading font-bold tracking-tight text-slate-900">
                    {service.name}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-slate-600">
                    {service.description}
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {service.bullets.slice(0, 3).map((bullet) => (
                      <li key={bullet} className="flex gap-2.5 text-sm leading-relaxed text-slate-700">
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4 shrink-0 text-brand-500"
                          aria-hidden="true"
                        />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal
                variant={reversed ? "fadeRight" : "fadeLeft"}
                delay={0.1}
                className={reversed ? "lg:order-1" : undefined}
              >
                <div className="rounded-3xl bg-ink-950 p-6 sm:p-8">
                  <MockupPanel title={service.name} icon={service.icon} {...spotlight.panel} />
                </div>
              </Reveal>
            </div>
          );
        })}
      </div>
    </section>
  );
}
