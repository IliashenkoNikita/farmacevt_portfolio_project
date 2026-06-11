import { AdminDemoActionForm } from "@/components/demo/action-forms";
import { Card } from "@/components/ui/card";

export default function Page() {
  return (
    <>
      <h1>Tests</h1>
      <Card>
        <p>
          Create test questions, publish attempts, configure thresholds, and
          review results.
        </p>
        <AdminDemoActionForm intent="tests-save" redirectTo="/uk/admin/tests" />
      </Card>
    </>
  );
}
