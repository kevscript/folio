"use server";

import { Resend } from "resend";
import { ContactFormState } from "./components/ContactForm";
import { contactSchema } from "./lib/schemas";

export async function contactAction(
  prevState: any,
  formData: FormData
): Promise<ContactFormState> {
  const formInput = Object.fromEntries(formData);
  const validFormData = contactSchema.safeParse(formInput);

  if (!validFormData.success) {
    return {
      message: "One or more form inputs are not valid.",
      errors: validFormData.error.flatten().fieldErrors,
    };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const fromDomain = process.env.RESEND_FROM_DOMAIN as string;
  const toEmail = process.env.RESEND_TO_EMAIL as string;
  const { error } = await resend.emails.send({
    from: `CONTACT FOLIO <contact@${fromDomain}>`,
    to: [toEmail],
    subject: `[FOLIO] - ${validFormData.data.name}`,
    html: `<h1>${validFormData.data.email}</h1>`,
  });

  if (error) {
    return {
      message: "Something went wrong, the email wasn't sent.",
    };
  }

  return {
    message: "success",
  };
}
