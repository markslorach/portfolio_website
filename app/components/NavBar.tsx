"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Components
import ThemeButton from "./ThemeButton";
import MobileNav from "./MobileMenu";

interface NavLinks {
  label: string;
  href: string;
}

export const navLinks: NavLinks[] = [
  { label: "about", href: "/about" },
  { label: "projects", href: "/projects" },
  { label: "blog", href: "/blog" },
  { label: "contact", href: "/contact" },
];

const NavBar = () => {
  const pathname = usePathname();

  return (
    <nav
      id="top"
      className="mx-auto flex h-24 max-w-2xl items-center justify-between px-4 md:px-0"
    >
      <div className="flex items-center space-x-12">
        <Link href="/">
          <h1 className="text-xl font-bold tracking-wide text-[#8cbdf8]">
            mark
            <span className="text-gray-500 dark:text-white/90">slorach</span>.
          </h1>
        </Link>

        <ul className="text-secondary flex gap-4 tracking-wide">
          {navLinks.map((link, idx) => (
            <li
              key={idx}
              className={
                pathname === link.href
                  ? "text-[#8cbdf8]"
                  : "text-gray-500 dark:text-gray-400"
              }
            >
              <Link
                className="hidden transition-colors hover:text-[#8cbdf8] sm:inline-flex"
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center space-x-3 sm:space-x-0">
        <MobileNav />
        <ThemeButton />
      </div>
    </nav>
  );
};

export default NavBar;
