import { cn } from "@/lib/utils/cn";
export function Button({
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "inline-flex min-h-11 items-center justify-center rounded-md bg-emerald-700 px-4 py-2 font-semibold text-white shadow-sm transition hover:bg-emerald-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}
