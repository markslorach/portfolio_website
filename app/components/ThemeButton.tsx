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
    <button
      aria-label="Toggle Theme"
      type="button"
      className="p-2 rounded-lg bg-slate-200"
      onClick={toggleTheme}
    >
      {resolvedTheme === "dark" ? (
        <SunIcon className="h-5 w-5 text-black/80" />
      ) : (
        <MoonIcon className="h-5 w-5 text-black/80" />
      )}
    </button>
  );
};

export default ThemeButton;
