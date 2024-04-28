import { getBlogs, getProjects } from "@/lib/fetchData";
import Link from "next/link";

// Interface
import { BlogPost, Project } from "@/app/utils/interface";

// Components
import Hero from "../../components/Hero";
import BlogList from "../../components/BlogList";
import ProjectList from "@/app/components/ProjectList";

export const revalidate = 0;

export default async function Home() {
  const projects: Project[] = await getProjects();
  const blogs: BlogPost[] = await getBlogs();

  return (
    <main>
      <Hero />

      <section>
        <div className="mb-8 flex justify-between">
          <h2 className="text-2xl font-bold leading-none">
            Recent <span className="dark:text-[#8cbdf8] text-blue-400">Projects</span>
          </h2>
          <Link
            className="hidden flex-col justify-end font-normal underline decoration-blue-400 dark:decoration-[#8cbdf8] decoration-1 underline-offset-[2.3px] sm:inline-flex"
            href="/projects#top"
          >
            View all projects
          </Link>
        </div>

        {projects.length > 0 ? (
          <ProjectList project={projects.slice(0, 4)} />
        ) : (
          <p className="text-2xl font-bold leading-none text-gray-500 dark:text-gray-400">
            Well this is embarrassing...
          </p>
        )}

        <div className="mb-20">
          <Link
            className="flex justify-end font-normal underline decoration-blue-400 dark:decoration-[#8cbdf8] decoration-1 underline-offset-[2.3px] sm:hidden"
            href="/projects#top"
          >
            View all projects
          </Link>
        </div>
      </section>

      <section>
        <div className="mb-8 flex justify-between">
          <h2 className="text-2xl font-bold leading-none">
            Latest <span className="dark:text-[#8cbdf8] text-blue-400">Posts</span>
          </h2>
          <Link
            className="hidden flex-col justify-end font-medium underline decoration-blue-400 dark:decoration-[#8cbdf8] decoration-1 underline-offset-[2.3px] sm:inline-flex"
            href="/blog#top"
          >
            View all posts
          </Link>
        </div>

        {blogs.length > 0 ? (
          <BlogList blogs={blogs.slice(0, 4)} />
        ) : (
          <p className="text-2xl font-bold leading-none text-gray-500 dark:text-gray-400">
            Well this is embarrassing...
          </p>
        )}
        {blogs.length > 0 && (
          <Link
            className="flex justify-end font-medium underline decoration-blue-400 dark:decoration-[#8cbdf8] decoration-1 underline-offset-[2.3px] sm:hidden"
            href="/blog#top"
          >
            View all posts
          </Link>
        )}
      </section>
    </main>
  );
}
