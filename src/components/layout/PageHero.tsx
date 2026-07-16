import type { ReactNode } from "react";
import { MeshBackground } from "@/components/backgrounds/MeshBackground";
import { Reveal } from "@/components/motion/Reveal";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-16 text-white sm:py-24">
      <MeshBackground />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <Reveal variant="fadeUp">
          <p className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-300">
            {eyebrow}
          </p>
        </Reveal>
        <Reveal variant="fadeUp" delay={0.08}>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl">
            {title}
          </h1>
        </Reveal>
        <Reveal variant="fadeUp" delay={0.14}>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
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
