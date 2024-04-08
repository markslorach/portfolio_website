import Image from "next/image";
import Link from "next/link";

// Icons
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";

// Components
import Heading from "./Heading";

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

      <article className="flex flex-col space-y-6">
        <Heading>
          Hello! I&apos;m{" "}
          <span className="text-[#8cbdf8]">
            <Link href="/about">Mark</Link>
          </span>
          .
        </Heading>

        <p className="text-3xl font-bold sm:text-balance w-full tracking-[0.015rem] text-gray-500 dark:text-gray-400">
        A full-stack JavaScript focused developer based in Scotland, specialising in creating fast, responsive, and user-friendly applications.
        </p>

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
