// Interface
import { Project } from "@/app/utils/interface";

//Components
import ProjectCard from "./ProjectCard";

const ProjectList = ({ project }: { project: Project[] }) => {
  return (
    <section>
      <div className="mb-4 grid h-[800px] grid-cols-1 gap-3 sm:mb-0 sm:h-[400px] sm:grid-cols-11">
        {project.map((project, idx) => (
          <ProjectCard key={idx} project={project} idx={idx} />
        ))}
      </div>
    </section>
  );
};

export default ProjectList;
