import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Components
import NavBar from "./NavBar";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <header>
            <NavBar />
          </header>
          <main className="m-auto max-w-2xl pt-24">{children}</main>
          <footer></footer>
        </Providers>
      </body>
    </html>
  );
}
