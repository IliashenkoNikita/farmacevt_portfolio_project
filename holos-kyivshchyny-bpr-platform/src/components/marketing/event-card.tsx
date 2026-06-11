import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
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
  return (
    <Card>
      <Badge>{event.category}</Badge>
      <h3 className="mt-3 text-xl font-bold">{event.title}</h3>
      <p className="text-slate-600">
        {event.date} · {event.points} балів БПР · {event.price}
      </p>
      <Link
        className="mt-4 inline-flex font-semibold text-emerald-800"
        href={"/" + locale + "/events/" + event.slug}
      >
        Детальніше
      </Link>
    </Card>
  );
}
