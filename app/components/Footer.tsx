"use client";
import Link from "next/link";
import { socialLinks } from "./Hero";
import { navLinks } from "./NavBar";

const Footer = () => {
  return (
    <div className="m-auto flex max-w-2xl flex-col space-y-8 border-t border-black/10 py-8 text-center dark:border-white/70">
      <ul className="flex justify-center gap-4 tracking-wide text-black/50 dark:text-white/70">
        {navLinks.map((link, idx) => (
          <li key={idx}>
            <Link
              href={link.href}
              className="transition-colors hover:text-blue-400"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex justify-center space-x-4">
        {socialLinks.map((link, idx) => (
          <Link key={idx} href={link.href} target="_blank">
            {<link.icon className="h-6 w-6 text-black/40 dark:text-white/80" />}
          </Link>
        ))}
      </div>

      <small className="text-black/40">
        Built using Next.js, Typescript, Tailwind, Shadcn/ui and Sanity.io
      </small>
    </div>
  );
};

export default Footer;
