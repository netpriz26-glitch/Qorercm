"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { CONSENT_COOKIE_NAME, updateConsent, type ConsentState } from "@/lib/analytics";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function getSnapshot() {
  return window.localStorage.getItem(CONSENT_COOKIE_NAME);
}

function getServerSnapshot() {
  return null;
}

export function CookieConsentBanner() {
  // Reads the stored choice as an external store so the value is correct
  // from the very first client render, with no setState-in-effect needed.
  const storedConsent = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  // Local override so clicking Accept/Decline hides the banner immediately,
  // without waiting on a "storage" event (which only fires in other tabs).
  const [choice, setChoice] = useState<ConsentState | null>(null);

  const consent = choice ?? storedConsent;

  useEffect(() => {
    if (consent === "granted") {
      updateConsent("granted");
    }
  }, [consent]);

  function choose(state: ConsentState) {
    window.localStorage.setItem(CONSENT_COOKIE_NAME, state);
    updateConsent(state);
    setChoice(state);
  }

  const visible = consent !== "granted" && consent !== "denied";

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 p-4 shadow-[0_-4px_16px_rgba(0,0,0,0.08)] backdrop-blur sm:p-5"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-slate-600">
          We use cookies to analyze traffic and improve your experience. Read our{" "}
          <a href="/cookie-policy" className="underline hover:text-slate-800">
            Cookie Policy
          </a>{" "}
          to learn more.
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => choose("denied")}
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => choose("granted")}
            className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-brand-700"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
