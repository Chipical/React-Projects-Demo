import noProjectImg from "../assets/no-projects.png";
import Button from "./Button";

export default function NoActiveProject({ onStartAddProject }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={noProjectImg}
        alt="Empty Taskl List"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-2xl font-bold text-slate-900 my-4 uppercase">
        No Project Selected
      </h2>
      <p className="text-slate-700 mb-4">
        Select a project or get started with a new one
      </p>
      <p className="mt-8">
        <Button onClick={onStartAddProject}>Create New Project</Button>
      </p>
    </div>
  );
}
