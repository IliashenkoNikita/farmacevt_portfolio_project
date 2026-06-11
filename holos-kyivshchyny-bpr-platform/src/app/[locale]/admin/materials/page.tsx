import { AdminDemoActionForm } from "@/components/demo/action-forms";
import { Card } from "@/components/ui/card";
import { FileUpload } from "@/components/ui/file-upload";

export default function Page() {
  return (
    <>
      <h1>Materials</h1>
      <Card>
        <p>
          Upload learning files and set access by registration, attendance, or
          certificate eligibility.
        </p>
        <FileUpload />
        <AdminDemoActionForm
          intent="materials-save"
          redirectTo="/uk/admin/materials"
        />
      </Card>
    </>
  );
}
