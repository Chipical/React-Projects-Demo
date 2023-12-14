export default function Button({ children, ...props }) {
  return (
    <button
      className="px-4 py-2 bg-slate-500 rounded-xl hover:bg-slate-700 hover:text-cyan-200 text-cyan-100"
      {...props}
    >
      {children}
    </button>
  );
}
