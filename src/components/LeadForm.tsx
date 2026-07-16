"use client";

import { useActionState, useId } from "react";
import { useFormStatus } from "react-dom";
import { submitLeadForm } from "@/app/actions";
import { leadFormInitialState } from "@/lib/lead-schema";
import { siteConfig } from "@/lib/site-config";
import { ShieldCheck } from "lucide-react";
import { Magnetic } from "@/components/ui/Magnetic";
import { buttonStyles } from "@/components/ui/button-styles";
import { cn } from "@/lib/cn";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Magnetic className="w-full">
      <button
        type="submit"
        disabled={pending}
        className={cn(buttonStyles({ variant: "primary", size: "lg" }), "w-full")}
      >
        {pending ? "Submitting…" : siteConfig.offer.ctaLabel}
      </button>
    </Magnetic>
  );
}

export function LeadForm({
  compact = false,
  tone = "light",
}: {
  compact?: boolean;
  tone?: "light" | "dark";
}) {
  const [state, formAction] = useActionState(submitLeadForm, leadFormInitialState);
  const idPrefix = useId();
  const isDark = tone === "dark";

  const fieldClass = cn(
    "w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500/40",
    isDark
      ? "border-white/15 bg-white/10 text-white placeholder:text-slate-400 focus:border-accent-400"
      : "border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-brand-600"
  );
  const errorClass = cn("mt-1 text-sm", isDark ? "text-red-400" : "text-red-600");

  return (
    <form action={formAction} noValidate className="w-full space-y-4">
      {!compact && (
        <div className="space-y-1">
          <h3 className={cn("text-xl font-bold", isDark ? "text-white" : "text-slate-900")}>
            {siteConfig.offer.formTitle}
          </h3>
          <p className={cn("text-sm", isDark ? "text-slate-300" : "text-slate-600")}>
            {siteConfig.offer.formSubtitle}
          </p>
        </div>
      )}

      {/* Honeypot field — hidden from real users via CSS, catches simple bots. */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor={`${idPrefix}-company-website`}>Website</label>
        <input
          id={`${idPrefix}-company-website`}
          type="text"
          name="companyWebsite"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div>
        <label htmlFor={`${idPrefix}-fullName`} className="sr-only">
          Full name
        </label>
        <input
          id={`${idPrefix}-fullName`}
          name="fullName"
          type="text"
          required
          placeholder="Full name"
          defaultValue={state.values?.fullName}
          autoComplete="name"
          className={fieldClass}
          aria-invalid={Boolean(state.fieldErrors?.fullName)}
          aria-describedby={
            state.fieldErrors?.fullName ? `${idPrefix}-fullName-error` : undefined
          }
        />
        {state.fieldErrors?.fullName && (
          <p id={`${idPrefix}-fullName-error`} className={errorClass}>
            {state.fieldErrors.fullName}
          </p>
        )}
      </div>

      <div>
        <label htmlFor={`${idPrefix}-practiceName`} className="sr-only">
          Practice or clinic name
        </label>
        <input
          id={`${idPrefix}-practiceName`}
          name="practiceName"
          type="text"
          required
          placeholder="Practice / clinic name"
          defaultValue={state.values?.practiceName}
          autoComplete="organization"
          className={fieldClass}
          aria-invalid={Boolean(state.fieldErrors?.practiceName)}
          aria-describedby={
            state.fieldErrors?.practiceName
              ? `${idPrefix}-practiceName-error`
              : undefined
          }
        />
        {state.fieldErrors?.practiceName && (
          <p
            id={`${idPrefix}-practiceName-error`}
            className={errorClass}
          >
            {state.fieldErrors.practiceName}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={`${idPrefix}-email`} className="sr-only">
            Work email
          </label>
          <input
            id={`${idPrefix}-email`}
            name="email"
            type="email"
            required
            placeholder="Work email"
            defaultValue={state.values?.email}
            autoComplete="email"
            className={fieldClass}
            aria-invalid={Boolean(state.fieldErrors?.email)}
            aria-describedby={
              state.fieldErrors?.email ? `${idPrefix}-email-error` : undefined
            }
          />
          {state.fieldErrors?.email && (
            <p id={`${idPrefix}-email-error`} className={errorClass}>
              {state.fieldErrors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor={`${idPrefix}-phone`} className="sr-only">
            Phone number
          </label>
          <input
            id={`${idPrefix}-phone`}
            name="phone"
            type="tel"
            required
            placeholder="Phone number"
            defaultValue={state.values?.phone}
            autoComplete="tel"
            className={fieldClass}
            aria-invalid={Boolean(state.fieldErrors?.phone)}
            aria-describedby={
              state.fieldErrors?.phone ? `${idPrefix}-phone-error` : undefined
            }
          />
          {state.fieldErrors?.phone && (
            <p id={`${idPrefix}-phone-error`} className={errorClass}>
              {state.fieldErrors.phone}
            </p>
          )}
        </div>
      </div>

      <p aria-live="polite" className={cn("min-h-[1.25rem] text-sm", errorClass)}>
        {state.status === "error" ? state.message : ""}
      </p>

      <SubmitButton />

      <p
        className={cn(
          "flex items-center gap-1.5 text-xs",
          isDark ? "text-slate-400" : "text-slate-500"
        )}
      >
        <ShieldCheck
          className={cn("h-3.5 w-3.5 shrink-0", isDark ? "text-accent-400" : "text-brand-600")}
          aria-hidden="true"
        />
        Your information is confidential and HIPAA-compliant. No spam, ever. See our{" "}
        <a
          href="/privacy-policy"
          className={cn("underline", isDark ? "hover:text-white" : "hover:text-slate-700")}
        >
          Privacy Policy
        </a>
        .
      </p>
    </form>
  );
}
