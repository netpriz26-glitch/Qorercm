"use client";

import { useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import { testimonials, type Testimonial } from "@/lib/content/testimonials";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import { cn } from "@/lib/cn";

export function TestimonialCarousel() {
  const prefersReducedMotion = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  function scrollToIndex(index: number) {
    const track = trackRef.current;
    if (!track) return;
    const child = track.children[index] as HTMLElement | undefined;
    child?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    setActive(index);
  }

  function handleScroll() {
    const track = trackRef.current;
    if (!track) return;
    const index = Math.round(track.scrollLeft / track.clientWidth);
    setActive(Math.min(Math.max(index, 0), testimonials.length - 1));
  }

  if (prefersReducedMotion) {
    return (
      <StaggerGroup className="grid gap-6 lg:grid-cols-3">
        {testimonials.map((t) => (
          <StaggerItem key={t.name} className="h-full">
            <TestimonialCard testimonial={t} />
          </StaggerItem>
        ))}
      </StaggerGroup>
    );
  }

  return (
    <div>
      <p className="sr-only" role="status" aria-live="polite">
        Showing testimonial {active + 1} of {testimonials.length}: {testimonials[active].name},{" "}
        {testimonials[active].org}
      </p>
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {testimonials.map((t) => (
          <div key={t.name} className="w-full shrink-0 snap-center">
            <TestimonialCard testimonial={t} />
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => scrollToIndex(Math.max(active - 1, 0))}
          aria-label="Previous testimonial"
          disabled={active === 0}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:bg-slate-50 disabled:opacity-40"
        >
          <ChevronLeft className="h-4 w-4" aria-hidden="true" />
        </button>

        <div className="flex items-center gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              type="button"
              onClick={() => scrollToIndex(i)}
              aria-label={`Go to testimonial ${i + 1} of ${testimonials.length}`}
              aria-current={i === active}
              className={cn(
                "h-2 rounded-full transition-all",
                i === active ? "w-6 bg-brand-600" : "w-2 bg-slate-300"
              )}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => scrollToIndex(Math.min(active + 1, testimonials.length - 1))}
          aria-label="Next testimonial"
          disabled={active === testimonials.length - 1}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:bg-slate-50 disabled:opacity-40"
        >
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="mx-auto flex h-full max-w-2xl flex-col rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
      <div className="flex gap-0.5 text-amber-400" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <blockquote className="mt-4 flex-1 text-base leading-relaxed text-slate-700">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <div className="mt-5 border-t border-slate-100 pt-4 text-sm">
        <span className="font-semibold text-slate-900">{testimonial.name}</span>
        <span className="text-slate-500"> — {testimonial.org}</span>
      </div>
    </div>
  );
}
