import { CabinetDemoActionForm } from "@/components/demo/action-forms";
import { Card } from "@/components/ui/card";

export default function Page() {
  return (
    <>
      <h1>Certificates</h1>
      <Card>
        <p>Review issued certificates and download the current PDF copy.</p>
        <CabinetDemoActionForm
          intent="certificate-download"
          label="Download PDF"
          redirectTo="/uk/cabinet/certificates"
        />
      </Card>
    </>
  );
}
