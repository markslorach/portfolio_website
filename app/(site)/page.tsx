// Components
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <main>
      <Hero />
      <h2 className="heading-h2 mb-8">Recent Projects</h2>
      <ProjectCard />

      <section>
        <h2 className="heading-h2">Latest Posts</h2>
      </section>
    </main>
  );
}
