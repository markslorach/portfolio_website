import Image from "next/image";

// Icons
import { Github, Linkedin } from "lucide-react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";

import Link from "next/link";

const Hero = () => {
  return (
    <section className="mb-24">
      <figure>
        <Image
          src="/images/me.png"
          alt="Mark Slorach avatar"
          width={400}
          height={400}
          className="mb-2 h-20 w-20 rounded-lg"
          priority={true}
        />
      </figure>

      <h1 className="heading-h1 mb-8">
        Hello, I&apos;m{" "}
        <span className="underline decoration-blue-400 decoration-[6px] underline-offset-4">
          Mark
        </span>
        .
      </h1>
      <p className="font-base mb-8 line-clamp-3 leading-relaxed tracking-[0.015rem] text-black/70 dark:text-white/70">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed lectus
        nisi. Sed sit amet tincidunt purus. Fusce molestie dui ullamcorper nulla
        facilisis ornare. In in facilisis lorem. Vivamus mattis, tellus ac
        molestie mollis, est magna vestibulum ante.
      </p>
      <div className="flex space-x-2 text-black/70 dark:text-white/70">
        <Link className="rounded-lg bg-slate-200 p-2 dark:bg-white/10" href="/">
          <FaGithub className="h-6 w-6" />
        </Link>
        <Link className="rounded-lg bg-slate-200 p-2 dark:bg-white/10" href="/">
          <FaLinkedinIn className="h-6 w-6" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
