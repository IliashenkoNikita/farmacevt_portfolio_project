import {
  AdminDemoActionForm,
  AdminExportActionForm,
} from "@/components/demo/action-forms";
import { Card } from "@/components/ui/card";
import { getMessages, type Locale } from "@/lib/i18n/config";

export default async function AdminPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const messages = getMessages(locale);

  return (
    <>
      <h1>{messages.admin.title}</h1>
      <div className="grid-cards">
        <Card>
          <h2>{messages.admin.contentTitle}</h2>
          <p>{messages.admin.contentBody}</p>
          <AdminDemoActionForm
            intent="admin-content-review"
            label={messages.admin.reviewContent}
            redirectTo={"/" + locale + "/admin"}
          />
        </Card>
        <Card>
          <h2>{messages.admin.reportsTitle}</h2>
          <p>{messages.admin.reportsBody}</p>
          <AdminExportActionForm redirectTo={"/" + locale + "/admin"} />
        </Card>
      </div>
    </>
  );
}
