import { AdminDemoActionForm } from "@/components/demo/action-forms";
import { Card } from "@/components/ui/card";

export default function Page() {
  return (
    <>
      <h1>Certificates</h1>
      <Card>
        <p>Generate, download, revoke, and verify BPR/CPD certificates.</p>
        <AdminDemoActionForm
          intent="certificates-save"
          redirectTo="/uk/admin/certificates"
        />
      </Card>
    </>
  );
}
