import type { Metadata } from "next";
import { Raleway } from "next/font/google";

import "./globals.css";
import Providers from "./providers";

export const raleway = Raleway({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mark Slorach - Software Developer",
  description: "A Scotland-based full-stack developer focused on modern JavaScript development. I specialise in creating fast, responsive, and user-friendly applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={raleway.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
