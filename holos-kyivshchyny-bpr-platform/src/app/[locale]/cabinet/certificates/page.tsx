import { CabinetDemoActionForm } from "@/components/demo/action-forms";
import { Card } from "@/components/ui/card";
import { getMessages, type Locale } from "@/lib/i18n/config";

export default async function CabinetCertificatesPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = getMessages(locale).cabinet.pages.certificates;

  return (
    <>
      <h1>{copy.title}</h1>
      <Card>
        <p>{copy.body}</p>
        <CabinetDemoActionForm
          intent="certificate-download"
          label={copy.action}
          redirectTo={"/" + locale + "/cabinet/certificates"}
        />
      </Card>
    </>
  );
}
