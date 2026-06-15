import { CabinetDemoActionForm } from "@/components/demo/action-forms";
import { Card } from "@/components/ui/card";
import { getMessages, type Locale } from "@/lib/i18n/config";

export default async function CabinetEventsPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = getMessages(locale).cabinet.pages.events;

  return (
    <>
      <h1>{copy.title}</h1>
      <Card>
        <p>{copy.body}</p>
        <CabinetDemoActionForm
          intent="events-refresh"
          label={copy.action}
          redirectTo={"/" + locale + "/cabinet/events"}
        />
      </Card>
    </>
  );
}
