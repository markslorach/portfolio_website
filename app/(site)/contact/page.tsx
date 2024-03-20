import Link from "next/link";

const ContactPage = () => {
  return (
    <div className="mb-28">
      <h1 className="heading-h2 mb-8">
        <span className="underline decoration-blue-400 decoration-[5px] underline-offset-4">
          Contact
        </span>
        .
      </h1>
      <Link href="mailto:hello@markslorach" className="font-medium">hello@markslorach</Link>
    </div>
  );
};

export default ContactPage;
