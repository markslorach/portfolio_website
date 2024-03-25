import Link from "next/link";
import { BlogPost } from "@/app/utils/interface";
import { getPostsByTag } from "@/lib/fetchData";

// Components
import BlogList from "@/app/components/BlogList";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

interface Props {
  params: {
    slug: string;
  };
}

const TagPage = async ({ params: { slug } }: Props) => {
  const blogs: BlogPost[] = await getPostsByTag(slug);

  return (
    <section>
      <div className="mb-20 flex flex-col space-y-8">
        <Link
          className="flex items-center font-medium text-black/70 underline decoration-blue-400 decoration-2 underline-offset-2"
          href="/blog"
        >
          <ArrowLeftIcon className="mr-1 h-4 w-4" />
          Back to posts
        </Link>
        <h1 className="hero-heading">
          <span className="text-blue-400">#</span>
          {slug}
        </h1>
      </div>

      {blogs.length > 0 ? (
        <BlogList blogs={blogs} />
      ) : (
        <p className="text-wrap text-2xl font-bold leading-none text-black/50">
          It looks like there&apos;s currently no posts for this category...
        </p>
      )}
    </section>
  );
};

export default TagPage;
