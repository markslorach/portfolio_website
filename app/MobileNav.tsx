import Link from "next/link";
import { navLinks } from "./NavBar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Icons
import { Bars3Icon } from "@heroicons/react/24/solid";

const MobileNav = () => {
  return (
    <div className="sm:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Bars3Icon className="h-8 w-8 cursor-pointer" />
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-48 rounded-lg border-none shadow-sm dark:bg-slate-800"
          align="end"
          forceMount
        >
          <DropdownMenuGroup>
            {navLinks.map((link, idx) => (
              <DropdownMenuItem
                asChild
                key={idx}
                className="py-2 pl-3 text-lg font-normal text-black/50 dark:text-white/70 dark:focus:bg-white/10"
              >
                <Link href={link.href}>{`/${link.label}`}</Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default MobileNav;
