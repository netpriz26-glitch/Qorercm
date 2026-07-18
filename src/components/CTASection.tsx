import dynamic from "next/dynamic";
import { Reveal } from "@/components/motion/Reveal";

const LeadForm = dynamic(() => import("@/components/LeadForm").then((m) => m.LeadForm));

export function CTASection() {
  return (
    <section id="audit-form" className="relative scroll-mt-24 overflow-hidden bg-trust-900 py-16 sm:py-20">
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal variant="scaleIn">
          <div className="rounded-2xl bg-white p-6 shadow-xl sm:p-10">
            <LeadForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
