import { notFound } from "next/navigation";
import { Card } from "@/components/ui/card";
import { demoData, experts } from "@/lib/constants/demo-data";

export default async function ExpertPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
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
        <h2>Пов’язані навчальні події</h2>
        <ul>
          {conducted.map((event) => (
            <li key={event.slug}>{event.title}</li>
          ))}
        </ul>
      </Card>
    </main>
  );
}
