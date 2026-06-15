import { notFound } from "next/navigation";
import { Card } from "@/components/ui/card";
import { demoData, experts } from "@/lib/constants/demo-data";
import { getMessages, type Locale } from "@/lib/i18n/config";

export default async function ExpertPage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const messages = getMessages(locale);
  const expert = experts.find((item) => item.slug === slug);
  if (!expert) notFound();
  const conducted = demoData.events.filter(
    (event) => event.speaker.slug === slug,
  );

  return (
    <main id="main" className="container">
      <h1>{expert.name}</h1>
      <Card>
        <p>{expert.position}</p>
        <p>{expert.specialization}</p>
        <p>{expert.bio}</p>
        <h2>{messages.experts.relatedEvents}</h2>
        <ul>
          {conducted.map((event) => (
            <li key={event.slug}>{event.title}</li>
          ))}
        </ul>
      </Card>
    </main>
  );
}
