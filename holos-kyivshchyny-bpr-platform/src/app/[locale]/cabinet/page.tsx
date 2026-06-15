import { StatCard } from "@/components/ui/stat-card";
import { getMessages, type Locale } from "@/lib/i18n/config";

export default async function CabinetPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const messages = getMessages(locale);

  return (
    <>
      <h1>{messages.cabinet.title}</h1>
      <div className="grid">
        <StatCard label={messages.cabinet.nextEvent} value="18.07" />
        <StatCard label={messages.cabinet.bprPoints} value="10" />
        <StatCard label={messages.cabinet.certificates} value="1" />
      </div>
      <p>{messages.cabinet.body}</p>
    </>
  );
}
