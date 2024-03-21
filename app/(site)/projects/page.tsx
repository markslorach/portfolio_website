import { getProjects } from "@/lib/fetchData";
import ProjectList from "./ProjectList";

const ProjectsPage = async () => {

  const projects = await getProjects()

  return (
    <section>
      <h1 className="heading-h2 mb-8">
        <span className="underline decoration-blue-400 decoration-[5px] underline-offset-4">
          Projects
        </span>
        .
      </h1>
      <ProjectList projects={projects}/>
    </section>
  );
};

export default ProjectsPage;
