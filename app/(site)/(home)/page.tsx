import { getBlogs, getProjects } from "@/lib/fetchData";
import Link from "next/link";

// Interface
import { BlogPost, Project } from "@/app/utils/interface";

// Components
import Hero from "../../components/Hero";
import HomeProjectList from "../../components/HomeProjectList";
import BlogList from "../../components/BlogList";

export const revalidate = 0;

export default async function Home() {
  const projects: Project[] = await getProjects();
  const blogs: BlogPost[] = await getBlogs();

  return (
    <main>
      <div className="mb-28">
        <Hero />

        <div className="mb-8 flex justify-between">
          <h2 className="heading-h2">Recent Projects</h2>
          <Link
            className="hidden flex-col justify-end font-medium text-black/70 underline decoration-blue-400 decoration-2 underline-offset-2 sm:inline-flex"
            href="/projects#top"
          >
            View all projects
          </Link>
        </div>

        <HomeProjectList project={projects.slice(0, 4)} />
        <div className="mb-20">
          <Link
            className="font-medium text-black/70 underline decoration-blue-400 decoration-2 underline-offset-2 sm:hidden"
            href="/projects#top"
          >
            View all projects
          </Link>
        </div>

        <div className="mb-8 flex justify-between">
          <h2 className="heading-h2">Latest Posts</h2>
          <Link
            className="hidden flex-col justify-end font-medium text-black/70 underline decoration-blue-400 decoration-2 underline-offset-2 sm:inline-flex"
            href="/blog#top"
          >
            View all posts
          </Link>
        </div>

        <BlogList blogs={blogs.slice(0, 4)} />
        <Link
          className="font-medium text-black/70 underline decoration-blue-400 decoration-2 underline-offset-2 sm:hidden"
          href="/blog#top"
        >
          View all posts
        </Link>
      </div>
    </main>
  );
}
