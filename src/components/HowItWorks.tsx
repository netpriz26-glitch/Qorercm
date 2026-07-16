import { Reveal } from "@/components/motion/Reveal";
import { Timeline, type TimelineStep } from "@/components/ui/Timeline";

const steps: TimelineStep[] = [
  {
    number: "01",
    title: "Free Revenue Cycle Audit",
    description:
      "Share a snapshot of your claims and A/R. We identify denial patterns, missed charges, and collection gaps — free, no obligation.",
  },
  {
    number: "02",
    title: "Custom Onboarding Plan",
    description:
      "We map your specialty, payer mix, and existing PM/EHR system, then build a transition plan that avoids any disruption to cash flow.",
  },
  {
    number: "03",
    title: "Dedicated Billing Team",
    description:
      "A named team of certified coders and billers goes to work on your account — not an anonymous queue.",
  },
  {
    number: "04",
    title: "Transparent Monthly Reporting",
    description:
      "Track collections, denial rate, and days in A/R every month, with a direct line to your account manager.",
  },
];

export function HowItWorks() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <Reveal variant="fadeUp">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            From your free audit to a fully managed revenue cycle — usually within two to three
            weeks.
          </p>
        </div>
      </Reveal>

      <div className="mt-14">
        <Timeline steps={steps} />
      </div>
    </section>
  );
}
