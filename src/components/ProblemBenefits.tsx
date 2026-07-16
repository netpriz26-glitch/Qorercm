import { TrendingDown, TrendingUp } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Reveal } from "@/components/motion/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";

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
      <Reveal variant="fadeUp">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Is Your Practice Leaving Revenue on the Table?
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Most practices don&apos;t lose revenue in one place — they lose it in dozens of small
            places that add up every month.
          </p>
        </div>
      </Reveal>

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
          <TiltCard tone="plain" className="border border-brand-100 bg-brand-50/60 p-6 sm:p-8">
            <div className="flex items-center gap-2 text-brand-700">
              <TrendingUp className="h-5 w-5" aria-hidden="true" />
              <h3 className="text-lg font-semibold">With {siteConfig.name}</h3>
            </div>
            <ul className="mt-5 space-y-3.5">
              {benefits.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-700">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
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
