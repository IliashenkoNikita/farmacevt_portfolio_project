import Link from "next/link";
import { getMessages } from "@/lib/i18n/config";

const links = [
  ["events", "events"],
  ["speakers", "speakers"],
  ["materials", "materials"],
  ["tests", "tests"],
  ["registrations", "registrations"],
  ["certificates", "certificates"],
  ["exports", "exports"],
  ["audit-log", "auditLog"],
  ["provider-documents", "providerDocuments"],
] as const;

export function AdminShell({
  locale,
  children,
}: {
  locale: string;
  children: React.ReactNode;
}) {
  const messages = getMessages(locale);

  return (
    <main id="main" className="admin-grid">
      <aside className="sidebar">
        <h2>{messages.admin.navTitle}</h2>
        {links.map(([slug, labelKey]) => (
          <Link key={slug} href={"/" + locale + "/admin/" + slug}>
            {messages.admin.navigation[labelKey]}
          </Link>
        ))}
      </aside>
      <section className="content">{children}</section>
    </main>
  );
}
