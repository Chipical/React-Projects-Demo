import { createPortal } from "react-dom";
import { forwardRef, useImperativeHandle, useRef } from "react";
import Button from "./Button";
const Modal = forwardRef(function Model({ children, buttonCaption }, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-slate-800/60 p-8 rounded-xl text-lg shadow-xl"
    >
      {children}
      <form method="dialog" className="mt-4 text-center">
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
