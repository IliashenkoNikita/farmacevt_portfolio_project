import { AdminDemoActionForm } from "@/components/demo/action-forms";
import { Card } from "@/components/ui/card";

export default function Page() {
  return (
    <>
      <h1>Edit Test</h1>
      <Card>
        <p>
          Update questions, answer keys, pass threshold, and publication state.
        </p>
        <AdminDemoActionForm
          intent="test-edit"
          label="Save test"
          redirectTo="/uk/admin/tests/demo/edit"
        />
      </Card>
    </>
  );
}
