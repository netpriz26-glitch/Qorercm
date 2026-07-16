import { JsonLd } from "@/components/JsonLd";
import { faqSchema } from "@/lib/schema";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

const faqs = [
  {
    question: "What is medical revenue cycle management (RCM)?",
    answer:
      "Revenue cycle management is the end-to-end process of capturing, billing, and collecting revenue for patient care — from eligibility verification and coding through claim submission, denial management, and final payment.",
  },
  {
    question: "How much does QoreRCM's service cost?",
    answer:
      "Pricing is typically a percentage of collections, so our incentives are aligned with yours — we only grow when your collections do. Your free audit includes a custom quote based on your claim volume and specialty.",
  },
  {
    question: "Is my practice's data secure and HIPAA-compliant?",
    answer:
      "Yes. All data is handled under HIPAA-compliant processes and business associate agreements, with encrypted transmission and role-based access controls.",
  },
  {
    question: "How long until we see results after switching?",
    answer:
      "Most practices see measurable improvement in clean-claim rate within the first billing cycle, and a meaningful reduction in aging A/R within 60–90 days as our team works existing denials and outstanding claims.",
  },
  {
    question: "Do you work with our existing practice management or EHR system?",
    answer:
      "We integrate with most major practice management and EHR platforms. During onboarding, we confirm compatibility and map your existing workflow before any transition begins.",
  },
];

export function FAQ() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <JsonLd data={faqSchema(faqs)} />
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeader title="Frequently Asked Questions" />

        <Reveal variant="fadeUp" delay={0.1}>
          <div className="mt-10 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
            {faqs.map((faq) => (
              <details key={faq.question} className="group p-6 open:pb-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-slate-900 marker:content-none">
                  {faq.question}
                  <span
                    className="shrink-0 text-xl font-light text-brand-600 transition group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
