import { cn } from "@/lib/utils/cn";
export function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      {...props}
      className={cn(
        "min-h-11 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-700",
        props.className,
      )}
    />
  );
}
