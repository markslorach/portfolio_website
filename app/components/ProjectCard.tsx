"use client";
import Link from "next/link";
import { motion } from "framer-motion"; // Import Framer Motion

// Icons
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

const ProjectCard = ({ project }: any) => {
  return (
    <section className="mb-20">
      <div className="grid h-[800px] grid-cols-1 gap-3 sm:h-[400px] sm:grid-cols-11">
        {project.map((project: any, idx: any) => (
          <Link
            key={idx}
            href={project.githubUrl}
            target="_blank"
            className={`projectCard ${idx === 0 || idx === 3 ? "sm:col-span-6" : idx === 1 || idx === 2 ? "sm:col-span-5" : ""}`}
          >
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            >
              <h2 className="item-center mb-2 flex font-semibold leading-none">
                {project.title} <ArrowUpRightIcon className="ml-2 h-4 w-4" />
              </h2>
              <small className="line-clamp-2 text-black/50">
                {project.description}
              </small>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProjectCard;
