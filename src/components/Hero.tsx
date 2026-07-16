import { CheckCircle2, TrendingUp } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { MeshBackground } from "@/components/backgrounds/MeshBackground";
import { MockupPanel } from "@/components/ui/MockupPanel";
import { siteConfig } from "@/lib/site-config";

const heroPoints = [
  "Free, no-obligation revenue audit",
  "Results in as little as 48 hours",
  "No long-term contract required",
];

const clientWordmarks = [
  "Multi-Specialty Groups",
  "Family Care Networks",
  "Surgical Partners",
  "Outpatient Clinics",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink-950 pb-20 pt-14 text-white sm:pb-28 sm:pt-20">
      <MeshBackground />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-10">
        <div>
          <Reveal variant="fadeUp">
            <p className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-300">
              Medical Billing &amp; Revenue Cycle Management
            </p>
          </Reveal>

          <Reveal variant="fadeUp" delay={0.08}>
            <h1 className="heading-hero mt-5 font-heading font-extrabold tracking-tight">
              <span className="text-gradient-brand">Stop Losing Revenue</span>{" "}
              to Billing Errors
            </h1>
          </Reveal>

          <Reveal variant="fadeUp" delay={0.14}>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-300">
              {siteConfig.offer.subheadline}
            </p>
          </Reveal>

          <Reveal variant="fadeUp" delay={0.2}>
            <ul className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2">
              {heroPoints.map((point) => (
                <li key={point} className="flex items-center gap-2 text-sm font-medium text-slate-300">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-400" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal variant="fadeUp" delay={0.26}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ButtonLink href="#audit-form" size="lg">
                {siteConfig.offer.ctaLabel}
              </ButtonLink>
              <ButtonLink href="/services" variant="secondary-dark" size="lg">
                Explore Services
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal variant="fadeUp" delay={0.32}>
            <div className="mt-10 border-t border-white/10 pt-8">
              <p className="text-xs uppercase tracking-wide text-slate-500">
                Trusted by teams at
              </p>
              <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
                {clientWordmarks.map((name) => (
                  <span key={name} className="text-sm font-semibold text-slate-500">
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal variant="fadeLeft" delay={0.15}>
          <div className="relative flex items-center justify-center py-6 lg:py-0">
            <div className="animate-float relative z-10 w-full max-w-md">
              <MockupPanel
                title="Revenue Cycle Overview"
                stats={[
                  { value: "98%", label: "Clean claim rate" },
                  { value: "$412k", label: "Collected this month", trendIcon: TrendingUp },
                ]}
                footerItems={["Claim #48213 — approved", "Denial appeal #103 — submitted"]}
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
