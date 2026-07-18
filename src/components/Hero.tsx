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
    <section className="relative flex min-h-svh items-center overflow-hidden bg-ink-950 text-white">
      <div className="absolute inset-x-0 bottom-0 top-20 sm:top-24" aria-hidden="true">
        <Image
          src={heroDoctor}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[68%_top]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#070b13_0%,rgba(7,11,19,0.96)_22%,rgba(7,11,19,0.88)_40%,rgba(7,11,19,0.62)_52%,rgba(7,11,19,0.32)_64%,rgba(7,11,19,0.1)_76%,transparent_88%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(7,11,19,0.85)_0%,rgba(7,11,19,0.5)_9%,rgba(7,11,19,0.18)_20%,transparent_32%)]" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-ink-950 to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 pb-10 pt-28 sm:px-6 sm:pt-32">
        <div className="max-w-2xl">
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
        </div>

        <Reveal variant="fadeUp" delay={0.32}>
          <ul className="mt-8 flex max-w-4xl flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/10 pt-6">
            {trustBadges.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2.5 text-sm font-semibold text-slate-300">
                <Icon className="h-5 w-5 shrink-0 text-brand-400" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
