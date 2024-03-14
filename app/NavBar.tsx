import Link from "next/link";

// Components
import ThemeButton from "./components/ThemeButton";

const NavBar = () => {
  return (
    <div className="flex justify-between">
      <Link href="/">Home</Link>
      <ThemeButton />
    </div>
  );
};

export default NavBar;
