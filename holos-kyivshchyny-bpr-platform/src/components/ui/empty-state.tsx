export function EmptyState({ title }: { title: string }) {
  return (
    <div className="rounded-lg border border-dashed p-8 text-center text-slate-600">
      {title}
    </div>
  );
}
