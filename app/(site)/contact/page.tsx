import Link from "next/link";
import Contact from "./Contact";

const ContactPage = () => {
  return (
    <div className="mb-28">
      <h1 className="heading-h1 mb-8">
        <span className="underline decoration-blue-400 decoration-[5px] underline-offset-4">
          Contact
        </span>
        .
      </h1>
      <Contact />
    </div>
  );
};

export default ContactPage;
