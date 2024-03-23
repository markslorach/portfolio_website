import { getProjects } from "@/lib/fetchData";

// Interface
import { Project } from "@/app/utils/interface";

// Components
import ProjectList from "./ProjectList";

const ProjectsPage = async () => {
  const projects: Project[] = await getProjects();

  return (
    <section>
      <h1 className="hero-heading mb-20">
        <span className="underline decoration-blue-400 decoration-[8px] underline-offset-4">
          Projects
        </span>
        .
      </h1>
      {projects.length > 0 ? (
        <ProjectList projects={projects} />
      ) : (
        <p className="text-2xl font-bold leading-none text-black/50">
          Well this is embarrassing...
        </p>
      )}
    </section>
  );
};

export default ProjectsPage;
