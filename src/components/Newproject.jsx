import Input from "./Input";
import { useRef } from "react";
import Modal from "./Modal";

export default function NewProject({ onAdd, onCancel }) {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }
  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <h2 className="text-xl text-center font-bold text-black uppercase mb-4">
          Invalid input
        </h2>
        <p className="text-center">You forgot to enter a value.</p>
        <p className="text-center">
          Please make sure to provide a valid input for each field.
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-6 my-4 ">
          <li>
            <button
              onClick={onCancel}
              className="text-cyan-100 hover:text-slate-900 bg-slate-950 hover:bg-cyan-500 p-1 rounded-md"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="text-cyan-100 hover:text-slate-900 bg-slate-900 p-1 px-2 rounded-md hover:bg-cyan-500"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input ref={title} label="Title" type="text" />
          <Input ref={description} label="Description" textarea />
          <Input ref={dueDate} type="date" label="Due Date" />
        </div>
      </div>
    </>
  );
}
