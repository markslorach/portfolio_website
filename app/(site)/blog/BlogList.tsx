import { formatDate } from "@/app/utils/helpers";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const BlogList = ({ blogs }: any) => {
  return (
    <section className="mb-28">
      <div className="flex flex-col space-y-3">
        {blogs.map((post: any, idx: any) => {
          const formattedDate = formatDate(post.createdAt);

          return (
            <Link
              href={`/blog/${post.slug.current}`}
              key={idx}
              className="projectCard"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="mb-2 flex items-center">
                    <h2 className="leading-1 line-clamp-1 font-semibold">
                      {post.title}
                    </h2>
                    <ArrowUpRightIcon className="ml-2 h-4 w-4" />
                  </div>

                  <small className="mb-3.5 hidden text-xs leading-none text-black/30 sm:block">
                    {formattedDate}
                  </small>
                </div>
                <small className="leading-1 line-clamp-1 text-black/50">
                  {post.description}
                </small>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default BlogList;
