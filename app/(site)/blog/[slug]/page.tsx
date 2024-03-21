import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/app/utils/helpers";
import { getBlogBySlug } from "@/lib/fetchData";
import { PortableText } from "@portabletext/react";
import { urlForImage } from "@/sanity/lib/image";

// Icons
import { CalendarDaysIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";

interface Props {
  params: {
    slug: string;
  };
}

interface BlogPost {
  title: string;
  createdAt: string;
  titleImage: any;
  content: any;
  tags: string[];
}

export const revalidate = 0;

const BlogPage = async ({ params: { slug } }: Props) => {
  const post: BlogPost = await getBlogBySlug(slug);
  console.log(post);

  return (
    <section className="mb-28">
      <div className="flex flex-col space-y-8">
        <Link href="/blog">
          <small className="flex items-center leading-none text-black/50 underline decoration-blue-400 decoration-2 underline-offset-2">
            <ArrowLeftIcon className="mr-1 h-4 w-4" />
            Back to Blog
          </small>
        </Link>
        <h1 className="heading-h1 text-wrap">{post.title}</h1>
        <small className="flex items-center leading-none text-black/50">
          <CalendarDaysIcon className="mb-0.5 mr-1 h-4 w-4" /> Published -{" "}
          {formatDate(post.createdAt)}
        </small>
      </div>

      {post.titleImage && (
        <figure>
          <Image
            src={urlForImage(post.titleImage)}
            alt={`${post.title} article image`}
            width={500}
            height={280}
            priority={true}
          />
        </figure>
      )}

      <article className="prose mt-24 min-w-full text-wrap dark:prose-invert prose-li:marker:text-blue-400">
        <PortableText value={post.content} />
      </article>
    </section>
  );
};

export default BlogPage;
