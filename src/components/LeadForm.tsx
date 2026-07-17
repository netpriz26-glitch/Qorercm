"use client";

import { useId, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { forwardLead, LEAD_STORAGE_KEY } from "@/lib/client-lead-submit";
import { leadFormInitialState, leadFormSchema, type LeadFormValues } from "@/lib/lead-schema";
import { siteConfig } from "@/lib/site-config";
import { ShieldCheck } from "lucide-react";
import { Magnetic } from "@/components/ui/Magnetic";
import { buttonStyles } from "@/components/ui/button-styles";
import { cn } from "@/lib/cn";

function SubmitButton({ pending }: { pending: boolean }) {
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
  const [state, setState] = useState(leadFormInitialState);
  const [pending, setPending] = useState(false);
  const router = useRouter();
  const idPrefix = useId();
  const isDark = tone === "dark";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const raw = {
      fullName: String(formData.get("fullName") ?? ""),
      practiceName: String(formData.get("practiceName") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      companyWebsite: String(formData.get("companyWebsite") ?? ""),
    };

    const parsed = leadFormSchema.safeParse(raw);

    if (!parsed.success) {
      const fieldErrors: Partial<Record<keyof LeadFormValues, string>> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof LeadFormValues | undefined;
        if (key && key !== "companyWebsite" && !fieldErrors[key]) {
          fieldErrors[key] = issue.message;
        }
      }
      setState({ status: "error", message: "Please fix the highlighted fields and try again.", fieldErrors, values: raw });
      return;
    }

    // Honeypot tripped: pretend to succeed without doing any work.
    if (parsed.data.companyWebsite) {
      router.push("/thank-you");
      return;
    }

    setPending(true);
    try {
      await forwardLead(parsed.data, "qorercm-landing-page");
      sessionStorage.setItem(LEAD_STORAGE_KEY, JSON.stringify(parsed.data));
      router.push("/thank-you");
    } catch (error) {
      console.error("[lead] Failed to forward lead:", error);
      setState({
        status: "error",
        message: "Something went wrong on our end. Please try again, or call us directly.",
        values: raw,
      });
    } finally {
      setPending(false);
    }
  }

  const fieldClass = cn(
    "w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500/40",
    isDark
      ? "border-white/15 bg-white/10 text-white placeholder:text-slate-400 focus:border-accent-400"
      : "border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-brand-600"
  );
  const errorClass = cn("mt-1 text-sm", isDark ? "text-red-400" : "text-red-600");

  return (
    <form onSubmit={handleSubmit} noValidate className="w-full space-y-4">
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

      <SubmitButton pending={pending} />

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
