"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

//Interface
import { BlogPost } from "../utils/interface";

// Icons
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { formatDate } from "../utils/helpers";

const BlogList = ({ blogs }: { blogs: BlogPost[] }) => {
  // const animateCard = {
  //   initial: { opacity: 0, y: 15 },
  //   whileInView: { opacity: 1, y: 0 },
  //   viewport: { once: true },
  //   transition: { duration: 0.5, delay: 0.1, ease: "easeOut" },
  // };

  const pathname = usePathname();

  return (
    <section className="mb-4 sm:mb-0">
      <div className="flex flex-col space-y-3">
        {blogs.map((post) => {
          const formattedDate = formatDate(post.createdAt);

          return (
            <>
              {pathname === "/" ? (
                <Link
                  href={`/blog/${post.slug.current}`}
                  key={post._id}
                  className="rounded-lg border border-gray-300 dark:border-gray-600 p-3"
                >
                  <motion.div >
                   {/* {...animateCard}> */}
                    <div className="flex items-center justify-between">
                      <div className="mb-2 flex items-center">
                        <h2 className="leading-1 line-clamp-1 font-semibold text-gray-600 dark:text-gray-300">
                          {post.title}
                        </h2>
                        <ArrowUpRightIcon className="ml-2 h-4 w-4" />
                      </div>

                      <small className="mb-3.5 hidden text-xs leading-none sm:block text-gray-500 dark:text-gray-400">
                        {formattedDate}
                      </small>
                    </div>
                    <small className="leading-1 line-clamp-1 text-gray-500 dark:text-gray-400">
                      {post.description}
                    </small>
                  </motion.div>
                </Link>
              ) : (
                <Link
                  href={`/blog/${post.slug.current}`}
                  key={post._id}
                  className="rounded-lg border border-gray-300 dark:border-gray-600 p-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="mb-2 flex items-center">
                      <h3 className="leading-1 line-clamp-1 font-semibold text-gray-600 dark:text-gray-300">
                        {post.title}
                      </h3>
                      <ArrowUpRightIcon className="ml-2 h-4 w-4" />
                    </div>

                    <small className="mb-3.5 hidden text-xs leading-none text-black/30 sm:block">
                      {formattedDate}
                    </small>
                  </div>
                  <small className="leading-1 line-clamp-1 text-gray-500 dark:text-gray-400">
                    {post.description}
                  </small>
                </Link>
              )}
            </>
          );
        })}
      </div>
    </section>
  );
};

export default BlogList;
