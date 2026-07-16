import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z.string().trim().min(2, "Enter your full name.").max(100),
  email: z.email("Enter a valid email address."),
  message: z.string().trim().min(10, "Tell us a bit more — at least 10 characters.").max(2000),
  resource: z.string().max(100).optional().or(z.literal("")),
  companyWebsite: z.string().max(0).optional().or(z.literal("")),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export type ContactFormState = {
  status: "idle" | "error";
  message?: string;
  fieldErrors?: Partial<Record<keyof ContactFormValues, string>>;
  values?: Partial<Record<keyof ContactFormValues, string>>;
};

export const contactFormInitialState: ContactFormState = { status: "idle" };
