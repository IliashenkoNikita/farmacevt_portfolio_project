import { AdminDemoActionForm } from "@/components/demo/action-forms";
import { Card } from "@/components/ui/card";
import { FileUpload } from "@/components/ui/file-upload";

export default function Page() {
  return (
    <>
      <h1>Speakers</h1>
      <Card>
        <p>
          Manage speaker photos, position, biography, specialization, and
          events.
        </p>
        <FileUpload />
        <AdminDemoActionForm
          intent="speakers-save"
          redirectTo="/uk/admin/speakers"
        />
      </Card>
    </>
  );
}
