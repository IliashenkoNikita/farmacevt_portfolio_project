import { Card } from "./card";
export function StatCard({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) {
  return (
    <Card>
      <p className="text-sm text-slate-600">{label}</p>
      <strong className="text-3xl text-emerald-800">{value}</strong>
    </Card>
  );
}
