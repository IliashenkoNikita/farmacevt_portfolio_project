import { ExpertCard } from "@/components/marketing/expert-card";
import { experts } from "@/lib/constants/demo-data";
import { getMessages, type Locale } from "@/lib/i18n/config";

export default async function ExpertsPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const messages = getMessages(locale);

  return (
    <main id="main" className="container">
      <h1>{messages.experts.title}</h1>
      <div className="grid-cards">
        {experts.map((expert) => (
          <ExpertCard key={expert.slug} expert={expert} locale={locale} />
        ))}
      </div>
    </main>
  );
}
