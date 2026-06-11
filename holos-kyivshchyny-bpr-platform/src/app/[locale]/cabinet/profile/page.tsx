import { CabinetDemoActionForm } from "@/components/demo/action-forms";
import { Card } from "@/components/ui/card";

export default function Page() {
  return (
    <>
      <h1>Profile</h1>
      <Card>
        <p>
          Update personal data used for event registration and certificates.
        </p>
        <CabinetDemoActionForm
          intent="profile-save"
          label="Save profile"
          redirectTo="/uk/cabinet/profile"
        />
      </Card>
    </>
  );
}
