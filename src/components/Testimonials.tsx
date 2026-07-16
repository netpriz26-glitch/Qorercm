import { Reveal } from "@/components/motion/Reveal";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";

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

      <div className="mt-12">
        <TestimonialCarousel />
      </div>

      <p className="mt-6 text-center text-xs text-slate-400">
        Representative example testimonials — replace with quotes from your own clients (with
        permission) before publishing.
      </p>
    </section>
  );
}
