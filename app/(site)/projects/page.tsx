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
          Projects
          <span className="text-blue-400">.</span>
        </h1>
      
      {projects.length > 0 ? (
        <ProjectList project={projects} />
      ) : (
        <p className="text-2xl font-bold leading-none text-black/50">
          Well this is embarrassing...
        </p>
      )}
    </section>
  );
};

export default ProjectsPage;
