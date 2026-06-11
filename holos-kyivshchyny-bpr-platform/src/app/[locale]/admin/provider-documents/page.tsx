import { AdminDemoActionForm } from "@/components/demo/action-forms";
import { Card } from "@/components/ui/card";
import { FileUpload } from "@/components/ui/file-upload";

export default function Page() {
  return (
    <>
      <h1>Provider Documents</h1>
      <Card>
        <p>Upload and publish provider documents after legal approval.</p>
        <FileUpload />
        <AdminDemoActionForm
          intent="provider-documents-save"
          redirectTo="/uk/admin/provider-documents"
        />
      </Card>
    </>
  );
}
