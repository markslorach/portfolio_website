import BlogList from "@/app/components/BlogList";
import { getBlogs } from "@/lib/fetchData";

// Components


export const revalidate = 0;

const BlogPage = async () => {
  const blogs = await getBlogs();

  return (
    <>
      <h1 className="hero-heading mb-20">
        <span className="underline decoration-blue-400 decoration-[8px] underline-offset-4">
          Blog
        </span>
        .
      </h1>
      <BlogList blogs={blogs} />
    </>
  );
};

export default BlogPage;
