import Link from "next/link";
import { formatDate } from "../utils/helpers";

//Interface
import { BlogPost } from "../utils/interface";

//Icons
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

const BlogCard = ({ post }: { post: BlogPost }) => {
  const formattedDate = formatDate(post.createdAt);

  return (
    <Link
      href={`/blog/${post.slug.current}`}
      className="rounded-lg border border-gray-400 p-3 transition-transform duration-300 ease-linear hover:-translate-y-0.5 dark:border-gray-500"
    >
      <div className="flex items-center justify-between">
        <div className="mb-2 flex items-center">
          <h2 className="leading-1 line-clamp-1 font-semibold text-gray-600 dark:text-gray-300">
            {post.title}
          </h2>
          <ArrowUpRightIcon className="ml-2 h-3.5 w-3.5" />
        </div>

        <small className="mb-3.5 hidden text-xs leading-none text-gray-500 dark:text-gray-400 sm:block tracking-wide">
          {formattedDate}
        </small>
      </div>
      <p className="leading-1 line-clamp-1 text-gray-500 dark:text-gray-400 text-xs tracking-wide leading-relaxed">
        {post.description}
      </p>
    </Link>
  );
};

export default BlogCard;
