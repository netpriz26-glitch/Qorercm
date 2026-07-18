import Image from "next/image";
import { CheckCircle2, ShieldCheck, BadgeCheck, Lock, Award } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { siteConfig } from "@/lib/site-config";
import heroDoctor from "@/assets/images/hero-doctor.webp";

const heroPoints = [
  "Free, no-obligation revenue audit",
  "Results in as little as 48 hours",
  "No long-term contract required",
];

const trustBadges = [
  { icon: ShieldCheck, label: "HIPAA Compliant" },
  { icon: BadgeCheck, label: "AAPC Certified Coders" },
  { icon: Lock, label: "SOC 2–Aligned Data Security" },
  { icon: Award, label: "150+ Practices Served" },
];

export function Hero() {
  return (
    <section className="relative bg-white pb-16 pt-28 sm:pb-24 sm:pt-32">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <div>
          <Reveal variant="fadeUp">
            <p className="inline-flex items-center rounded-full border border-trust-200 bg-trust-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-trust-700">
              Medical Billing &amp; Revenue Cycle Management
            </p>
          </Reveal>

          <Reveal variant="fadeUp" delay={0.08}>
            <h1 className="heading-hero mt-5 font-heading font-extrabold tracking-tight text-slate-900">
              Stop Losing Revenue to Billing Errors
            </h1>
          </Reveal>

          <Reveal variant="fadeUp" delay={0.14}>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
              {siteConfig.offer.subheadline}
            </p>
          </Reveal>

          <Reveal variant="fadeUp" delay={0.2}>
            <ul className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2">
              {heroPoints.map((point) => (
                <li key={point} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-trust-600" aria-hidden="true" />
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
              <ButtonLink href="/services" variant="secondary" size="lg">
                Explore Services
              </ButtonLink>
            </div>
          </Reveal>
        </div>

        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl ring-1 ring-slate-200 shadow-xl lg:aspect-[3/4]">
          <Image
            src={heroDoctor}
            alt=""
            fill
            preload
            fetchPriority="high"
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="object-cover object-[68%_top]"
          />
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl px-4 sm:px-6">
        <Reveal variant="fadeUp" delay={0.32}>
          <ul className="flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-slate-200 pt-8">
            {trustBadges.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2.5 text-sm font-semibold text-slate-600">
                <Icon className="h-5 w-5 shrink-0 text-trust-600" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
