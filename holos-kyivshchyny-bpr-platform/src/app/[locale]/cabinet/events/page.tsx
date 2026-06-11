import { CabinetDemoActionForm } from "@/components/demo/action-forms";
import { Card } from "@/components/ui/card";

export default function Page() {
  return (
    <>
      <h1>My Events</h1>
      <Card>
        <p>Track registered events and access instructions.</p>
        <CabinetDemoActionForm
          intent="events-refresh"
          label="Refresh events"
          redirectTo="/uk/cabinet/events"
        />
      </Card>
    </>
  );
}
