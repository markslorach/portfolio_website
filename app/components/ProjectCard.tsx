import Link from "next/link";
import { Badge } from "@/components/ui/badge";

// Interface
import { Project } from "../utils/interface";

//Icons
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

const ProjectCard = ({ project, idx }: { project: Project; idx: number }) => {
  return (
    <Link
      key={idx}
      href={project.githubUrl}
      target="_blank"
      className={`flex flex-col justify-end rounded-lg border border-gray-300 p-3 transition-transform duration-300 ease-linear hover:-translate-y-0.5 dark:border-gray-600 ${idx === 0 || idx === 3 ? "sm:col-span-6" : idx === 1 || idx === 2 ? "sm:col-span-5" : ""}`}
    >
      <div className="space-y-3">
        <h3 className="flex items-center font-semibold leading-none text-gray-600 dark:text-gray-300">
          {project.title} <ArrowUpRightIcon className="ml-2 h-3.5 w-3.5" />
        </h3>
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
  );
};

export default ProjectCard;
