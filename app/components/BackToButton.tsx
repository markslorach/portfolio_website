import Link from "next/link";

// Icons
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

interface Props {
  href: string;
  text: string;
}

const BackToButton = ({ href, text }: Props) => {
  return (
    <Link
      href={href}
      className="group mb-14 flex w-fit items-center font-normal tracking-normal text-gray-500 transition-colors hover:text-black/80 dark:text-gray-400 dark:hover:text-white/90"
    >
      <ChevronLeftIcon className="mr-1 h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
      {text}
    </Link>
  );
};

export default BackToButton;
