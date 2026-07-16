import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MockupPanel } from "@/components/ui/MockupPanel";
import { getServiceBySlug } from "@/lib/content/services";

// Deep-dives on the real services that fill the spec's generic
// "AI Solutions / CRM Platform / Google Ads Services / Marketing
// Automation" homepage slots — remapped to QoreRCM's actual 7 services
// instead of features this business doesn't offer.
const spotlightSlugs = [
  "revenue-cycle-management",
  "denial-management",
  "ai-automation",
  "healthcare-analytics",
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
        {spotlightSlugs.map((slug, index) => {
          const service = getServiceBySlug(slug);
          if (!service) return null;
          const reversed = index % 2 === 1;

          return (
            <div key={service.slug} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <Reveal
                variant={reversed ? "fadeLeft" : "fadeRight"}
                className={reversed ? "lg:order-2" : undefined}
              >
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
                  <Link
                    href={`/services/${service.slug}`}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800"
                  >
                    Learn more
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </Reveal>

              <Reveal
                variant={reversed ? "fadeRight" : "fadeLeft"}
                delay={0.1}
                className={reversed ? "lg:order-1" : undefined}
              >
                <div className="rounded-3xl bg-ink-950 p-6 sm:p-8">
                  <MockupPanel title={service.name} icon={service.icon} {...service.dashboard} />
                </div>
              </Reveal>
            </div>
          );
        })}
      </div>
    </section>
  );
}
