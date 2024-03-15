import Link from "next/link";
import { usePathname } from "next/navigation";

// Components
import ThemeButton from "./components/ThemeButton";

interface NavLinks {
  label: string;
  href: string;
}

const navLinks: NavLinks[] = [
  { label: "about", href: "/about" },
  { label: "projects", href: "/projects" },
  { label: "blog", href: "/blog" },
];

const NavBar = () => {
  //   const pathname = usePathname();

  return (
    <nav className="m-auto flex h-20 max-w-3xl items-center justify-between border-b">
      <div className="flex items-center space-x-12">
        <Link href="/">
          <h1 className="text-2xl font-bold">markslorach.</h1>
        </Link>

        <ul className="flex space-x-4">
          {navLinks.map((link, idx) => (
            <li key={idx}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <ThemeButton />
    </nav>
  );
};

export default NavBar;
