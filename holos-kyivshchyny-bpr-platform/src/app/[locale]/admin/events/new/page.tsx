import { AdminDemoActionForm } from "@/components/demo/action-forms";
import { Card } from "@/components/ui/card";

export default function Page() {
  return (
    <>
      <h1>New Event</h1>
      <Card>
        <p>
          Create a new BPR/CPD event with program, speaker, materials, and
          testing settings.
        </p>
        <AdminDemoActionForm
          intent="event-create"
          label="Create event"
          redirectTo="/uk/admin/events/new"
        />
      </Card>
    </>
  );
}
