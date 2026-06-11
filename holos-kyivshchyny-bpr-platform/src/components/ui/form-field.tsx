export function FormField({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="grid gap-2 font-semibold">
      {label}
      {children}
    </label>
  );
}
