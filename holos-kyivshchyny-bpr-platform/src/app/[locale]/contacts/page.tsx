import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { getMessages, type Locale } from "@/lib/i18n/config";
import { submitContactAction } from "@/server/actions/demo-actions";

export default async function ContactsPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: Locale }>;
  searchParams: Promise<Record<string, string | undefined>>;
}) {
  const { locale } = await params;
  const messages = getMessages(locale);
  const query = await searchParams;
  const contactStatus = query.contact;

  return (
    <main id="main" className="container">
      <h1>{messages.contacts.title}</h1>
      <div className="grid">
        <Card>
          <p>{messages.contacts.phone}: +380 44 000 00 00</p>
          <p>{messages.contacts.email}: info@holos.example</p>
          <p>
            {messages.contacts.address}: {messages.contacts.addressValue}
          </p>
          <p>
            {messages.contacts.workingHours}:{" "}
            {messages.contacts.workingHoursValue}
          </p>
          <p>{messages.contacts.socialNetworks}: LinkedIn, Facebook, YouTube</p>
          <div className="h-48 rounded bg-slate-200">
            {messages.contacts.map}
          </div>
        </Card>
        <Card>
          <form action={submitContactAction} className="card-list">
            <input name="locale" type="hidden" value={locale} />
            <Input
              name="email"
              placeholder={messages.contacts.emailPlaceholder}
              type="email"
            />
            <Textarea
              name="message"
              placeholder={messages.contacts.messagePlaceholder}
            />
            <button className="primary-link" type="submit">
              {messages.contacts.send}
            </button>
          </form>
          {contactStatus === "sent" ? (
            <p className="text-sm text-emerald-700" role="status">
              {messages.contacts.sent}
            </p>
          ) : null}
          {contactStatus === "invalid" ? (
            <p className="text-sm text-red-700" role="status">
              {messages.contacts.invalid}
            </p>
          ) : null}
        </Card>
      </div>
    </main>
  );
}
