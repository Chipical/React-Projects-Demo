import Button from "./Button";

export default function SideBar({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <aside
      id="navbar"
      className="bg-black orient text-cyan-100 pl-6 w-1/5 rounded-tr-3xl min-h-screen md:w-72"
    >
      <h2 className="text-2xl mt-12 mb-6 uppercase">Your Projects</h2>
      <div>
        <Button onClick={onStartAddProject}>+ New Project</Button>
      </div>
      <ul className="py-6">
        {projects.map((project) => {
          let cssClasses =
            "w-full text-left pb-4 rounded-md hover:text-orange-400 ";

          if (project.id === selectedProjectId) {
            cssClasses += " text-orange-400";
          } else {
            cssClasses += " ";
          }
          return (
            <li key={project.id}>
              <button
                onClick={() => onSelectProject(project.id)}
                className={cssClasses}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
