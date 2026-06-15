import { AdminExportActionButton } from "@/components/demo/action-forms";
import { Card } from "@/components/ui/card";
import { getMessages, type Locale } from "@/lib/i18n/config";

export default async function ExportsPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const messages = getMessages(locale);
  const copy = messages.admin.pages.exports;

  return (
    <>
      <h1>{copy.title}</h1>
      <Card>
        <p>{copy.body}</p>
        <AdminExportActionButton
          label={messages.admin.exportParticipants}
          redirectTo={"/" + locale + "/admin/exports"}
        />
      </Card>
    </>
  );
}
