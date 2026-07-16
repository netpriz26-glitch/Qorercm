import { LeadForm } from "@/components/LeadForm";
import { MeshBackground } from "@/components/backgrounds/MeshBackground";
import { Reveal } from "@/components/motion/Reveal";

export function CTASection() {
  return (
    <section id="audit-form" className="relative scroll-mt-24 overflow-hidden bg-ink-950 py-16 sm:py-20">
      <MeshBackground />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal variant="scaleIn">
          <div className="glass p-6 sm:p-10">
            <LeadForm tone="dark" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
