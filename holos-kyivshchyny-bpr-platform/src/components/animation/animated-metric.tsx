"use client";
export function AnimatedMetric({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  return (
    <div className="metric">
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}
