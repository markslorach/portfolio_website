import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { formatDate } from "@/app/utils/helpers";
import { getBlogArticle } from "@/lib/fetchData";
import { PortableText } from "@portabletext/react";
import { urlForImage } from "@/sanity/lib/image";

// Interface
import { BlogPost } from "@/app/utils/interface";

// Components
import { PortableTextComponent } from "@/app/components/PortableTextComponent";
import { Badge } from "@/components/ui/badge";
import Heading from "@/app/components/Heading";
import ScrollToTop from "@/app/components/ScrollToTop";
import BackToButton from "@/app/components/BackToButton";

// Icons
import { CalendarDaysIcon } from "@heroicons/react/24/solid";

interface Props {
  params: {
    slug: string;
  };
}

export const revalidate = 0;

const BlogPage = async ({ params: { slug } }: Props) => {
  const post: BlogPost = await getBlogArticle(slug);

  if (!post) notFound();

  return (
    <section>
      <BackToButton href="/blog" text="Back to posts" />

      <section className="mb-20 flex flex-col space-y-8 rounded-lg tracking-wide">
        <Heading className="text-5xl">{post.title}</Heading>

        <div className="flex flex-wrap items-center justify-between gap-4 sm:space-x-4">
          <span className="flex items-center leading-none text-gray-500 dark:text-gray-400">
            <CalendarDaysIcon className="mb-0.5 mr-1 h-5 w-5" />
            {formatDate(post.createdAt)}
          </span>

          <div className="flex items-center space-x-2">
            {post.tags.map((tag) => (
              <Badge
                className="border-gray-400 text-gray-500 transition-colors hover:text-black/80 dark:border-gray-500 dark:text-gray-400 hover:dark:text-white/90"
                variant="outline"
                key={tag._id}
              >
                <Link
                  href={`/tags/${tag.slug.current}#top`}
                >{`#${tag.name.toLowerCase()}`}</Link>
              </Badge>
            ))}
          </div>
        </div>
      </section>

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

      <article className="prose min-w-full text-pretty tracking-wide text-black/80 dark:prose-invert prose-li:marker:text-blue-400 dark:text-white/90 dark:prose-li:marker:text-[#8cbdf8]">
        <PortableText value={post.content} components={PortableTextComponent} />
      </article>

      <ScrollToTop />
    </section>
  );
};

export default BlogPage;
