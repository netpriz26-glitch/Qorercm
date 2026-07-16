/* eslint-disable @next/next/no-before-interactive-script-outside-document */
// That rule predates App Router support for `beforeInteractive` and only
// recognizes Pages Router's `pages/_document.js`. Placing these scripts in
// the root layout (`app/layout.tsx`) is the documented App Router pattern:
// https://nextjs.org/docs/app/api-reference/components/script#beforeinteractive
import Script from "next/script";
import { GTM_ID } from "@/lib/analytics";

/**
 * Consent Mode v2 default state. Must execute before the GTM container
 * script so every tag GTM fires (GA4, Google Ads, Meta, LinkedIn, UET —
 * configure these as tags inside the GTM container, not as separate
 * scripts here) starts out denied until CookieConsentBanner updates it.
 */
export function ConsentDefaults() {
  return (
    <Script id="consent-defaults" strategy="beforeInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        window.gtag = gtag;
        gtag('consent', 'default', {
          'ad_storage': 'denied',
          'ad_user_data': 'denied',
          'ad_personalization': 'denied',
          'analytics_storage': 'denied',
          'wait_for_update': 500
        });
      `}
    </Script>
  );
}

export function GoogleTagManagerScript() {
  if (!GTM_ID) return null;

  return (
    <Script id="gtm-container" strategy="beforeInteractive">
      {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
      `}
    </Script>
  );
}

export function GoogleTagManagerNoScript() {
  if (!GTM_ID) return null;

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        title="Google Tag Manager"
      />
    </noscript>
  );
}
