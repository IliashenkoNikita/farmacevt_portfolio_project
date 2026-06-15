import Link from "next/link";
import { defaultLocale, getMessages, localizePath } from "@/lib/i18n/config";

export default function NotFound() {
  const messages = getMessages(defaultLocale);

  return (
    <main className="not-found">
      <section className="not-found-panel">
        <p className="eyebrow">404</p>
        <h1>{messages.notFound.title}</h1>
        <p>{messages.notFound.body}</p>
        <div className="actions">
          <Link className="primary-link" href={localizePath(defaultLocale)}>
            {messages.notFound.home}
          </Link>
          <Link
            className="secondary-link"
            href={localizePath(defaultLocale, "events")}
          >
            {messages.notFound.events}
          </Link>
        </div>
      </section>
    </main>
  );
}
