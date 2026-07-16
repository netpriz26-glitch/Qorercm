import type { Metadata } from "next";
import { TrendingUp } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { TiltCard } from "@/components/ui/TiltCard";
import { ButtonLink } from "@/components/ui/Button";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { caseStudies } from "@/lib/content/case-studies";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Real-world results from practices that moved their revenue cycle to QoreRCM.",
  alternates: { canonical: "/case-studies" },
};

export default function CaseStudiesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Case Studies", path: "/case-studies" },
        ])}
      />
      <PageHero
        eyebrow="Case Studies"
        title="Results, Not Just Promises"
        description="Illustrative example case studies — replace with real, verified client results (with permission) before publishing."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <StaggerGroup className="grid gap-6 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <StaggerItem key={study.slug} id={study.slug} className="scroll-mt-24">
              <TiltCard tone="plain" className="h-full border border-slate-200 bg-white p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-accent-500">
                  <TrendingUp className="h-5 w-5 text-white" aria-hidden="true" />
                </div>
                <h2 className="mt-4 text-base font-semibold text-slate-900">{study.client}</h2>
                <p className="text-xs text-slate-500">{study.specialty}</p>
                <p className="mt-3 text-sm font-medium text-brand-700">{study.summary}</p>

                <div className="mt-5 space-y-3 border-t border-slate-100 pt-4">
                  {study.metrics.map((metric) => (
                    <div key={metric.label} className="flex items-center justify-between text-xs">
                      <span className="text-slate-500">{metric.label}</span>
                      <span className="font-semibold text-slate-900">
                        {metric.before} <span className="text-slate-400">→</span> {metric.after}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="mt-4 text-xs leading-relaxed text-slate-500">{study.approach}</p>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <div className="mt-12 text-center">
          <ButtonLink href="/#audit-form" size="lg">
            {siteConfig.offer.ctaLabel}
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
