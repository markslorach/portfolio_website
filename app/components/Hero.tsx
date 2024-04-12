import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Icons
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";

// Components
import Heading from "./Heading";
import About from "./About";

export const socialLinks = [
  { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/markslorach/" },
  { icon: FaGithub, href: "https://github.com/markslorach" },
];

const Hero = () => {
  return (
    <section className="mb-28">
      <figure>
        <Image
          src="/images/me.png"
          alt="Mark Slorach Avatar"
          width={400}
          height={400}
          quality={75}
          priority
          className="mb-2 h-16 w-16 rounded-lg"
        />
      </figure>

      <article className="flex flex-col">
        <div className="space-y-6">
          <Heading>
            Hello! I&apos;m{" "}
            <span className="text-blue-400 dark:text-[#8cbdf8]">Mark</span>.
          </Heading>

          <p className="w-full text-xl font-bold tracking-[0.015rem] text-gray-500 dark:text-gray-400">
            A Scotland-based full-stack developer focused on modern JavaScript
            development. I specialise in creating fast, responsive, and
            user-friendly applications.
          </p>
        </div>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="my-2 border-none">
            <AccordionTrigger className="text-lg font-bold hover:no-underline">
              Read more
            </AccordionTrigger>
            <AccordionContent>
              <About />
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="flex space-x-2 pt-1">
          {socialLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              target="_blank"
              className="rounded-lg bg-slate-200/60 p-2 dark:bg-white/10"
            >
              <link.icon className="h-6 w-6" />
            </Link>
          ))}
        </div>
      </article>
    </section>
  );
};

export default Hero;
