import { Toaster } from "react-hot-toast";

// Components
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex min-h-[100vh] flex-col">
      <header>
        <NavBar />
      </header>
      <div className="flex-grow">
        <main className="mx-auto mt-20 max-w-2xl px-4 md:px-0">{children}</main>
      </div>
      <footer className="mx-auto w-full max-w-2xl px-4 pt-28 md:px-0">
        <Footer />
      </footer>
      <Toaster position="top-right" />
    </section>
  );
}
