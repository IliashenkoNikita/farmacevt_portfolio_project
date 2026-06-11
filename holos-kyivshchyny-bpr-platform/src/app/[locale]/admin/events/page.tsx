import { AdminDemoActionForm } from "@/components/demo/action-forms";
import { Card } from "@/components/ui/card";
import { FileUpload } from "@/components/ui/file-upload";

export default function Page() {
  return (
    <>
      <h1>Events</h1>
      <Card>
        <p>
          Create, edit, publish, duplicate, archive, and manage event content.
        </p>
        <FileUpload />
        <AdminDemoActionForm
          intent="events-save"
          redirectTo="/uk/admin/events"
        />
      </Card>
    </>
  );
}
