export function Table({
  rows,
}: {
  rows: Array<Record<string, React.ReactNode>>;
}) {
  const keys = Object.keys(rows[0] ?? {});
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-left">
        <thead>
          <tr>
            {keys.map((key) => (
              <th className="border-b p-3" key={key}>
                {key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              {keys.map((key) => (
                <td className="border-b p-3" key={key}>
                  {row[key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
