"use client";

import { useActionState, useId } from "react";
import { useFormStatus } from "react-dom";
import { useSearchParams } from "next/navigation";
import { submitContactForm } from "@/app/actions";
import { contactFormInitialState } from "@/lib/contact-schema";
import { resources } from "@/lib/content/resources";
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
        {pending ? "Sending…" : "Send Message"}
      </button>
    </Magnetic>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, contactFormInitialState);
  const idPrefix = useId();
  const searchParams = useSearchParams();
  const resourceSlug = searchParams.get("resource");
  const requestedResource = resources.find((r) => r.slug === resourceSlug);

  const fieldClass =
    "w-full rounded-lg border border-white/15 bg-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:border-accent-400 focus:outline-none focus:ring-2 focus:ring-brand-500/40";
  const errorClass = "mt-1 text-sm text-red-400";

  return (
    <form action={formAction} noValidate className="w-full space-y-4">
      {requestedResource && (
        <input type="hidden" name="resource" value={requestedResource.title} />
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

      {requestedResource && (
        <p className="rounded-lg border border-brand-400/30 bg-brand-500/10 px-3 py-2 text-xs text-brand-200">
          Requesting: <strong>{requestedResource.title}</strong>
        </p>
      )}

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
        />
        {state.fieldErrors?.fullName && <p className={errorClass}>{state.fieldErrors.fullName}</p>}
      </div>

      <div>
        <label htmlFor={`${idPrefix}-email`} className="sr-only">
          Email
        </label>
        <input
          id={`${idPrefix}-email`}
          name="email"
          type="email"
          required
          placeholder="Email address"
          defaultValue={state.values?.email}
          autoComplete="email"
          className={fieldClass}
          aria-invalid={Boolean(state.fieldErrors?.email)}
        />
        {state.fieldErrors?.email && <p className={errorClass}>{state.fieldErrors.email}</p>}
      </div>

      <div>
        <label htmlFor={`${idPrefix}-message`} className="sr-only">
          Message
        </label>
        <textarea
          id={`${idPrefix}-message`}
          name="message"
          required
          rows={5}
          placeholder={
            requestedResource
              ? `I'd like to receive "${requestedResource.title}."`
              : "How can we help?"
          }
          defaultValue={state.values?.message}
          className={fieldClass}
          aria-invalid={Boolean(state.fieldErrors?.message)}
        />
        {state.fieldErrors?.message && <p className={errorClass}>{state.fieldErrors.message}</p>}
      </div>

      <p aria-live="polite" className={cn("min-h-[1.25rem] text-sm", errorClass)}>
        {state.status === "error" ? state.message : ""}
      </p>

      <SubmitButton />
    </form>
  );
}
