import Link from "next/link";
import { getMessages } from "@/lib/i18n/config";

const links = [
  ["profile", "profile"],
  ["events", "events"],
  ["materials", "materials"],
  ["tests", "tests"],
  ["certificates", "certificates"],
  ["bpr-portfolio", "bprPortfolio"],
  ["license-reminders", "licenseReminders"],
] as const;

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
        {links.map(([slug, labelKey]) => (
          <Link key={slug} href={"/" + locale + "/cabinet/" + slug}>
            {messages.cabinet.navigation[labelKey]}
          </Link>
        ))}
      </aside>
      <section className="content">{children}</section>
    </main>
  );
}
