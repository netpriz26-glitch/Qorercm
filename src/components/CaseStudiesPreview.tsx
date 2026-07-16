import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import { TiltCard } from "@/components/ui/TiltCard";
import { caseStudies } from "@/lib/content/case-studies";

export function CaseStudiesPreview() {
  const featured = caseStudies.slice(0, 3);

  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Case Studies"
          title="Results, Not Just Promises"
          description="A sample of the outcomes practices see after moving their revenue cycle to QoreRCM."
        />

        <StaggerGroup className="mt-12 grid gap-6 lg:grid-cols-3">
          {featured.map((study) => (
            <StaggerItem key={study.slug} className="h-full">
              <Link href={`/case-studies#${study.slug}`} className="block h-full">
                <TiltCard tone="plain" className="flex h-full flex-col border border-slate-200 bg-white p-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-400 to-accent-500 shadow-[0_10px_30px_rgba(96,165,250,0.35)]">
                    <TrendingUp className="h-5 w-5 text-white" aria-hidden="true" />
                  </span>
                  <span className="mt-4 block text-xs font-semibold uppercase tracking-wide text-brand-600">
                    {study.specialty}
                  </span>
                  <h3 className="mt-1 text-base font-semibold text-slate-900">{study.client}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                    {study.summary}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                    Read the full story
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </TiltCard>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <p className="mt-6 text-center text-xs text-slate-400">
          Illustrative example case studies — replace with real, verified client results (with
          permission) before publishing.
        </p>
      </div>
    </section>
  );
}
