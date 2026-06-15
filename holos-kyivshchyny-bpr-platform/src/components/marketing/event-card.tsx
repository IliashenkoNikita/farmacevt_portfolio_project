import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { getMessages } from "@/lib/i18n/config";

export function EventCard({
  event,
  locale,
}: {
  event: {
    slug: string;
    title: string;
    category: string;
    date: string;
    points: number;
    price: string;
  };
  locale: string;
}) {
  const messages = getMessages(locale);

  return (
    <Card className="card-interactive">
      <Badge>{event.category}</Badge>
      <h3 className="mt-3 text-xl font-bold">{event.title}</h3>
      <p className="text-slate-600">
        {event.date} {messages.common.middleDot} {event.points}{" "}
        {messages.events.points} {messages.common.middleDot} {event.price}
      </p>
      <Link
        className="mt-4 inline-flex font-semibold text-emerald-800"
        href={"/" + locale + "/events/" + event.slug}
      >
        {messages.events.details}
      </Link>
    </Card>
  );
}
