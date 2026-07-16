import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { cookies } from "next/headers";
import { CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { LEAD_COOKIE_NAME } from "@/lib/lead-schema";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Your request has been received.",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function ThankYouPage() {
  const cookieStore = await cookies();
  const raw = cookieStore.get(LEAD_COOKIE_NAME)?.value;

  let lead: { email: string; phone?: string } | null = null;
  let isContactMessage = false;
  if (raw) {
    try {
      const parsed = JSON.parse(raw) as { email: string; phone?: string; message?: string };
      lead = { email: parsed.email, phone: parsed.phone };
      isContactMessage = typeof parsed.message === "string";
    } catch {
      lead = null;
    }
  }

  return (
    <section className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6">
      {/* Fires the Google Ads conversion (and any other GTM tags listening
          for "generate_lead") once, on load. Configure the corresponding
          trigger/tag inside your GTM container. */}
      {lead && (
        <Script
          id="generate-lead-event"
          strategy="afterInteractive"
          // Values come from our own server-set cookie (populated from a
          // validated form submission), never rendered as HTML — safe to
          // serialize into an inline script.
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              window.dataLayer.push({
                event: 'generate_lead',
                user_data: ${JSON.stringify({
                  email: lead.email,
                  phone_number: lead.phone,
                })}
              });
            `,
          }}
        />
      )}

      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-100">
        <CheckCircle2 className="h-9 w-9 text-brand-700" aria-hidden="true" />
      </span>

      <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        {isContactMessage ? "Your Message Is In" : "Your Free Audit Request Is In"}
      </h1>

      <p className="mt-4 max-w-md text-lg leading-relaxed text-slate-600">
        {isContactMessage
          ? `A member of the ${siteConfig.name} team will get back to you within one business day. In the meantime, feel free to call us directly.`
          : `A senior revenue cycle consultant from ${siteConfig.name} will reach out within one business day. In the meantime, feel free to call us directly.`}
      </p>

      <a
        href={`tel:${siteConfig.contact.phoneHref}`}
        className="mt-8 inline-flex items-center justify-center rounded-lg bg-brand-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-brand-700"
      >
        Call {siteConfig.contact.phone}
      </a>

      <Link href="/" className="mt-4 text-sm font-medium text-slate-500 hover:text-slate-700">
        Back to homepage
      </Link>
    </section>
  );
}
