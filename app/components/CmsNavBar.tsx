import Link from "next/link";

const CmsNavBar = () => {
  return (
    <nav className="bg-white pl-3 pt-3">
      <Link href="/">
        <h1 className="text-xl font-bold tracking-wide text-blue-400">
          mark
          <span className="text-black/50">slorach</span>.
        </h1>
      </Link>
    </nav>
  );
};

export default CmsNavBar;
