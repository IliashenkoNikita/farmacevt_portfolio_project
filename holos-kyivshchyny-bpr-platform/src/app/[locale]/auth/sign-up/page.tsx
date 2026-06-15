import { Card } from "@/components/ui/card";
import { getMessages, type Locale } from "@/lib/i18n/config";

export default async function SignUpPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const messages = getMessages(locale);

  return (
    <main id="main" className="container">
      <h1>{messages.auth.signUpTitle}</h1>
      <Card>
        <p>{messages.auth.signUpBody}</p>
      </Card>
    </main>
  );
}
