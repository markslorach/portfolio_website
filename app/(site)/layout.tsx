// Component
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function SiteLayout({ children }: {children: React.ReactNode}) {
  return (
    <main className="flex min-h-screen flex-col">
      <header >
        <NavBar />
      </header>
      <section className="flex-grow">
        <div className="mx-auto mt-20 max-w-2xl px-4 md:px-0">
          {children}
        </div>
      </section>
      <footer>
        <div className="mx-auto max-w-2xl px-4 md:px-0">
          <Footer />
        </div>
      </footer>
    </main>
  );
}
