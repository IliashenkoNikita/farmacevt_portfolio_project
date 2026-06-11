export function Pagination({
  page = 1,
  totalPages = 1,
}: {
  page?: number;
  totalPages?: number;
}) {
  const previousDisabled = page <= 1;
  const nextDisabled = page >= totalPages;
  return (
    <nav aria-label="Pagination" className="flex gap-2">
      <button
        className="rounded border px-3 py-2 disabled:opacity-50"
        disabled={previousDisabled}
        type="button"
      >
        Previous
      </button>
      <span className="px-3 py-2">
        {page} / {totalPages}
      </span>
      <button
        className="rounded border px-3 py-2 disabled:opacity-50"
        disabled={nextDisabled}
        type="button"
      >
        Next
      </button>
    </nav>
  );
}
