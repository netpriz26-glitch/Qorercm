import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
  fullHeight = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
  fullHeight?: boolean;
}) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-surface-50 pb-16 pt-32 sm:pb-24 sm:pt-40",
        fullHeight && "flex min-h-svh items-center"
      )}
    >
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <Reveal variant="fadeUp">
          <p className="inline-flex items-center rounded-full border border-trust-200 bg-trust-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-trust-700">
            {eyebrow}
          </p>
        </Reveal>
        <Reveal variant="fadeUp" delay={0.08}>
          <h1 className="heading-hero mt-5 font-heading font-extrabold tracking-tight text-slate-900">
            {title}
          </h1>
        </Reveal>
        <Reveal variant="fadeUp" delay={0.14}>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
            {description}
          </p>
        </Reveal>
        {children && (
          <Reveal variant="fadeUp" delay={0.2}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {children}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
