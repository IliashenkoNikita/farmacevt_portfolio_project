import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { submitContactAction } from "@/server/actions/demo-actions";

export default async function ContactsPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<Record<string, string | undefined>>;
}) {
  const { locale } = await params;
  const query = await searchParams;
  const contactStatus = query.contact;
  return (
    <main id="main" className="container">
      <h1>Contacts</h1>
      <div className="grid">
        <Card>
          <p>Phone: +380 44 000 00 00</p>
          <p>Email: info@holos.example</p>
          <p>Address: Kyiv, Ukraine</p>
          <p>Working hours: Mon-Fri 09:00-18:00</p>
          <p>Social networks: LinkedIn, Facebook, YouTube</p>
          <div className="h-48 rounded bg-slate-200">Map</div>
        </Card>
        <Card>
          <form action={submitContactAction} className="card-list">
            <input name="locale" type="hidden" value={locale} />
            <Input name="email" placeholder="Your email" type="email" />
            <Textarea name="message" placeholder="Message" />
            <button className="primary-link" type="submit">
              Send
            </button>
          </form>
          {contactStatus === "sent" ? (
            <p className="text-sm text-emerald-700" role="status">
              Message sent.
            </p>
          ) : null}
          {contactStatus === "invalid" ? (
            <p className="text-sm text-red-700" role="status">
              Enter a valid email and message.
            </p>
          ) : null}
        </Card>
      </div>
    </main>
  );
}
