"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  const { data, error } = await resend.emails.send({
    from: `${name}<onboarding@resend.dev>`,
    to: "hello@markslorach.com",
    subject: `New message from ${email}`,
    reply_to: email as string,
    text: message as string,
  });

  if (error) {
    console.log(error);
  }

  return data;
};
