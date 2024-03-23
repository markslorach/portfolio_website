// Component
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex min-h-screen flex-col">
      <header>
        <NavBar />
      </header>
      <div className="flex-grow">
        <main className="mx-auto mt-20 max-w-2xl px-4 md:px-0">{children}</main>
      </div>
      <footer className="mx-auto max-w-2xl px-4 pt-28 md:px-0">
        <Footer />
      </footer>
    </section>
  );
}
