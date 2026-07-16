import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `The terms governing your use of the ${siteConfig.legalName} website.`,
  alternates: { canonical: "/terms-conditions" },
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms & Conditions" path="/terms-conditions" lastUpdated="July 15, 2026">
      <p>
        These Terms &amp; Conditions (&ldquo;Terms&rdquo;) govern your use of{" "}
        {siteConfig.url} (the &ldquo;Site&rdquo;), operated by {siteConfig.legalName}. By using
        the Site, you agree to these Terms.
      </p>

      <h2>1. Free Audit Offer</h2>
      <p>
        The Free Revenue Cycle Audit offered through this Site is provided at no cost and without
        obligation to purchase any service. Availability, scope, and turnaround time may vary and
        are not guaranteed. Illustrative statistics referenced on this Site (e.g., clean claim
        rate, denial rate) are representative examples, not a guarantee of results for any
        specific practice.
      </p>

      <h2>2. Use of the Site</h2>
      <p>
        You agree to use the Site only for lawful purposes and to provide accurate information
        when submitting any form. You may not attempt to disrupt the Site, scrape content without
        permission, or misrepresent your identity when contacting us.
      </p>

      <h2>3. Intellectual Property</h2>
      <p>
        All content on this Site — including text, graphics, logos, and layout — is the property
        of {siteConfig.legalName} or its licensors and may not be reproduced without written
        permission.
      </p>

      <h2>4. No Professional Advice</h2>
      <p>
        Content on this Site is provided for general informational purposes only and does not
        constitute legal, financial, coding, or compliance advice. Engage {siteConfig.legalName}
        {" "}directly, under a signed services agreement, before relying on any recommendation.
      </p>

      <h2>5. Service Engagements</h2>
      <p>
        Any paid engagement for medical billing, coding, or revenue cycle management services is
        governed by a separate signed services agreement and, where applicable, a HIPAA Business
        Associate Agreement — not by these Terms.
      </p>

      <h2>6. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, {siteConfig.legalName} is not liable for any
        indirect, incidental, or consequential damages arising from your use of this Site.
      </p>

      <h2>7. Changes to These Terms</h2>
      <p>
        We may update these Terms from time to time. Continued use of the Site after changes are
        posted constitutes acceptance of the revised Terms.
      </p>

      <h2>8. Governing Law</h2>
      <p>These Terms are governed by the laws of {siteConfig.legal.jurisdiction}.</p>

      <h2>9. Contact Us</h2>
      <p>
        {siteConfig.legalName}
        <br />
        <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a> ·{" "}
        <a href={`tel:${siteConfig.contact.phoneHref}`}>{siteConfig.contact.phone}</a>
      </p>
    </LegalPage>
  );
}
