export function AdminDemoActionForm({
  label,
  intent,
  redirectTo,
}: {
  label: string;
  intent: string;
  redirectTo: string;
}) {
  return (
    <form action={redirectTo} className="mt-4" method="get">
      <input name="saved" type="hidden" value={intent} />
      <button className="primary-link" type="submit">
        {label}
      </button>
    </form>
  );
}

export function AdminExportActionButton({
  redirectTo,
  label,
}: {
  redirectTo: string;
  label: string;
}) {
  return (
    <form action={redirectTo} className="mt-4" method="get">
      <input name="exported" type="hidden" value="participants" />
      <button className="primary-link" type="submit">
        {label}
      </button>
    </form>
  );
}

export function CabinetDemoActionForm({
  label,
  intent,
  redirectTo,
}: {
  label: string;
  intent: string;
  redirectTo: string;
}) {
  return (
    <form action={redirectTo} className="mt-4" method="get">
      <input name="done" type="hidden" value={intent} />
      <button className="primary-link" type="submit">
        {label}
      </button>
    </form>
  );
}
