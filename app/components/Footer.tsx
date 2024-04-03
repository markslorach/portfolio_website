"use client";
import Link from "next/link";

// Icons
import { socialLinks } from "./Hero";
import { navLinks } from "./NavBar";

const Footer = () => {
  return (
    <div className="space-y-8 border-t border-black/10 py-8 text-center dark:border-white/70">
      <ul className="flex justify-center space-x-4 tracking-wide">
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
            {
              <link.icon className="h-6 w-6" />
            }
          </Link>
        ))}
      </div>
      <div>
        <small className="">
          Built using{" "}
          <Link
            href="https://nextjs.org/"
            target="_blank"
            className="font-bold"
          >
            Next.js
          </Link>
          ,{" "}
          <Link
            href="https://tailwindcss.com/"
            target="_blank"
            className="font-bold"
          >
            Tailwind
          </Link>
          ,{" "}
          <Link
            href="https://www.typescriptlang.org/"
            target="_blank"
            className="font-bold"
          >
            TypeScript
          </Link>
          , and{" "}
          <Link
            href="https://www.sanity.io/"
            target="_blank"
            className="font-bold"
          >
            Sanity.io
          </Link>
          .
        </small>
      </div>
    </div>
  );
};

export default Footer;
