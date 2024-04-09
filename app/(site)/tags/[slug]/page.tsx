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
      <div className="mb-20 flex flex-col space-y-8">
     
      <Heading><span className="dark:text-[#8cbdf8] text-blue-400">#</span>{slug}</Heading>
      </div>

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
