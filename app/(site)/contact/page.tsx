import Link from "next/link";
import Contact from "./Contact";

const ContactPage = () => {
  return (
    <section>
        <h1 className="hero-heading mb-20">
          Contact
          <span className="text-blue-400">.</span>
        </h1>
      <Contact />
    </section>
  );
};

export default ContactPage;
