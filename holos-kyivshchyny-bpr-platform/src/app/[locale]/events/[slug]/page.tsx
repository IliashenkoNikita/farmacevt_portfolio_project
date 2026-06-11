import { notFound } from "next/navigation";
import { registerForEventAction } from "@/server/actions/registration-actions";
import { demoData, organizationalInfo } from "@/lib/constants/demo-data";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card } from "@/components/ui/card";
export default async function EventDetail({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const event = demoData.events.find((item) => item.slug === slug);
  if (!event) notFound();
  return (
    <main id="main" className="container">
      <h1>{event.title}</h1>
      <div className="grid">
        <Card>
          <p>
            {event.category} � {event.format} � {event.date}
          </p>
          <p>
            {event.points} ���� ��� � {event.hours} ��� � {event.price}
          </p>
          <p>�����: {event.speaker.name}</p>
          <p>{organizationalInfo}</p>
          <h2>��������</h2>
          <ul>
            <li>����������� ��������</li>
            <li>�������� �����</li>
            <li>���������� �� �����������</li>
          </ul>
        </Card>
        <Card>
          <h2>���������</h2>
          <form action={registerForEventAction} className="card-list">
            <input type="hidden" name="locale" value={locale} />
            <input type="hidden" name="eventSlug" value={event.slug} />
            <Input
              name="fullName"
              placeholder="ϲ�"
              defaultValue="���� ��������"
            />
            <Input name="birthDate" type="date" defaultValue="1990-01-01" />
            <Input
              name="phone"
              placeholder="�������"
              defaultValue="+380501112233"
            />
            <Input
              name="education"
              placeholder="�����"
              defaultValue="���� �������������"
            />
            <Input
              name="specialty"
              placeholder="������������"
              defaultValue="��������"
            />
            <Input
              name="organizationName"
              placeholder="����������"
              defaultValue="���� ����������"
            />
            <Input
              name="position"
              placeholder="������"
              defaultValue="���������"
            />
            <Input name="edrpou" placeholder="������" defaultValue="12345678" />
            <Select name="channel">
              <option value="EMAIL">Email</option>
              <option value="SMS">SMS</option>
              <option value="VIBER">Viber</option>
            </Select>
            <label className="flex gap-2">
              <Checkbox name="consent" required /> ��� ����� �� ������� �����
            </label>
            <button className="primary-link" type="submit">
              ��������������
            </button>
          </form>
        </Card>
      </div>
    </main>
  );
}
