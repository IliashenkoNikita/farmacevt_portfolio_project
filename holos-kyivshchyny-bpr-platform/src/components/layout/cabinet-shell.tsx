import Link from "next/link";
import { getMessages } from "@/lib/i18n/config";

const links = [
  "profile",
  "events",
  "materials",
  "tests",
  "certificates",
  "bpr-portfolio",
  "license-reminders",
];

export function CabinetShell({
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
        <h2>{messages.cabinet.title}</h2>
        {links.map((link) => (
          <Link key={link} href={"/" + locale + "/cabinet/" + link}>
            {link}
          </Link>
        ))}
      </aside>
      <section className="content">{children}</section>
    </main>
  );
}
