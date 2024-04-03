import { Project } from "@/app/utils/interface";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const ProjectList = ({ project }: { project: Project[] }) => {
  return (
    <section>
      <div className="mb-4 grid h-[800px] grid-cols-1 gap-3 sm:mb-0 sm:h-[400px] sm:grid-cols-11">
        {project
          .map((project, idx) => (
            <Link
              key={idx}
              href={project.githubUrl}
              target="_blank"
              className={`flex flex-col justify-end rounded-lg border border-gray-200 p-3 dark:border-gray-700 ${idx === 0 || idx === 3 ? "sm:col-span-6" : idx === 1 || idx === 2 ? "sm:col-span-5" : ""}`}
            >
              <div className="space-y-3">
                <h2 className="item-center flex font-semibold leading-none text-gray-600 dark:text-gray-300">
                  {project.title} <ArrowUpRightIcon className="ml-2 h-4 w-4" />
                </h2>
                <small className="line-clamp-2 text-gray-500 dark:text-gray-400">
                  {project.description}
                </small>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag._id}
                      variant="outline"
                      className="border-gray-200 text-gray-400 dark:border-gray-700 dark:text-gray-400"
                    >
                      <small>{tag.name}</small>
                    </Badge>
                  ))}
                </div>
              </div>
            </Link>
          ))
          .slice(0, 4)}
      </div>
    </section>
  );
};

export default ProjectList;
