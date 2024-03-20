import { getBlogBySlug } from "@/lib/fetchData";

interface Props {
  params: {
    slug: string;
    title: string;
  };
}

const BlogPage = async ({ params: { slug } }: Props) => {
  const blog = await getBlogBySlug(slug);
  console.log(blog);

  return (
    <>
      <h1 className="text-5xl font-extrabold">{blog.title}</h1>
      <figure></figure>
    </>
  );
};

export default BlogPage;
