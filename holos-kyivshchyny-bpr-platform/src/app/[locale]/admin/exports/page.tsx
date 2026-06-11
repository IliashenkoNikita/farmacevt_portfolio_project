import { AdminExportActionForm } from "@/components/demo/action-forms";
import { Card } from "@/components/ui/card";

export default function Page() {
  return (
    <>
      <h1>Exports</h1>
      <Card>
        <p>
          Export participants, registrations, certificates, test results, and
          BPR portfolio reports.
        </p>
        <AdminExportActionForm redirectTo="/uk/admin/exports" />
      </Card>
    </>
  );
}
