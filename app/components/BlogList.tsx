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
  const animateCard = {
    initial: { opacity: 0, y: 15 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, delay: 0.1, ease: "easeOut" },
  };

  const pathname = usePathname();

  return (
    <section className="mb-4 sm:mb-0">
      <div className="flex flex-col space-y-3">
        {blogs.map((post, idx) => {
          const formattedDate = formatDate(post.createdAt);

          return (
            <>
              {pathname === "/" ? (
                <Link
                  href={`/blog/${post.slug.current}`}
                  key={idx}
                  className="projectCard"
                >
                  <motion.div {...animateCard}>
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
                  </motion.div>
                </Link>
              ) : (
                <Link
                  href={`/blog/${post.slug.current}`}
                  key={idx}
                  className="projectCard"
                >
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
