import BlogList from "./BlogList";

const BlogPage = () => {
  return (
    <>
      <h1 className="heading-h2 mb-8">
        <span className="underline decoration-blue-400 decoration-[5px] underline-offset-4">
          Blog
        </span>
        .
      </h1>
      <BlogList />
    </>
  );
};

export default BlogPage;
