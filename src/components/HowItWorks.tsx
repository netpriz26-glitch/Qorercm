import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";

const steps = [
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

      <StaggerGroup className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step) => (
          <StaggerItem key={step.number} className="relative">
            <span className="text-4xl font-black text-brand-100">{step.number}</span>
            <h3 className="mt-2 text-base font-semibold text-slate-900">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
