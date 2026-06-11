export function RadioGroup({
  options,
  name,
}: {
  options: string[];
  name: string;
}) {
  return (
    <div className="grid gap-2">
      {options.map((option) => (
        <label key={option} className="flex items-center gap-2">
          <input type="radio" name={name} value={option} />
          {option}
        </label>
      ))}
    </div>
  );
}
