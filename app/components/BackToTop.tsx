import { ChevronUpIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const BackToTop = () => {
  return (
    <div className="flex justify-end mt-16">
      <Link href="#top" className="rounded-lg p-2 bg-slate-200/60 dark:bg-white/10 hover:bg-slate-200/80 hover:dark:bg-white/20 transition-colors">
        <ChevronUpIcon className="h-5 w-5" />
      </Link>
    </div>
  );
};

export default BackToTop;
