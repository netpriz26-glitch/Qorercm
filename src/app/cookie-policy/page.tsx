import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: `How ${siteConfig.legalName} uses cookies and similar technologies.`,
  alternates: { canonical: "/cookie-policy" },
};

export default function CookiePolicyPage() {
  return (
    <LegalPage title="Cookie Policy" path="/cookie-policy" lastUpdated="July 15, 2026">
      <p>
        This Cookie Policy explains how {siteConfig.legalName} uses cookies and similar
        technologies on {siteConfig.url}.
      </p>

      <h2>1. What Are Cookies</h2>
      <p>
        Cookies are small text files placed on your device to help websites function and to
        collect information about how the site is used.
      </p>

      <h2>2. Cookies We Use</h2>
      <ul>
        <li>
          <strong>Essential cookies</strong> — required for core site functionality, such as
          remembering your cookie consent choice. These cannot be disabled.
        </li>
        <li>
          <strong>Analytics cookies</strong> (Google Analytics via Google Tag Manager) — help us
          understand how visitors use the Site, only loaded after you accept.
        </li>
        <li>
          <strong>Advertising cookies</strong> (Google Ads, Meta Pixel, LinkedIn Insight Tag,
          Microsoft UET) — help us measure ad performance and, where applicable, show relevant
          ads, only loaded after you accept.
        </li>
      </ul>

      <h2>3. Consent Management</h2>
      <p>
        On your first visit, a cookie banner lets you accept or decline non-essential cookies. We
        use Google&apos;s Consent Mode, which keeps analytics and advertising cookies disabled by
        default until you accept them. You can change your choice at any time by clearing your
        browser&apos;s local storage for this Site and reloading the page.
      </p>

      <h2>4. Third-Party Cookies</h2>
      <p>
        Some cookies are set by third parties (Google, Meta, LinkedIn, Microsoft) when their tags
        load. Their use of this data is governed by their own privacy policies.
      </p>

      <h2>5. Managing Cookies in Your Browser</h2>
      <p>
        Most browsers let you block or delete cookies through their settings. Blocking essential
        cookies may affect how this Site functions.
      </p>

      <h2>6. Contact Us</h2>
      <p>
        Questions about this Cookie Policy? Contact us at{" "}
        <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>.
      </p>
    </LegalPage>
  );
}
