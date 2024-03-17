// Components
import Hero from "../components/Hero";

export default function Home() {
  return (
    <main>
      <Hero/>
      <section>
        <h2 className="heading-h2">Recent Projects</h2>
      </section>
      <section>
        <h2 className="heading-h2">Latest Posts</h2>
      </section>
    </main>
  );
}
