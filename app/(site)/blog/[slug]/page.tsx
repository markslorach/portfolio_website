import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/app/utils/helpers";
import { getBlogArticle } from "@/lib/fetchData";
import { PortableText } from "@portabletext/react";
import { urlForImage } from "@/sanity/lib/image";

// Components
import { PortableTextComponent } from "@/app/components/PortableTextComponent";

// Icons
import { CalendarDaysIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import { BlogPost } from "@/app/utils/interface";

interface Props {
  params: {
    slug: string;
  };
}

export const revalidate = 0;

const BlogPage = async ({ params: { slug } }: Props) => {
  const post: BlogPost = await getBlogArticle(slug);
  console.log(post);

  return (
    <section className="mb-28">
      <div className="flex flex-col space-y-8">
        <Link
          className="flex items-center font-medium text-black/70 underline decoration-blue-400 decoration-2 underline-offset-2"
          href="/blog"
        >
          <ArrowLeftIcon className="mr-1 h-4 w-4" />
          Back to posts
        </Link>
        <h1 className="hero-heading text-wrap">{post.title}</h1>
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
            quality={75}
            priority
          />
        </figure>
      )}

      <article className="prose mt-24 min-w-full text-wrap dark:prose-invert prose-li:marker:text-blue-400">
        <PortableText value={post.content} components={PortableTextComponent} />
      </article>
    </section>
  );
};

export default BlogPage;
