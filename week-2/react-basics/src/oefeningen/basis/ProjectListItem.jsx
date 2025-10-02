const ProjectListItem = ({ project }) => {
  const { course } = project;
  return (
    <li>
      <h2>{project.title}</h2>
      <p>
        {course.name} - gegeven door {course.teachers.join(", ")}
      </p>
    </li>
  );
};

export default ProjectListItem;
