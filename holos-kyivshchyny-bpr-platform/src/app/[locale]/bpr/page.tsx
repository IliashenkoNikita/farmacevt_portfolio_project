import { Card } from "@/components/ui/card";
import { getMessages, type Locale } from "@/lib/i18n/config";

export default async function BprPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const messages = getMessages(locale);

  return (
    <main id="main" className="container">
      <h1>{messages.bpr.title}</h1>
      <Card>
        <p>{messages.bpr.body}</p>
      </Card>
    </main>
  );
}
