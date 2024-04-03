//Interface
import { BlogPost } from "../utils/interface";

//Components
import BlogCard from "./BlogCard";

const BlogList = ({ blogs }: { blogs: BlogPost[] }) => {
  
  return (
    <section className="mb-4 sm:mb-0">
      <div className="flex flex-col space-y-3">
        {blogs.map((post) => (
          <BlogCard key={post._id} post={post} />
        ))}
      </div>
    </section>
  );
};

export default BlogList;
