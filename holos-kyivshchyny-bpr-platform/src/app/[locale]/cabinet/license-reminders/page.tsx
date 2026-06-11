import { CabinetDemoActionForm } from "@/components/demo/action-forms";
import { Card } from "@/components/ui/card";

export default function Page() {
  return (
    <>
      <h1>License Reminders</h1>
      <Card>
        <p>Configure reminders for license renewal and BPR portfolio review.</p>
        <CabinetDemoActionForm
          intent="license-reminder-save"
          label="Save reminder"
          redirectTo="/uk/cabinet/license-reminders"
        />
      </Card>
    </>
  );
}
