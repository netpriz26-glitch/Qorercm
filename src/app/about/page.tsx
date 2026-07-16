import type { Metadata } from "next";
import { HeartHandshake, Target, ShieldCheck, Users } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { TiltCard } from "@/components/ui/TiltCard";
import { Icon3DTile } from "@/components/ui/Icon3DTile";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import { AnimatedCounter } from "@/components/motion/AnimatedCounter";
import { Scene3D } from "@/components/three/Scene3D";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About Us",
  description: `${siteConfig.legalName}'s mission, values, and approach to healthcare revenue cycle management.`,
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: Target,
    title: "Accountability Over Excuses",
    description:
      "One dedicated team owns your revenue cycle end-to-end — no finger-pointing between billing, coding, and follow-up.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Is Non-Negotiable",
    description:
      "Every process is built around HIPAA and payer-compliance requirements first, speed second.",
  },
  {
    icon: HeartHandshake,
    title: "Aligned Incentives",
    description:
      "We're typically paid as a percentage of what we collect for you — we only grow when your collections do.",
  },
  {
    icon: Users,
    title: "A Named Team, Not a Queue",
    description:
      "You get direct access to the specific people working your account, not a rotating support inbox.",
  },
];

const orgStats = [
  { value: 150, suffix: "+", label: "Practices served" },
  { value: 12, suffix: "", label: "Specialties supported" },
  { value: 98, suffix: "%", label: "Clean claim rate" },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <PageHero
        eyebrow="About Us"
        title={`Why ${siteConfig.name} Exists`}
        description="Healthcare practices lose revenue to process gaps, not effort. We built a dedicated revenue cycle team so practices don't have to choose between patient care and getting paid."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal variant="fadeRight">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">Our Story</h2>
              <p className="mt-4 text-slate-600">
                {siteConfig.legalName} was founded by revenue cycle operators who saw the same
                pattern across independent practices and multi-specialty groups: billing teams
                stretched thin, denials piling up unworked, and no single person accountable for
                the full revenue cycle.
              </p>
              <p className="mt-4 text-slate-600">
                Instead of another software platform practices have to manage themselves, we built
                a service — certified coders, dedicated billers, and a denial-management team
                working as one unit, backed by automation where it genuinely helps and human
                judgment everywhere it matters.
              </p>
              <div className="mt-8">
                <ButtonLink href="/#audit-form" size="lg">
                  {siteConfig.offer.ctaLabel}
                </ButtonLink>
              </div>
            </div>
          </Reveal>

          <Reveal variant="fadeLeft" delay={0.1}>
            <div className="relative flex items-center justify-center rounded-[24px] bg-ink-950 p-8">
              <Scene3D variant="orbit" className="h-72 w-full" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink-950 py-14">
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <StaggerGroup className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {orgStats.map((stat) => (
              <StaggerItem key={stat.label} className="text-center">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  className="text-3xl font-extrabold text-white sm:text-4xl"
                />
                <div className="mt-1.5 text-sm text-brand-200">{stat.label}</div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <Reveal variant="fadeUp">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              What We Value
            </h2>
          </div>
        </Reveal>

        <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2">
          {values.map((value) => (
            <StaggerItem key={value.title}>
              <TiltCard tone="plain" className="h-full border border-slate-200 bg-white p-6">
                <Icon3DTile icon={value.icon} />
                <h3 className="mt-4 text-base font-semibold text-slate-900">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{value.description}</p>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>
    </>
  );
}
