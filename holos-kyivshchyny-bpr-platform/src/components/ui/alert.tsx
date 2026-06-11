export function Alert({ children }: { children: React.ReactNode }) {
  return (
    <div
      role="status"
      className="rounded-md border-l-4 border-amber-500 bg-amber-50 p-4"
    >
      {children}
    </div>
  );
}
