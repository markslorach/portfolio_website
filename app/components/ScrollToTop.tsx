"use client";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export default function ScrollToTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="mt-12 flex justify-end">
      <button
        title="Back to top"
        type="button"
        onClick={scrollToTop}
        className="rounded-lg bg-slate-200/60 p-2 transition-colors hover:bg-slate-200/80 dark:bg-white/10 hover:dark:bg-white/20"
      >
        <ChevronUpIcon className="h-7 w-7 sm:h-5 sm:w-5 " />
      </button>
    </div>
  );
}
