import { getBlogs } from "@/lib/fetchData";

// Components
import BlogList from "@/app/components/BlogList";

export const revalidate = 0;

const BlogPage = async () => {
  const blogs = await getBlogs();
  console.log(blogs)

  return (
    <section>
      <h1 className="hero-heading mb-20">
        <span className="underline decoration-blue-400 decoration-[8px] underline-offset-4">
          Blog
        </span>
        .
      </h1>
      {blogs.length > 0 ? (
        <BlogList blogs={blogs.slice(0, 4)} />
      ) : (
        <p className="mb-28 text-2xl font-bold text-black/50">Well this is embarrassing...</p>
      )}
    </section>
  );
};

export default BlogPage;
