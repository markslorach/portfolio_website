"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

// Icons
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

const ThemeButton = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  if (!mounted) return null;

  return (
    <>
    
    <button
      aria-label="Toggle Theme"
      type="button"
      className="rounded-lg bg-slate-200 p-2"
      onClick={toggleTheme}
    >
      {resolvedTheme === "dark" ? (
        <SunIcon className="h-4 w-4 text-black/80" />
      ) : (
        <MoonIcon className="h-4 w-4 text-black/80" />
      )}
    </button>
    </>
  );
};

export default ThemeButton;
