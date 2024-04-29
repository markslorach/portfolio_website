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
        <Heading className="mb-5 text-[46px] sm:text-5xl">
          Hello! I&apos;m{" "}
          <span className="text-blue-400 dark:text-[#8cbdf8]">Mark</span>.
        </Heading>
        <h2 className="mb-5 w-full text-pretty text-xl font-semibold leading-normal tracking-wide text-gray-700 dark:text-gray-300">
          {" "}
          A Scotland-based full-stack software developer focused on building
          modern and user-friendly web applications.
        </h2>

        <Accordion type="single" collapsible className="mb-5">
          <AccordionItem value="item-1" className=" border-none">
            <AccordionTrigger className="text-base font-medium text-gray-500 transition-colors hover:text-gray-700 hover:no-underline dark:text-gray-400 dark:hover:text-gray-300">
              Read more
            </AccordionTrigger>
            <AccordionContent>
              <About />
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="flex space-x-2 pt-2">
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
