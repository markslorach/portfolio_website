import { getPostsByTag } from "@/lib/fetchData";

//Interface
import { BlogPost } from "@/app/utils/interface";

// Components
import BlogList from "@/app/components/BlogList";
import Heading from "@/app/components/Heading";
import BackToButton from "@/app/components/BackToButton";

interface Props {
  params: {
    slug: string;
  };
}

export const revalidate = 0;

const TagPage = async ({ params: { slug } }: Props) => {
  const blogs: BlogPost[] = await getPostsByTag(slug);

  return (
    <section>
      <BackToButton href="/blog" text="Back to blogs" />

      <Heading className="mb-12">
        <span className="text-blue-400 dark:text-[#8cbdf8]">#</span>
        {slug}
      </Heading>

      {blogs.length > 0 ? (
        <BlogList blogs={blogs} />
      ) : (
        <p className="text-wrap text-2xl font-bold leading-none text-gray-500 dark:text-gray-400">
          It looks like there is currently no articles for this category...
        </p>
      )}
    </section>
  );
};

export default TagPage;
