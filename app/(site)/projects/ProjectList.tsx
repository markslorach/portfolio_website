import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const ProjectList = ({ projects }: any) => {
  return (
    <section className="mb-28">
      <div className="grid h-[800px] grid-cols-1 gap-3 sm:h-[400px] sm:grid-cols-11">
        {projects
          .map((project: any, idx: any) => (
            <Link
              key={idx}
              href={project.githubUrl}
              target="_blank"
              className={`projectCard ${idx === 0 || idx === 3 ? "sm:col-span-6" : idx === 1 || idx === 2 ? "sm:col-span-5" : ""}`}
            >
              <div>
                <h2 className="item-center mb-2 flex font-semibold leading-none">
                  {project.title} <ArrowUpRightIcon className="ml-2 h-4 w-4" />
                </h2>
                <small className="line-clamp-2 text-black/50">
                  {project.description}
                </small>
              </div>
            </Link>
          ))
          .slice(0, 4)}
      </div>
    </section>
  );
};

export default ProjectList;
