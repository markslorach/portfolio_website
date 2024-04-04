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
import Heading from "@/app/components/Heading";
import { Badge } from "@/components/ui/badge";
import BackToTop from "@/app/components/BackToTop";

// Icons
import { CalendarDaysIcon } from "@heroicons/react/24/solid";
import ScrollToTop from "@/app/components/ScrollToTop";

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
      <section className="flex flex-col space-y-8 rounded-lg border border-gray-300 p-6 dark:border-gray-600">
        <Heading>{post.title}</Heading>

        <div className="flex flex-wrap items-center justify-between gap-4 sm:space-x-4">
          <small className="flex items-center font-medium leading-none text-gray-500 dark:text-gray-400">
            <CalendarDaysIcon className="mb-0.5 mr-1 h-5 w-5" />
            {formatDate(post.createdAt)}
          </small>

          <div className="flex items-center space-x-2">
            {post.tags.map((tag) => (
              <Badge
                className="border-gray-300 text-gray-500 dark:border-gray-700 dark:text-gray-400"
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

      <article className="prose mt-24 min-w-full text-wrap dark:prose-invert prose-li:marker:text-blue-400">
        <PortableText value={post.content} components={PortableTextComponent} />
      </article>

      <ScrollToTop/>
    </section>
  );
};

export default BlogPage;
