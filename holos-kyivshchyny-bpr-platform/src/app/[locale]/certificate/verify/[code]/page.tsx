import { Card } from "@/components/ui/card";
import { demoData } from "@/lib/constants/demo-data";
import { publicVerification } from "@/server/services/certificate-service";
export default async function VerifyPage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code } = await params;
  const record =
    demoData.certificates.find((item) => item.verificationCode === code) ??
    demoData.certificates[0];
  const data = publicVerification(record);
  return (
    <main id="main" className="container">
      <h1>Перевірка сертифіката</h1>
      <Card>
        <p>Статус: {data.status}</p>
        <p>Учасник: {data.participantFullName}</p>
        <p>Подія: {data.eventTitle}</p>
        <p>Дата події: {data.eventDate}</p>
        <p>Бали БПР: {data.bprPoints}</p>
        <p>Номер: {data.certificateNumber}</p>
        <p>Дата видачі: {data.issueDate}</p>
      </Card>
    </main>
  );
}
