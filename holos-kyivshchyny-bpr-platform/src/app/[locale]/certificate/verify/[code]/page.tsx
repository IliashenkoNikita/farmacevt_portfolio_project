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
      <h1>�������� ����������</h1>
      <Card>
        <p>������: {data.status}</p>
        <p>�������: {data.participantFullName}</p>
        <p>����: {data.eventTitle}</p>
        <p>���� ��䳿: {data.eventDate}</p>
        <p>���� ���: {data.bprPoints}</p>
        <p>�����: {data.certificateNumber}</p>
        <p>���� ������: {data.issueDate}</p>
      </Card>
    </main>
  );
}
