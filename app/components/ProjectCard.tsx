// Icons
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

const ProjectCard = () => {
  const dummyData = [
    {
      id: 1,
      title: "Portfolio Website",
      slug: "portfolio-website",
      tags: ["HTML", "CSS", "JavaScript", "React"],
      summary:
        "A showcase of my web development skills, built with fundamental web technologies and the React framework.",
    },
    {
      id: 2,
      title: "E-commerce Store",
      slug: "e-commerce-store",
      tags: ["React", "Redux", "TypeScript", "Node.js", "MongoDB"],
      summary:
        "A full-stack online store solution using React, Redux, TypeScript, Node.js, and MongoDB for data management.",
    },
    {
      id: 3,
      title: "Data Visualization Dashboard",
      slug: "data-visualization-dashboard",
      tags: ["JavaScript", "D3.js", "React"],
      summary:
        "An interactive dashboard for presenting complex data visually, powered by JavaScript, the D3.js library, and React.",
    },
    {
      id: 4,
      title: "Mobile Game",
      slug: "mobile-game",
      tags: ["Unity", "C#", "iOS", "Android"],
      summary:
        "A cross-platform mobile game experience created using the Unity game engine and C# programming.",
    },
    {
      id: 5,
      title: "Mobile Game",
      slug: "mobile-game",
      tags: ["Unity", "C#", "iOS", "Android"],
      summary:
        "A cross-platform mobile game experience created using the Unity game engine and C# programming.",
    },
  ];

  const cardStyles = "flex flex-col justify-end rounded-lg border border-slate-300 p-4 dark:border-white/30";

  return (
    <section className="mb-20">
      <div className="grid h-[800px] grid-cols-1 gap-3 sm:h-[400px] sm:grid-cols-11">
        {dummyData
          .map((project, idx) => (
            <div
              key={idx}
              className={`${cardStyles} ${idx === 0 || idx === 3 ? "sm:col-span-6" : idx === 1 || idx === 2 ? "sm:col-span-5" : ""}`}
            >
              <h2 className="mb-2 flex items-center font-semibold leading-none">
                {project.title} <ArrowUpRightIcon className="ml-2 h-4 w-4" />
              </h2>
              <small className="line-clamp-2 text-black/50">
                {project.summary}
              </small>
            </div>
          ))
          .slice(0, 4)}
      </div>
    </section>
  );
};

export default ProjectCard;
