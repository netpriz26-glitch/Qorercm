import { TrendingDown, TrendingUp } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Reveal } from "@/components/motion/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

const problems = [
  "Claims denied or delayed for avoidable coding and eligibility errors",
  "Aging A/R piling up past 90 days with no dedicated follow-up",
  "Billing staff turnover interrupting cash flow for weeks at a time",
  "Limited visibility into denial trends, payer performance, or true collection rate",
];

const benefits = [
  "Clean-claim submission backed by certified coders who know payer rules",
  "Proactive denial management and appeals — not just claim submission",
  "A dedicated, cross-trained billing team so one absence never stalls your cash flow",
  "Transparent monthly reporting so you always know exactly where revenue stands",
];

export function ProblemBenefits() {
  return (
    <section className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <SectionHeader
        title="Is Your Practice Leaving Revenue on the Table?"
        description="Most practices don't lose revenue in one place — they lose it in dozens of small places that add up every month."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <Reveal variant="fadeLeft" delay={0.1}>
          <TiltCard tone="plain" className="border border-red-100 bg-red-50/60 p-6 sm:p-8">
            <div className="flex items-center gap-2 text-red-700">
              <TrendingDown className="h-5 w-5" aria-hidden="true" />
              <h3 className="text-lg font-semibold">Without dedicated RCM</h3>
            </div>
            <ul className="mt-5 space-y-3.5">
              {problems.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-700">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                  {item}
                </li>
              ))}
            </ul>
          </TiltCard>
        </Reveal>

        <Reveal variant="fadeRight" delay={0.1}>
          <TiltCard tone="plain" className="border border-green-100 bg-green-50/60 p-6 sm:p-8">
            <div className="flex items-center gap-2 text-green-700">
              <TrendingUp className="h-5 w-5" aria-hidden="true" />
              <h3 className="text-lg font-semibold">With {siteConfig.name}</h3>
            </div>
            <ul className="mt-5 space-y-3.5">
              {benefits.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-700">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-green-500" />
                  {item}
                </li>
              ))}
            </ul>
          </TiltCard>
        </Reveal>
      </div>
    </section>
  );
}
