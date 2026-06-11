import { cn } from "@/lib/utils/cn";
export function Badge({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-800",
        className,
      )}
      {...props}
    />
  );
}
