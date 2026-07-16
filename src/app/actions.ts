"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  LEAD_COOKIE_NAME,
  leadFormSchema,
  type LeadFormState,
  type LeadFormValues,
} from "@/lib/lead-schema";
import {
  contactFormSchema,
  type ContactFormState,
  type ContactFormValues,
} from "@/lib/contact-schema";

async function forwardToWebhook(
  payload: Record<string, unknown>,
  source: string,
  logLabel: string
) {
  const webhookUrl = process.env.LEAD_WEBHOOK_URL;

  if (!webhookUrl) {
    // No CRM/webhook configured yet — log server-side so the submission
    // isn't silently lost during local development. Wire LEAD_WEBHOOK_URL
    // (Zapier, Make, HubSpot Forms API, etc.) before going live.
    console.info(`[${logLabel}] no LEAD_WEBHOOK_URL set:`, payload);
    return;
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...payload,
      source,
      submittedAt: new Date().toISOString(),
    }),
  });

  if (!response.ok) {
    throw new Error(`Webhook responded with ${response.status}`);
  }
}

export async function submitLeadForm(
  _prevState: LeadFormState,
  formData: FormData
): Promise<LeadFormState> {
  const raw = {
    fullName: String(formData.get("fullName") ?? ""),
    practiceName: String(formData.get("practiceName") ?? ""),
    email: String(formData.get("email") ?? ""),
    phone: String(formData.get("phone") ?? ""),
    companyWebsite: String(formData.get("companyWebsite") ?? ""),
  };

  const parsed = leadFormSchema.safeParse(raw);

  if (!parsed.success) {
    const fieldErrors: LeadFormState["fieldErrors"] = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as keyof LeadFormValues | undefined;
      if (key && key !== "companyWebsite" && !fieldErrors[key]) {
        fieldErrors[key] = issue.message;
      }
    }
    return {
      status: "error",
      message: "Please fix the highlighted fields and try again.",
      fieldErrors,
      values: raw,
    };
  }

  // Honeypot tripped: pretend to succeed without doing any work.
  if (parsed.data.companyWebsite) {
    redirect("/thank-you");
  }

  try {
    await forwardToWebhook(parsed.data, "qorercm-landing-page", "lead");
  } catch (error) {
    console.error("[lead] Failed to forward lead:", error);
    return {
      status: "error",
      message:
        "Something went wrong on our end. Please try again, or call us directly.",
      values: raw,
    };
  }

  // Hand the lead's contact details to the thank-you page for one read so it
  // can push them to the data layer for Google Ads Enhanced Conversions.
  // Short-lived and cleared immediately after that page reads it.
  const cookieStore = await cookies();
  cookieStore.set(LEAD_COOKIE_NAME, JSON.stringify(parsed.data), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60,
    path: "/",
  });

  redirect("/thank-you");
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const raw = {
    fullName: String(formData.get("fullName") ?? ""),
    email: String(formData.get("email") ?? ""),
    message: String(formData.get("message") ?? ""),
    resource: String(formData.get("resource") ?? ""),
    companyWebsite: String(formData.get("companyWebsite") ?? ""),
  };

  const parsed = contactFormSchema.safeParse(raw);

  if (!parsed.success) {
    const fieldErrors: ContactFormState["fieldErrors"] = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as keyof ContactFormValues | undefined;
      if (key && key !== "companyWebsite" && !fieldErrors[key]) {
        fieldErrors[key] = issue.message;
      }
    }
    return {
      status: "error",
      message: "Please fix the highlighted fields and try again.",
      fieldErrors,
      values: raw,
    };
  }

  if (parsed.data.companyWebsite) {
    redirect("/thank-you");
  }

  try {
    await forwardToWebhook(parsed.data, "qorercm-contact-page", "contact");
  } catch (error) {
    console.error("[contact] Failed to forward message:", error);
    return {
      status: "error",
      message:
        "Something went wrong on our end. Please try again, or email us directly.",
      values: raw,
    };
  }

  const cookieStore = await cookies();
  cookieStore.set(LEAD_COOKIE_NAME, JSON.stringify(parsed.data), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60,
    path: "/",
  });

  redirect("/thank-you");
}
