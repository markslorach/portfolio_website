"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

// Components
import FormSubmitButton from "./FormSubmitButton";

// Server actions
import { sendEmail } from "../actions/sendEmail";

const ContactForm = () => {
  const { toast } = useToast();

  return (
    <form
      className="space-y-4 rounded-lg border p-5 border-gray-300 dark:border-gray-600"
      action={async (formData) => {
        await sendEmail(formData);
        toast({
          description: "Your message has been sent successfully.",
        });
        const form = document.querySelector("form");
        form ? form.reset() : null;
      }}
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-1">
          <Label className="font-semibold">Name</Label>
          <Input
            className="bg-transparent dark:bg-transparent border-gray-300 dark:border-gray-600"
            name="name"
            required
            placeholder="Name"
          />
        </div>
        <div className="space-y-1">
          <Label className="font-semibold">Email</Label>
          <Input
            className="bg-transparent dark:bg-transparent border-gray-300 dark:border-gray-600"
            name="email"
            required
            placeholder="Email"
            type="email"
          />
        </div>
      </div>
      <div className="space-y-1">
        <Label className="font-semibold">Message</Label>
        <Textarea
          className="h-44 bg-transparent dark:bg-transparent border-gray-300 dark:border-gray-600"
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
