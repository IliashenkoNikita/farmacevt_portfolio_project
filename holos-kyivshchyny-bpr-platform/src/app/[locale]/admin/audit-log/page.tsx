import { AdminDemoActionForm } from "@/components/demo/action-forms";
import { Card } from "@/components/ui/card";
import { getMessages, type Locale } from "@/lib/i18n/config";

export default async function AuditLogPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = getMessages(locale).admin.pages.auditLog;

  return (
    <>
      <h1>{copy.title}</h1>
      <Card>
        <p>{copy.body}</p>
        <AdminDemoActionForm
          intent="audit-export"
          label={copy.action}
          redirectTo={"/" + locale + "/admin/audit-log"}
        />
      </Card>
    </>
  );
}
