import { Suspense } from "react";

// Components
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import BlogCard from "../components/BlogCard";

export default function Home() {
  return (
    <main>
      <Hero />
      <h2 className="heading-h2 mb-8">Recent Projects</h2>
      <Suspense fallback={<p>Add skeleton here</p>}>
        <ProjectCard />
      </Suspense>
      <h2 className="heading-h2 mb-8">Latest Posts</h2>
      <BlogCard />
    </main>
  );
}
