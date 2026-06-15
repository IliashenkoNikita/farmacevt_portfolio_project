import { Card } from "./card";

export function CertificatePreview({
  label,
  qrAlt,
}: {
  label: string;
  qrAlt: string;
}) {
  return (
    <Card className="bg-gradient-to-br from-white to-emerald-50">
      <p className="text-sm text-slate-500">{label}</p>
      <h3>GK-BPR-2026-PV-000123</h3>
      <div
        className="mt-4 h-24 w-24 rounded bg-slate-200"
        role="img"
        aria-label={qrAlt}
      />
    </Card>
  );
}
