import { AdminDemoActionForm } from "@/components/demo/action-forms";
import { Card } from "@/components/ui/card";

export default function Page() {
  return (
    <>
      <h1>New Test</h1>
      <Card>
        <p>
          Create questions, answers, pass threshold, attempt limits, and
          availability window.
        </p>
        <AdminDemoActionForm
          intent="test-create"
          label="Create test"
          redirectTo="/uk/admin/tests/new"
        />
      </Card>
    </>
  );
}
