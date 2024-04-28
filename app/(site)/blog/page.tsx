import { getBlogs } from "@/lib/fetchData";

// Interface
import { BlogPost } from "@/app/utils/interface";

// Components
import BlogList from "@/app/components/BlogList";
import Heading from "@/app/components/Heading";

export const revalidate = 0;

const BlogPage = async () => {
  const blogs: BlogPost[] = await getBlogs();
  console.log(blogs);

  return (
    <section>
     <Heading className="mb-12">
        Blog<span className="dark:text-[#8cbdf8] text-blue-400">.</span>
      </Heading>

      {blogs.length > 0 ? (
        <BlogList blogs={blogs.slice(0, 4)} />
      ) : (
        <p className="text-2xl font-bold leading-none text-black/50">
          Well this is embarrassing...
        </p>
      )}
    </section>
  );
};

export default BlogPage;
