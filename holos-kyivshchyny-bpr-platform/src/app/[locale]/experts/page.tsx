import { ExpertCard } from "@/components/marketing/expert-card";
import { experts } from "@/lib/constants/demo-data";

export default async function ExpertsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <main id="main" className="container">
      <h1>Експерти</h1>
      <div className="grid-cards">
        {experts.map((expert) => (
          <ExpertCard key={expert.slug} expert={expert} locale={locale} />
        ))}
      </div>
    </main>
  );
}
