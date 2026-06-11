export function Dialog({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      role="dialog"
      aria-label={title}
      className="rounded-lg border bg-white p-4 shadow-xl"
    >
      <h2>{title}</h2>
      {children}
    </section>
  );
}
