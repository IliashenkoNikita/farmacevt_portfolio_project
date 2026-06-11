import {
  AdminDemoActionForm,
  AdminExportActionForm,
} from "@/components/demo/action-forms";
import { Card } from "@/components/ui/card";

export default function Page() {
  return (
    <>
      <h1>Адмін-панель</h1>
      <div className="grid-cards">
        <Card>
          <h2>Content</h2>
          <p>
            Create and update events, speakers, materials, tests, certificates,
            and provider documents.
          </p>
          <AdminDemoActionForm
            intent="admin-content-review"
            label="Review content"
            redirectTo="/uk/admin"
          />
        </Card>
        <Card>
          <h2>Reports</h2>
          <p>Export participants and compliance evidence for operations.</p>
          <AdminExportActionForm redirectTo="/uk/admin" />
        </Card>
      </div>
    </>
  );
}
