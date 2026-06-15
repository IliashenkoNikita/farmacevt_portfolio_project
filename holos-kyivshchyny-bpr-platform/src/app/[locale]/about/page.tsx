import { Card } from "@/components/ui/card";
import { getMessages, type Locale } from "@/lib/i18n/config";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const messages = getMessages(locale);

  return (
    <main id="main" className="container">
      <h1>{messages.about.title}</h1>
      <Card>
        <p>{messages.about.body}</p>
      </Card>
    </main>
  );
}
