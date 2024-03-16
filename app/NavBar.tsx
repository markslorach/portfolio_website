"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Components
import ThemeButton from "./components/ThemeButton";
import MobileNav from "./MobileNav";

interface NavLinks {
  label: string;
  href: string;
}

export const navLinks: NavLinks[] = [
  { label: "about", href: "/about" },
  { label: "projects", href: "/projects" },
  { label: "blog", href: "/blog" },
];

const NavBar = () => {
  const pathname = usePathname();

  return (
    <nav className="m-auto flex h-24 max-w-2xl items-center justify-between px-4">
      <div className="flex items-center space-x-16">
        <Link href="/">
          <h1 className="text-xl font-bold tracking-wide text-blue-400">
            mark
            <span className="text-black/50 dark:text-white/70">slorach</span>.
          </h1>
        </Link>

        <ul className="flex gap-5 font-normal tracking-wide text-black/50 dark:text-white/70">
          {navLinks.map((link, idx) => (
            <li
              key={idx}
              className={pathname === link.href ? "text-blue-400" : ""}
            >
              <Link
                className="hidden text-base transition-colors hover:text-blue-400 sm:inline-flex"
                href={link.href}
              >
                {`/${link.label}`}
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
