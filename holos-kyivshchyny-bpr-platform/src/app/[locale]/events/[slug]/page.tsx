import { notFound } from "next/navigation";
import { registerForEventAction } from "@/server/actions/registration-actions";
import { demoData, organizationalInfo } from "@/lib/constants/demo-data";
import { getMessages, type Locale } from "@/lib/i18n/config";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card } from "@/components/ui/card";

export default async function EventDetail({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const messages = getMessages(locale);
  const event = demoData.events.find((item) => item.slug === slug);
  if (!event) notFound();

  return (
    <main id="main" className="container">
      <h1>{event.title}</h1>
      <div className="grid">
        <Card>
          <p>
            {event.category} {messages.common.middleDot} {event.format}{" "}
            {messages.common.middleDot} {event.date}
          </p>
          <p>
            {event.points} {messages.event.points} {messages.common.middleDot}{" "}
            {event.hours} {messages.event.hours} {messages.common.middleDot}{" "}
            {event.price}
          </p>
          <p>
            {messages.event.speaker}: {event.speaker.name}
          </p>
          <p>{organizationalInfo}</p>
          <h2>{messages.event.program}</h2>
          <ul>
            {messages.event.programItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Card>
        <Card>
          <h2>{messages.event.registration}</h2>
          <form action={registerForEventAction} className="card-list">
            <input type="hidden" name="locale" value={locale} />
            <input type="hidden" name="eventSlug" value={event.slug} />
            <Input
              name="fullName"
              placeholder={messages.event.fullName}
              defaultValue="Марія Петренко"
            />
            <Input name="birthDate" type="date" defaultValue="1990-01-01" />
            <Input
              name="phone"
              placeholder={messages.event.phone}
              defaultValue="+380501112233"
            />
            <Input
              name="education"
              placeholder={messages.event.education}
              defaultValue="Вища фармацевтична"
            />
            <Input
              name="specialty"
              placeholder={messages.event.specialty}
              defaultValue="Фармація"
            />
            <Input
              name="organizationName"
              placeholder={messages.event.organizationName}
              defaultValue="ТОВ Медфарм"
            />
            <Input
              name="position"
              placeholder={messages.event.position}
              defaultValue="Фармацевт"
            />
            <Input
              name="edrpou"
              placeholder={messages.event.edrpou}
              defaultValue="12345678"
            />
            <Select name="channel">
              <option value="EMAIL">Email</option>
              <option value="SMS">SMS</option>
              <option value="VIBER">Viber</option>
            </Select>
            <label className="flex gap-2">
              <Checkbox name="consent" required /> {messages.event.consent}
            </label>
            <button className="primary-link" type="submit">
              {messages.event.register}
            </button>
          </form>
        </Card>
      </div>
    </main>
  );
}
