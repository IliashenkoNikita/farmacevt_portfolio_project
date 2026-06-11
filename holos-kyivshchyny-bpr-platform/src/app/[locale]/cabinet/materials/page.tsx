import { CabinetDemoActionForm } from "@/components/demo/action-forms";
import { Card } from "@/components/ui/card";

export default function Page() {
  return (
    <>
      <h1>Materials</h1>
      <Card>
        <p>
          Open presentations, recordings, and learning files available for your
          events.
        </p>
        <CabinetDemoActionForm
          intent="materials-open"
          label="Open materials"
          redirectTo="/uk/cabinet/materials"
        />
      </Card>
    </>
  );
}
