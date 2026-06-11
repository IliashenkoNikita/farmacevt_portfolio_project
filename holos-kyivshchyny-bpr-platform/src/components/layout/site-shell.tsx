import Link from "next/link";
import { signOutAction } from "@/server/actions/auth-actions";

export function SiteShell({
  locale,
  children,
}: {
  locale: string;
  children: React.ReactNode;
}) {
  const links = [
    ["Події", "events"],
    ["Експерти", "experts"],
    ["БПР", "bpr"],
    ["Акредитація", "accreditation"],
    ["Кабінет", "cabinet"],
    ["Адмін", "admin"],
  ];

  return (
    <>
      <a className="skip-link" href="#main">
        Перейти до контенту
      </a>
      <header className="site-header">
        <Link className="logo" href={"/" + locale} aria-label="Голос Київщини">
          <span aria-hidden="true">ГК</span>
          <span>Голос Київщини</span>
        </Link>
        <nav aria-label="Головна навігація">
          {links.map(([label, href]) => (
            <Link key={href} href={"/" + locale + "/" + href}>
              {label}
            </Link>
          ))}
        </nav>
        <form
          action={async () => {
            "use server";
            await signOutAction(locale);
          }}
        >
          <button className="header-action" type="submit">
            Вийти
          </button>
        </form>
      </header>
      {children}
      <footer className="footer">
        © 2026 Голос Київщини · Демо-версія для production-підготовки
      </footer>
    </>
  );
}
