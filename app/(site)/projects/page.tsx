import { getProjects } from "@/lib/fetchData";

// Interface
import { Project } from "@/app/utils/interface";

// Components
import ProjectList from "../../components/ProjectList";
import Heading from "@/app/components/Heading";

const ProjectsPage = async () => {
  const projects: Project[] = await getProjects();

  return (
    <section>
      <Heading className="mb-20">
        Projects<span className="text-[#8cbdf8]">.</span>
      </Heading>
      
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
