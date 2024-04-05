// Components
import ContactForm from "@/app/components/ContactForm";
import Heading from "@/app/components/Heading";

const ContactPage = () => {
  return (
    <section>
      <Heading className="mb-20">
        Contact<span className="text-[#8cbdf8]">.</span>
      </Heading>

      <ContactForm />
    </section>
  );
};

export default ContactPage;
