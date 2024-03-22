import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

// Icons
import { Send } from "lucide-react";

const Contact = () => {
  return (
    <section>
      <form className="rounded-lg border p-3">
        <div className="grid w-full grid-cols-1 items-center gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name" className="font-semibold">
              Name
            </Label>
            <Input className="py-6" type="name" id="name" placeholder="Name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="font-semibold">
              Email
            </Label>
            <Input className="py-6" type="email" id="email" placeholder="Email" />
          </div>
        </div>
        <div className="my-10 flex flex-col space-y-2">
          <Label htmlFor="message" className="font-semibold">
            Your message
          </Label>
          <Textarea className="py-3 h-40" placeholder="Type your message here." id="message" />
        </div>
        <Button type="submit" className="w-full">Get in touch<Send className="w-4 h-4 ml-2"/></Button>
      </form>
    </section>
  );
};

export default Contact;
