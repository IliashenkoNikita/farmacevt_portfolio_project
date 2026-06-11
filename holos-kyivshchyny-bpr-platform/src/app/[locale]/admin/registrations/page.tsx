import { AdminDemoActionForm } from "@/components/demo/action-forms";
import { Card } from "@/components/ui/card";

export default function Page() {
  return (
    <>
      <h1>Registrations</h1>
      <Card>
        <p>
          Review registrations, update statuses, mark attendance, and prepare
          reminders.
        </p>
        <AdminDemoActionForm
          intent="registrations-save"
          redirectTo="/uk/admin/registrations"
        />
      </Card>
    </>
  );
}
