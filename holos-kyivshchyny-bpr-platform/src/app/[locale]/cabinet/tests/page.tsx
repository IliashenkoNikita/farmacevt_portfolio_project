import { CabinetDemoActionForm } from "@/components/demo/action-forms";
import { Card } from "@/components/ui/card";

export default function Page() {
  return (
    <>
      <h1>Tests</h1>
      <Card>
        <p>Start available tests and review previous results.</p>
        <CabinetDemoActionForm
          intent="test-start"
          label="Start test"
          redirectTo="/uk/cabinet/tests"
        />
      </Card>
    </>
  );
}
