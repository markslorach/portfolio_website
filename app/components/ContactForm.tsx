'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

// Server actions
import { sendEmail } from "../actions/sendEmail";

const ContactForm = () => {
  return (
    <form className="space-y-4" action={ async (formData) => {
        await sendEmail(formData)
    }}>
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
      <Button
        variant="outline"
        className="bg-transparent dark:bg-transparent"
        type="submit"
      >
        Submit
      </Button>
    </form>
  );
};

export default ContactForm;
