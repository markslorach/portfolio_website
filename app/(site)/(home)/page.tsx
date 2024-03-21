import { getBlogs, getProjects } from "@/lib/fetchData";
import Link from "next/link";

// Interface
import { BlogPost, Project } from "@/app/utils/interface";

// Components
import Hero from "../../components/Hero";
import HomeProjectList from "../../components/HomeProjectList";
import HomeBlogList from "../../components/HomeBlogList";

export const revalidate = 0;

export default async function Home() {
  const projects: Project[] = await getProjects();
  const blogs: BlogPost[] = await getBlogs();

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

      <HomeProjectList project={projects.slice(0, 4)} />

      <div className="mb-8 flex justify-between">
        <h2 className="heading-h2">Latest Posts</h2>
        <Link
          className="hidden flex-col justify-end font-medium text-black/70 underline decoration-blue-400 decoration-2 underline-offset-2 sm:inline-flex"
          href="/blog"
        >
          View posts
        </Link>
      </div>

      <HomeBlogList blogs={blogs.slice(0, 4)} />
    </main>
  );
}
