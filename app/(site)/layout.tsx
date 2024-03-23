// Component
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <header>
        <NavBar />
      </header>
      <main className="mx-auto mt-20 max-w-2xl px-4 md:px-0">{children}</main>
      <footer className="pt-28 mx-auto max-w-2xl px-4 md:px-0">
        <Footer />
      </footer>
    </section>
  );
}
