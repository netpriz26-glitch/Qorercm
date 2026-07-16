import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { ProblemBenefits } from "@/components/ProblemBenefits";
import { Services } from "@/components/Services";
import { HowItWorks } from "@/components/HowItWorks";
import { Stats } from "@/components/Stats";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { InsightsPreview } from "@/components/InsightsPreview";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { serviceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: siteConfig.offer.headline,
  description: siteConfig.offer.subheadline,
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <JsonLd data={serviceSchema()} />
      <Hero />
      <TrustBar />
      <ProblemBenefits />
      <Services />
      <HowItWorks />
      <Stats />
      <Testimonials />
      <FAQ />
      <InsightsPreview />
      <CTASection />
    </>
  );
}
