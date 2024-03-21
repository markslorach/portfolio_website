import Image from "next/image";
import Link from "next/link";

// Icons
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";

export const socialLinks = [
  { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/markslorach/" },
  { icon: FaGithub, href: "https://github.com/markslorach" },
];

const Hero = () => {
  return (
    <section className="mb-24">
      <figure>
        <Image
          src="/images/me.png"
          alt="Mark Slorach Avatar"
          width={400}
          height={400}
          className="mb-2 h-20 w-20 rounded-lg"
          priority={true}
        />
      </figure>
      <div className="flex flex-col space-y-8">
        <h1 className="heading-h1">
          Hello, I&apos;m{" "}
          <span>
            <Link
              className="underline decoration-blue-400 decoration-[6px] underline-offset-4"
              href="/about"
            >
              Mark
            </Link>
          </span>
          .
        </h1>
        <p className="line-clamp-3 w-full text-wrap leading-relaxed tracking-[0.015rem] text-black/70 dark:text-white/70">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed
          lectus nisi. Sed sit amet tincidunt purus. Fusce molestie dui
          ullamcorper nulla facilisis ornare. In in facilisis lorem. Vivamus
          mattis, tellus ac molestie mollis, est magna vestibulum ante.
        </p>
        <div className="flex space-x-2">
          {socialLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              target="_blank"
              className="rounded-lg bg-slate-200/60 p-2 dark:bg-white/10"
            >
              {
                <link.icon className="h-6 w-6 text-black/70 dark:text-white/80" />
              }
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
