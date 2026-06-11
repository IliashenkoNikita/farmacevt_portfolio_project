export function Checkbox(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input type="checkbox" {...props} className="h-5 w-5 accent-emerald-700" />
  );
}
