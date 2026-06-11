export function Timeline({ items }: { items: string[] }) {
  return (
    <ol className="grid gap-4">
      {items.map((item, index) => (
        <li className="border-l-4 border-emerald-700 pl-4" key={item}>
          <span className="font-bold">{index + 1}.</span> {item}
        </li>
      ))}
    </ol>
  );
}
