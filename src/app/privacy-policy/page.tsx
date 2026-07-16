import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${siteConfig.legalName} collects, uses, and protects your information.`,
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy" path="/privacy-policy" lastUpdated="July 15, 2026">
      <p>
        {siteConfig.legalName} (&ldquo;QoreRCM,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;)
        respects your privacy. This Privacy Policy explains what information we collect through{" "}
        {siteConfig.url}, how we use it, and the choices you have.
      </p>

      <h2>1. Information We Collect</h2>
      <p>When you submit our Free Revenue Cycle Audit form, we collect:</p>
      <ul>
        <li>Your full name</li>
        <li>Your practice or clinic name</li>
        <li>Your work email address</li>
        <li>Your phone number</li>
      </ul>
      <p>
        We also automatically collect standard technical data (IP address, browser type, device
        type, pages visited, and referring URL) through cookies and similar technologies, subject
        to your cookie consent choices — see our{" "}
        <a href="/cookie-policy">Cookie Policy</a>.
      </p>
      <p>
        This site is a marketing landing page and does not collect Protected Health Information
        (PHI). PHI shared with us under a signed Business Associate Agreement as part of an active
        client engagement is governed separately under HIPAA, not through this website.
      </p>

      <h2>2. How We Use Your Information</h2>
      <ul>
        <li>To respond to your audit request and provide a quote or consultation</li>
        <li>To measure and improve the performance of this site and our advertising</li>
        <li>To send relevant follow-up communications, which you may opt out of at any time</li>
      </ul>

      <h2>3. Analytics &amp; Advertising Tools</h2>
      <p>
        With your consent, we use Google Tag Manager to load Google Analytics (GA4), Google Ads
        conversion tracking, Meta Pixel, LinkedIn Insight Tag, and Microsoft UET to understand
        site usage and measure advertising performance. These tools may set cookies or use similar
        technologies described in our <a href="/cookie-policy">Cookie Policy</a>.
      </p>

      <h2>4. Sharing of Information</h2>
      <p>
        We do not sell your personal information. We may share it with service providers who
        support our operations (e.g., CRM, email delivery) under confidentiality obligations, or
        as required by law.
      </p>

      <h2>5. Data Retention</h2>
      <p>
        We retain form submissions for as long as necessary to respond to your inquiry and
        maintain business records, and delete or anonymize it thereafter unless a longer period is
        required by law.
      </p>

      <h2>6. Your Rights</h2>
      <p>
        Depending on your location, you may have the right to access, correct, or delete your
        personal information, or to opt out of certain data uses. To exercise these rights,
        contact us at{" "}
        <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>.
      </p>

      <h2>7. Contact Us</h2>
      <p>
        {siteConfig.legalName}
        <br />
        {siteConfig.contact.address.line1}, {siteConfig.contact.address.city},{" "}
        {siteConfig.contact.address.state} {siteConfig.contact.address.zip}
        <br />
        <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a> ·{" "}
        <a href={`tel:${siteConfig.contact.phoneHref}`}>{siteConfig.contact.phone}</a>
      </p>
    </LegalPage>
  );
}
