"use client";

// UI Components
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

// Server actions
import { sendEmail } from "../actions/sendEmail";
import FormSubmitButton from "./FormSubmitButton";

const ContactForm = () => {
  const { toast } = useToast();

  return (
    <form
      className="space-y-4"
      action={async (formData) => {
        await sendEmail(formData);
        toast({
          description: "Your message has been sent successfully.",
        });
        const form = document.querySelector("form");
        if (form) {
          form.reset();
        }
      }}
    >
      <div className="space-y-1">
        <Label>Name</Label>
        <Input
          className="bg-transparent dark:bg-transparent"
          name="name"
          required
          placeholder="Name"
        />
      </div>
      <div className="space-y-1">
        <Label>Email</Label>
        <Input
          className="bg-transparent dark:bg-transparent"
          name="email"
          required
          placeholder="Email"
          type="email"
        />
      </div>
      <div className="space-y-1">
        <Label>Message</Label>
        <Textarea
          className="bg-transparent dark:bg-transparent"
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
