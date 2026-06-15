import { Card } from "@/components/ui/card";
import { providerDocuments } from "@/lib/constants/demo-data";
import { getMessages, type Locale } from "@/lib/i18n/config";

export default async function AccreditationPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const messages = getMessages(locale);

  return (
    <main id="main" className="container">
      <h1>{messages.accreditation.title}</h1>
      <p className="disclaimer">{messages.common.demoDisclaimer}</p>
      <div className="grid-cards">
        {providerDocuments.map((title) => (
          <Card key={title} className="card-interactive">
            <h2>{title}</h2>
            <p>{messages.accreditation.documentBody}</p>
          </Card>
        ))}
      </div>
    </main>
  );
}
