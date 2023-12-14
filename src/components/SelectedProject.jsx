import Tasks from "./Tasks";

export default function SelectedProject({
  project,
  onDelete,
  onAddTask,
  onDeleteTask,
  tasks,
}) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-EU", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-slate-400">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">
            {project.title}
          </h1>
          <button
            className="text-slate-200 hover:text-slate-100 p-2 bg-slate-500 hover:bg-slate-900"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
        <p className="mb-5 text-slate-600">{formattedDate}</p>
        <p className="text-slate-600 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>
      <Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks} />
    </div>
  );
}
