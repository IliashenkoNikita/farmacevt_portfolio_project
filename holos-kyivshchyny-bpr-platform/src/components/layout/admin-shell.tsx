import Link from "next/link";
import { getMessages } from "@/lib/i18n/config";

const links = [
  "events",
  "speakers",
  "materials",
  "tests",
  "registrations",
  "certificates",
  "exports",
  "audit-log",
  "provider-documents",
];

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
        {links.map((link) => (
          <Link key={link} href={"/" + locale + "/admin/" + link}>
            {link}
          </Link>
        ))}
      </aside>
      <section className="content">{children}</section>
    </main>
  );
}
