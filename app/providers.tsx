"use client";
import { ThemeProvider } from "next-themes";

const Providers = ({ children }: { children: any }) => {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="light">
      {children}
    </ThemeProvider>
  );
};

export default Providers;
