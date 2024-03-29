import Link from "next/link";

const StudioNavBar = () => {
  return (
    <nav className="bg-white pl-3 py-2 border-b">
      <Link href="/">
        <h1 className="text-xl font-bold tracking-wide text-blue-400">
          mark
          <span className="text-black/50">slorach</span>.
        </h1>
      </Link>
    </nav>
  );
};

export default StudioNavBar;
