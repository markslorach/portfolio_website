// Components
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function SiteLayout({ children }: any) {
  return (
    <div className="flex min-h-[98vh] flex-col">
      <header>
        <NavBar />
      </header>
      <main className="flex-grow">
        <div className="mx-auto mt-20 max-w-2xl px-4 md:px-0">{children}</div>
      </main>
      <footer>
        <div className="mx-auto max-w-2xl px-4 md:px-0">
          <Footer />
        </div>
      </footer>
    </div>
  );
}
