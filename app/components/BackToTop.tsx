import { ChevronUpIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const BackToTop = () => {
  return (
    <div className="mt-12 flex justify-end">
      <Link
        href="#top"
        className="rounded-lg bg-slate-200/60 p-2 transition-colors hover:bg-slate-200/80 dark:bg-white/10 hover:dark:bg-white/20"
      >
        <ChevronUpIcon className="h-5 w-5" />
      </Link>
    </div>
  );
};

export default BackToTop;
