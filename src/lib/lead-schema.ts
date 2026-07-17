import { z } from "zod";

export const leadFormSchema = z.object({
  fullName: z.string().trim().min(2, "Enter your full name.").max(100),
  practiceName: z.string().trim().min(2, "Enter your practice or clinic name.").max(150),
  email: z.email("Enter a valid work email."),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid phone number.")
    .max(20)
    .regex(/^[0-9+()\-.\s]+$/, "Enter a valid phone number."),
  // Honeypot: real visitors never fill this hidden field.
  companyWebsite: z.string().max(0).optional().or(z.literal("")),
});

export type LeadFormValues = z.infer<typeof leadFormSchema>;

export type LeadFormState = {
  status: "idle" | "error";
  message?: string;
  fieldErrors?: Partial<Record<keyof LeadFormValues, string>>;
  values?: Partial<Record<keyof LeadFormValues, string>>;
};

export const leadFormInitialState: LeadFormState = { status: "idle" };
