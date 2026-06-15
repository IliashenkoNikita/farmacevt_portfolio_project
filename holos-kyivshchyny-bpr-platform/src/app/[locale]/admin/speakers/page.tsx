import { AdminDemoActionForm } from "@/components/demo/action-forms";
import { Card } from "@/components/ui/card";
import { FileUpload } from "@/components/ui/file-upload";
import { getMessages, type Locale } from "@/lib/i18n/config";

export default async function SpeakersPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const messages = getMessages(locale);
  const copy = messages.admin.pages.speakers;

  return (
    <>
      <h1>{copy.title}</h1>
      <Card>
        <p>{copy.body}</p>
        <FileUpload label={messages.upload.file} />
        <AdminDemoActionForm
          intent="speakers-save"
          label={copy.action}
          redirectTo={"/" + locale + "/admin/speakers"}
        />
      </Card>
    </>
  );
}
