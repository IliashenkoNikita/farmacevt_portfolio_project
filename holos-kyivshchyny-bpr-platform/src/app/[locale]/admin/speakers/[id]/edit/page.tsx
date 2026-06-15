import { AdminDemoActionForm } from "@/components/demo/action-forms";
import { Card } from "@/components/ui/card";
import { getMessages, type Locale } from "@/lib/i18n/config";

export default async function EditSpeakerPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = getMessages(locale).admin.pages.editSpeaker;

  return (
    <>
      <h1>{copy.title}</h1>
      <Card>
        <p>{copy.body}</p>
        <AdminDemoActionForm
          intent="speaker-edit"
          label={copy.action}
          redirectTo={"/" + locale + "/admin/speakers/demo/edit"}
        />
      </Card>
    </>
  );
}
