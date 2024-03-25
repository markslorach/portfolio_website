import { BlogPost } from "@/app/utils/interface";
import { getPostsByTag } from "@/lib/fetchData";

// Components
import BlogList from "@/app/components/BlogList";

interface Props {
  params: {
    slug: string;
  };
}

const TagPage = async ({ params: { slug } }: Props) => {
  const blogs: BlogPost[] = await getPostsByTag(slug);

  return (
    <section>
      <h1 className="hero-heading mb-20">
        <span className="text-blue-400">#</span>
        {slug}
      </h1>
      <BlogList blogs={blogs} />
    </section>
  );
};

export default TagPage;
