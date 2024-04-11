import type { Metadata } from "next";
import { Inter, Lato } from "next/font/google";

import "./globals.css";
import Providers from "./providers";

// const inter = Inter({ subsets: ["latin"] });

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
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
      <body className={lato.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
