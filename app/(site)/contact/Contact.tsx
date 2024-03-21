import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <form>
      <div className="grid w-full grid-cols-2 items-center space-x-4">
        <div className="flex flex-col space-y-2">
          <Label htmlFor="name" className="font-semibold">
            Name
          </Label>
          <Input type="name" id="name" placeholder="Name" />
        </div>
        <div className="flex flex-col space-y-2">
          <Label htmlFor="email" className="font-semibold">
            Email
          </Label>
          <Input type="email" id="email" placeholder="Email" />
        </div>
      </div>
      <div className="my-10 flex flex-col space-y-2">
        <Label htmlFor="message" className="font-semibold">
          Your message
        </Label>
        <Textarea placeholder="Type your message here." id="message" />
      </div>
      <Button>Send</Button>
    </form>
  );
};

export default Contact;
