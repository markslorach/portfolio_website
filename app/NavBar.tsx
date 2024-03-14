import Link from "next/link";

// Components
import ThemeButton from "./components/ThemeButton";

const NavBar = () => {
  return (
    <nav className="container flex justify-between items-center m-auto max-w-6xl">
      <Link href="/">Home</Link>
      <ThemeButton />
    </nav>
  );
};

export default NavBar;
