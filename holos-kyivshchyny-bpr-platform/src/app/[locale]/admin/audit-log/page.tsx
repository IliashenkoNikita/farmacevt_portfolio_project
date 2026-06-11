import { AdminDemoActionForm } from "@/components/demo/action-forms";
import { Card } from "@/components/ui/card";

export default function Page() {
  return (
    <>
      <h1>Audit Log</h1>
      <Card>
        <p>
          Review administrative events and export audit evidence for compliance.
        </p>
        <AdminDemoActionForm
          intent="audit-export"
          label="Export audit log"
          redirectTo="/uk/admin/audit-log"
        />
      </Card>
    </>
  );
}
