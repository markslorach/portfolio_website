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
      className="dark:border-gray-500 group"
    >
      <div className="flex items-center justify-between">
        <div className="mb-2 flex items-center">
          <h2 className="leading-1 line-clamp-1 text-gray-600 dark:text-gray-300 text-xl font-medium">
            {post.title}
          </h2>
          <ArrowUpRightIcon className="ml-2 h-3.5 w-3.5" />
        </div>

        <span className="mb-3.5 hidden text-sm leading-none text-gray-500 dark:text-gray-400 sm:block tracking-wide">
          {formattedDate}
        </span>
      </div>
      <p className="leading-1 line-clamp-1 text-gray-600 dark:text-gray-400 text-sm tracking-wide leading-relaxed">
        {post.description}
      </p>
    </Link>
  );
};

export default BlogCard;
