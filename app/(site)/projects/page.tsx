import { getProjects } from "@/lib/fetchData";
import ProjectList from "./ProjectList";

const ProjectsPage = async () => {

  const projects = await getProjects()

  return (
    <section>
      <h1 className="hero-heading mb-20">
        <span className="underline decoration-blue-400 decoration-[8px] underline-offset-4">
          Projects
        </span>
        .
      </h1>
      <ProjectList projects={projects}/>
    </section>
  );
};

export default ProjectsPage;
