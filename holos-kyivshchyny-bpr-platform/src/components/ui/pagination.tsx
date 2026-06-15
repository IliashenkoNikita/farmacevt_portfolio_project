export function Pagination({
  page = 1,
  totalPages = 1,
  labels,
}: {
  page?: number;
  totalPages?: number;
  labels: {
    label: string;
    previous: string;
    next: string;
  };
}) {
  const previousDisabled = page <= 1;
  const nextDisabled = page >= totalPages;
  return (
    <nav aria-label={labels.label} className="flex gap-2">
      <button
        className="rounded border px-3 py-2 disabled:opacity-50"
        disabled={previousDisabled}
        type="button"
      >
        {labels.previous}
      </button>
      <span className="px-3 py-2">
        {page} / {totalPages}
      </span>
      <button
        className="rounded border px-3 py-2 disabled:opacity-50"
        disabled={nextDisabled}
        type="button"
      >
        {labels.next}
      </button>
    </nav>
  );
}
