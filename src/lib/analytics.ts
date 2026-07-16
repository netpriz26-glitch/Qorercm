export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

export const CONSENT_COOKIE_NAME = "qorercm_consent";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Pushes an event to the GTM data layer. GA4, Google Ads, Meta, LinkedIn and
 * UET tags should all be configured as GTM tags that fire on these events —
 * see README.md "Analytics & tag configuration" for the trigger names.
 */
export function pushToDataLayer(payload: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push(payload);
}

export type ConsentState = "granted" | "denied";

export function updateConsent(state: ConsentState) {
  pushToDataLayer({
    event: "consent_update",
    ad_storage: state,
    ad_user_data: state,
    ad_personalization: state,
    analytics_storage: state,
  });
  // gtag reads consent updates directly (not just via dataLayer events), so
  // call it explicitly when available.
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("consent", "update", {
      ad_storage: state,
      ad_user_data: state,
      ad_personalization: state,
      analytics_storage: state,
    });
  }
}
