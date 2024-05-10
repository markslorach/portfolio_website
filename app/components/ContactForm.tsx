"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import toast from "react-hot-toast";

// Components
import FormSubmitButton from "./FormSubmitButton";

// Server actions
import { sendEmail } from "../actions/sendEmail";

const ContactForm = () => {
  return (
    <form
      className="space-y-4 rounded-md border border-gray-400 p-5 dark:border-gray-500"
      action={async (formData) => {
        await sendEmail(formData);
        toast.success("Message sent successfully!");
        const form = document.querySelector("form");
        form ? form.reset() : null;
      }}
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label className="font-semibold">Name</Label>
          <Input
            className="border-gray-400 bg-transparent dark:border-gray-500 dark:bg-transparent"
            name="name"
            required
            placeholder="Name"
          />
        </div>
        <div className="space-y-2">
          <Label className="font-semibold">Email</Label>
          <Input
            className="border-gray-400 bg-transparent dark:border-gray-500 dark:bg-transparent"
            name="email"
            required
            placeholder="Email"
            type="email"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label className="font-semibold">Message</Label>
        <Textarea
          className="max-h-96 min-h-44 border-gray-400 bg-transparent dark:border-gray-500 dark:bg-transparent"
          name="message"
          required
          placeholder="Message"
        />
      </div>
      <FormSubmitButton />
    </form>
  );
};

export default ContactForm;
