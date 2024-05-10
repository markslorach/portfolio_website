"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

// Icons
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

const ThemeButton = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) return null;

  return (
    <>
      <button
        aria-label="Toggle Theme"
        type="button"
        className="rounded-md bg-slate-200/60 hover:bg-slate-200 p-2 transition-colors dark:bg-white/10 dark:hover:bg-white/15"
        onClick={toggleTheme}
      >
        {theme === "dark" ? (
          <SunIcon className="h-5 w-5" />
        ) : (
          <MoonIcon className="h-5 w-5" />
        )}
      </button>
    </>
  );
};

export default ThemeButton;
