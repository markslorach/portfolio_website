import Image from "next/image";
import { formatDate } from "@/app/utils/helpers";
import { getBlogBySlug } from "@/lib/fetchData";
import { PortableText } from "@portabletext/react";
import { urlForImage } from "@/sanity/lib/image";

// Icons
import { CalendarDaysIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

interface Props {
  params: {
    slug: string;
  };
}

interface Post {
  title: string
  createdAt: string
  titleImage: any
  content: any
  tags: string[];
}

export const revalidate = 0;

const BlogPage = async ({ params: { slug } }: Props) => {
  const post: Post = await getBlogBySlug(slug);
  console.log(post);

  return (
    <section className="mb-28">
      <div className="flex flex-col space-y-8">
        <Link href="/blog">
          <small className="flex items-center leading-none text-black/50">
            <ArrowLeftIcon className="h4 mr-1 w-4" />
            Back to Blog
          </small>
        </Link>
        <h1 className="text-5xl font-extrabold">{post.title}</h1>
        <small className="flex items-center leading-none text-black/50">
          <CalendarDaysIcon className="mb-0.5 mr-1 h-4 w-4" /> Published -{" "}
          {formatDate(post.createdAt)}
        </small>
      </div>
      {post.titleImage && (
        <figure>
          <Image
            src={urlForImage(post.content)}
            alt={`${post.title} post image`}
            width={500}
            height={280}
            priority={true}
          />
        </figure>
      )}
      <article className="prose">
        <PortableText value={post.content} />
      </article>
    </section>
  );
};

export default BlogPage;
