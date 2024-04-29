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
      <Heading className="mb-12">
        Projects<span className="dark:text-[#8cbdf8] text-blue-400">.</span>
      </Heading>
      
      {projects.length > 0 ? (
        <ProjectList project={projects} />
      ) : (
        <p className="text-xl font-bold tracking-wide leading-none text-gray-500 dark:text-gray-400">
          Well this is embarrassing...
        </p>
      )}
    </section>
  );
};

export default ProjectsPage;
