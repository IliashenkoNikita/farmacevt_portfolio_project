import { Card } from "@/components/ui/card";
import { demoData } from "@/lib/constants/demo-data";
import { getMessages, type Locale } from "@/lib/i18n/config";
import { publicVerification } from "@/server/services/certificate-service";

export default async function VerifyPage({
  params,
}: {
  params: Promise<{ locale: Locale; code: string }>;
}) {
  const { locale, code } = await params;
  const messages = getMessages(locale);
  const record =
    demoData.certificates.find((item) => item.verificationCode === code) ??
    demoData.certificates[0];
  const data = publicVerification(record);

  return (
    <main id="main" className="container">
      <h1>{messages.certificate.verifyTitle}</h1>
      <Card>
        <p>
          {messages.certificate.status}: {data.status}
        </p>
        <p>
          {messages.certificate.participant}: {data.participantFullName}
        </p>
        <p>
          {messages.certificate.event}: {data.eventTitle}
        </p>
        <p>
          {messages.certificate.eventDate}: {data.eventDate}
        </p>
        <p>
          {messages.certificate.points}: {data.bprPoints}
        </p>
        <p>
          {messages.certificate.number}: {data.certificateNumber}
        </p>
        <p>
          {messages.certificate.issueDate}: {data.issueDate}
        </p>
      </Card>
    </main>
  );
}
