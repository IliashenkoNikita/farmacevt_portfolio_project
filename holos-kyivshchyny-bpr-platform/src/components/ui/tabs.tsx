"use client";

import { useState } from "react";

export function Tabs({ items }: { items: string[] }) {
  const [selected, setSelected] = useState(items[0] ?? "");
  return (
    <div className="space-y-3">
      <div role="tablist" className="flex gap-2">
        {items.map((item) => (
          <button
            aria-selected={selected === item}
            className="rounded-md border px-3 py-2 aria-selected:bg-emerald-700 aria-selected:text-white"
            key={item}
            onClick={() => setSelected(item)}
            role="tab"
            type="button"
          >
            {item}
          </button>
        ))}
      </div>
      <p className="text-sm text-slate-600" role="tabpanel">
        {selected}
      </p>
    </div>
  );
}
