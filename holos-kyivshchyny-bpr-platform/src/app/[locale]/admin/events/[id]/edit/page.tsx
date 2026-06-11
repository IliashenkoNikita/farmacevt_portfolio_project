import { AdminDemoActionForm } from "@/components/demo/action-forms";
import { Card } from "@/components/ui/card";

export default function Page() {
  return (
    <>
      <h1>Edit Event</h1>
      <Card>
        <p>
          Edit event details, program, publication status, materials, tests, and
          certificate settings.
        </p>
        <AdminDemoActionForm
          intent="event-edit"
          label="Save event"
          redirectTo="/uk/admin/events/demo/edit"
        />
      </Card>
    </>
  );
}
