import { Suspense } from "react";

// Components
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import BlogCard from "../components/BlogCard";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="flex justify-between mb-8">
        <h2 className="heading-h2">Recent Projects</h2>
        <Link className="text-black/70 flex-col justify-end font-medium underline decoration-blue-400 decoration-2 underline-offset-2 hidden sm:inline-flex" href="/projects">View projects</Link>
      </div>
      <Suspense fallback={<p>Add skeleton here</p>}>
        <ProjectCard />
      </Suspense>
      <div className="flex justify-between mb-8">
        <h2 className="heading-h2">Latest Posts</h2>
        <Link className="text-black/70 flex-col justify-end font-medium underline decoration-blue-400 decoration-2 underline-offset-2 hidden sm:inline-flex" href="/projects">View posts</Link>
      </div>
        <BlogCard />
    </main>
  );
}
