import ProjectListItem from "./ProjectListItem";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Gentse Feesten",
      course: { teachers: ["Mathieu", "Wachem"], name: "@Work1" },
    },
    {
      id: 2,
      title: "Lightopia",
      course: { teachers: ["Mathieu", "Wachem"], name: "@Work1" },
    },
    {
      id: 3,
      title: "Clar Development",
      course: { teachers: ["Adriaan"], name: "Webdesign" },
    },
    {
      id: 4,
      title: "Rock Werchter",
      course: { teachers: ["Michael"], name: "Programming 1" },
    },
    {
      id: 5,
      title: "Portfolio",
      course: { teachers: ["Claire", "Isabelle"], name: "IT business" },
    },
  ];

  return (
    <ul>
      {projects.map((project) => (
        <ProjectListItem key={project.id} project={project} />
      ))}
    </ul>
  );
};

export default Portfolio;
