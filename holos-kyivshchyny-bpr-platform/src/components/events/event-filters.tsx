"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState, useTransition } from "react";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";

type EventFiltersProps = {
  categories: readonly string[];
  values: Record<string, string | undefined>;
};

const formats = [
  "SEMINAR",
  "WEBINAR",
  "E_LEARNING",
  "OFFLINE",
  "ONLINE",
  "HYBRID",
];

export function EventFilters({ categories, values }: EventFiltersProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const [query, setQuery] = useState(values.q ?? "");

  const current = useMemo(
    () => new URLSearchParams(searchParams.toString()),
    [searchParams],
  );

  function updateParam(name: string, value: string) {
    const next = new URLSearchParams(current.toString());
    if (value) next.set(name, value);
    else next.delete(name);
    next.delete("page");
    startTransition(() => {
      router.replace(next.size ? `${pathname}?${next.toString()}` : pathname, {
        scroll: false,
      });
    });
  }

  useEffect(() => {
    const handle = window.setTimeout(() => updateParam("q", query.trim()), 250);
    return () => window.clearTimeout(handle);
  }, [query]);

  return (
    <form className="grid" role="search" aria-label="Event filters">
      <Input
        name="q"
        placeholder="Search by title"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <Select
        name="category"
        value={values.category ?? ""}
        onChange={(event) => updateParam("category", event.target.value)}
      >
        <option value="">All categories</option>
        {categories.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </Select>
      <Select
        name="format"
        value={values.format ?? ""}
        onChange={(event) => updateParam("format", event.target.value)}
      >
        <option value="">All formats</option>
        {formats.map((item) => (
          <option key={item} value={item}>
            {item.replace("_", "-")}
          </option>
        ))}
      </Select>
      <Input
        type="date"
        name="date"
        value={values.date ?? ""}
        onChange={(event) => updateParam("date", event.target.value)}
      />
      <Input
        type="number"
        min={0}
        name="points"
        placeholder="BPR points from"
        value={values.points ?? ""}
        onChange={(event) => updateParam("points", event.target.value)}
      />
      <a className="secondary-link text-center" href={pathname}>
        Reset filters
      </a>
      <span className="text-sm text-slate-600" aria-live="polite">
        {isPending ? "Updating filters..." : "Filters ready"}
      </span>
    </form>
  );
}
