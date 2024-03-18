import { Suspense } from "react";
import Link from "next/link";

// Components
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import BlogCard from "../components/BlogCard";
import { client } from "@/sanity/lib/client";

async function getData() {
  const query = `*[_type == "projects"] | order(_createdAt desc) {title, description, githubUrl}`;
  const data = await client.fetch(query);
  return data;
}

export default async function Home() {
  const projects = await getData();
  // console.log(projects);

  return (
    <main>
      <Hero />
      <div className="mb-8 flex justify-between">
        <h2 className="heading-h2">Recent Projects</h2>
        <Link
          className="hidden flex-col justify-end font-medium text-black/70 underline decoration-blue-400 decoration-2 underline-offset-2 sm:inline-flex"
          href="/projects"
        >
          View projects
        </Link>
      </div>
      <Suspense fallback={<p>Add skeleton here</p>}>
        <ProjectCard project={projects} />
      </Suspense>
      <div className="mb-8 flex justify-between">
        <h2 className="heading-h2">Latest Posts</h2>
        <Link
          className="hidden flex-col justify-end font-medium text-black/70 underline decoration-blue-400 decoration-2 underline-offset-2 sm:inline-flex"
          href="/blog"
        >
          View posts
        </Link>
      </div>
      <BlogCard />
    </main>
  );
}
