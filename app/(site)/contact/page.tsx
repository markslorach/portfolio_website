import Link from "next/link";
import Contact from "./Contact";

const ContactPage = () => {
  return (
    <section>
      <h1 className="hero-heading mb-20">
        <span className="underline decoration-blue-400 decoration-[8px] underline-offset-4">
          Contact
        </span>
        .
      </h1>
      <Contact />
    </section>
  );
};

export default ContactPage;
