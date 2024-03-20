import { formatDate } from "@/app/utils/helpers";
import { getBlogBySlug } from "@/lib/fetchData";
import { CalendarDaysIcon } from "@heroicons/react/24/solid";

interface Props {
  params: {
    slug: string;
    title: string;
  };
}

export const revalidate = 0;

const BlogPage = async ({ params: { slug } }: Props) => {
  const post = await getBlogBySlug(slug);
  console.log(post);

  return (
    <section className="mb-28">
      <div className="flex flex-col space-y-8">
        <h1 className="text-5xl font-extrabold">{post.title}</h1>
        <small className="flex items-center leading-none text-black/50">
          <CalendarDaysIcon className="mb-0.5 mr-1 h-4 w-4" /> Published -{" "}
          {formatDate(post.createdAt)}
        </small>
      </div>
      <figure></figure>
      <article></article>
    </section>
  );
};

export default BlogPage;
