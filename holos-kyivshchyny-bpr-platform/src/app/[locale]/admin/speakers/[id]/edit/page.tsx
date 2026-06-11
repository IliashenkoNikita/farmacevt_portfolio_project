import { AdminDemoActionForm } from "@/components/demo/action-forms";
import { Card } from "@/components/ui/card";

export default function Page() {
  return (
    <>
      <h1>Edit Speaker</h1>
      <Card>
        <p>Update speaker profile content and related events.</p>
        <AdminDemoActionForm
          intent="speaker-edit"
          label="Save speaker"
          redirectTo="/uk/admin/speakers/demo/edit"
        />
      </Card>
    </>
  );
}
