import { Star } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import { TiltCard } from "@/components/ui/TiltCard";

const testimonials = [
  {
    quote:
      "Switching our billing to QoreRCM was the single best operational decision we made last year. Denials dropped and our A/R over 90 days is a fraction of what it was.",
    name: "Practice Manager",
    org: "Multi-Specialty Clinic",
  },
  {
    quote:
      "We finally have visibility into our own revenue cycle. The monthly reporting alone has been worth the switch — no more guessing where claims stand.",
    name: "Physician Owner",
    org: "Independent Family Practice",
  },
  {
    quote:
      "Their appeals team recovered claims we'd already written off. Responsive, credentialed, and easy to work with.",
    name: "Office Administrator",
    org: "Outpatient Surgical Center",
  },
];

export function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <Reveal variant="fadeUp">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Trusted by Practices Like Yours
          </h2>
        </div>
      </Reveal>

      <StaggerGroup className="mt-12 grid gap-6 lg:grid-cols-3">
        {testimonials.map((t) => (
          <StaggerItem key={t.name} className="h-full">
            <TiltCard tone="plain" className="flex h-full flex-col border border-slate-200 bg-white p-6">
              <div className="flex gap-0.5 text-amber-400" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-700">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="mt-5 border-t border-slate-100 pt-4 text-sm">
                <span className="font-semibold text-slate-900">{t.name}</span>
                <span className="text-slate-500"> — {t.org}</span>
              </div>
            </TiltCard>
          </StaggerItem>
        ))}
      </StaggerGroup>
      <p className="mt-6 text-center text-xs text-slate-400">
        Representative example testimonials — replace with quotes from your own clients (with
        permission) before publishing.
      </p>
    </section>
  );
}
