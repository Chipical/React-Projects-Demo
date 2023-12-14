import { forwardRef } from "react";
const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
  const classes =
    "w-full p-1 border-b-2 rounded-md border-slate-600 bg-slate-200 text-slate-950 focus:outline-none focus:border-slate-900";
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-slate-800">
        {label}
      </label>
      {textarea ? (
        <textarea ref={ref} className={classes} {...props} />
      ) : (
        <input ref={ref} className={classes} {...props} />
      )}
    </p>
  );
});

export default Input;
