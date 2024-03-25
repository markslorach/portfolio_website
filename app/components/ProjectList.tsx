import { Project } from "@/app/utils/interface";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const ProjectList = ({ project }: { project: Project[] }) => {
  return (
    <section>
      <div className="grid h-[800px] grid-cols-1 gap-3 sm:h-[400px] sm:grid-cols-11">
        {project
          .map((project, idx) => (
            <Link
              key={idx}
              href={project.githubUrl}
              target="_blank"
              className={`projectCard ${idx === 0 || idx === 3 ? "sm:col-span-6" : idx === 1 || idx === 2 ? "sm:col-span-5" : ""}`}
            >
              <div className="space-y-3">
                <h2 className="item-center flex font-semibold leading-none">
                  {project.title} <ArrowUpRightIcon className="ml-2 h-4 w-4" />
                </h2>
                <small className="line-clamp-2 text-black/50">
                  {project.description}
                </small>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag._id}
                      variant="outline"
                      className="border-blue-400/30 text-black/50"
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
