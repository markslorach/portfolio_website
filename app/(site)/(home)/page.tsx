import { Suspense } from "react";
import Link from "next/link";

// Components
import Hero from "../../components/Hero";
import { client } from "@/sanity/lib/client";
import HomeProjectList from "../../components/HomeProjectList";
import HomeBlogList from "../../components/HomeBlogList";

async function getProjects() {
  const query = `*[_type == "projects"] | order(_createdAt desc) {title, description, githubUrl, slug}`;
  const data = await client.fetch(query);
  return data;
}

async function getBlogs() {
  const query = `*[_type == "blog"] | order(_createdAt desc) {title, description, slug, createdAt}`;
  const data = await client.fetch(query);
  return data;
}

export default async function Home() {
  const projects = await getProjects();
  const blogs = await getBlogs();
  console.log(blogs);

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
        <HomeProjectList project={projects} />
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
      <HomeBlogList blogs={blogs} />
    </main>
  );
}
