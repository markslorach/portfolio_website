import NavBar from "./NavBar";

export default function SiteLayout({ children }: any) {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="m-auto mt-20 max-w-2xl px-4 md:px-0">{children}</main>
      <footer></footer>
    </>
  );
}
