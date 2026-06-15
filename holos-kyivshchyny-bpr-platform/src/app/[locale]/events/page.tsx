import { EventFilters } from "@/components/events/event-filters";
import { EventCard } from "@/components/marketing/event-card";
import { EmptyState } from "@/components/ui/empty-state";
import { Pagination } from "@/components/ui/pagination";
import { categories, demoData } from "@/lib/constants/demo-data";
import { getMessages, type Locale } from "@/lib/i18n/config";

export default async function EventsPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: Locale }>;
  searchParams: Promise<Record<string, string | undefined>>;
}) {
  const { locale } = await params;
  const messages = getMessages(locale);
  const query = await searchParams;
  const minimumPoints = Number(query.points ?? "0");
  const events = demoData.events.filter((event) => {
    const matchesText =
      !query.q || event.title.toLowerCase().includes(query.q.toLowerCase());
    const matchesCategory =
      !query.category || event.category === query.category;
    const matchesFormat = !query.format || event.format === query.format;
    const matchesDate = !query.date || event.date >= query.date;
    const matchesPoints =
      !query.points ||
      (!Number.isNaN(minimumPoints) && event.points >= minimumPoints);

    return (
      matchesText &&
      matchesCategory &&
      matchesFormat &&
      matchesDate &&
      matchesPoints
    );
  });

  return (
    <main id="main" className="container">
      <h1>{messages.events.title}</h1>
      <EventFilters
        categories={categories}
        values={query}
        labels={messages.events.filters}
      />
      <p className="text-sm text-slate-600" aria-live="polite">
        {messages.events.found}: {events.length}
      </p>
      <div className="grid-cards">
        {events.length ? (
          events.map((event) => (
            <EventCard key={event.slug} event={event} locale={locale} />
          ))
        ) : (
          <EmptyState title={messages.events.empty} />
        )}
      </div>
      <Pagination page={1} totalPages={1} />
    </main>
  );
}
