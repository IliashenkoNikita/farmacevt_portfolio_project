export function Toast({ children }: { children: React.ReactNode }) {
  return (
    <div
      role="status"
      className="fixed bottom-4 right-4 rounded-md bg-slate-950 px-4 py-3 text-white"
    >
      {children}
    </div>
  );
}
