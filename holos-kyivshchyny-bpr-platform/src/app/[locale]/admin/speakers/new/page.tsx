import { AdminDemoActionForm } from "@/components/demo/action-forms";
import { Card } from "@/components/ui/card";

export default function Page() {
  return (
    <>
      <h1>New Speaker</h1>
      <Card>
        <p>
          Create a speaker profile with biography, position, specialization, and
          photo.
        </p>
        <AdminDemoActionForm
          intent="speaker-create"
          label="Create speaker"
          redirectTo="/uk/admin/speakers/new"
        />
      </Card>
    </>
  );
}
