import Link from "next/link";
import { signOutAction } from "@/server/actions/auth-actions";
import {
  getLocaleOrDefault,
  getMessages,
  locales,
  localizePath,
} from "@/lib/i18n/config";

export function SiteShell({
  locale,
  children,
}: {
  locale: string;
  children: React.ReactNode;
}) {
  const activeLocale = getLocaleOrDefault(locale);
  const messages = getMessages(activeLocale);
  const links = [
    [messages.nav.events, "events"],
    [messages.nav.experts, "experts"],
    [messages.nav.bpr, "bpr"],
    [messages.nav.accreditation, "accreditation"],
    [messages.nav.cabinet, "cabinet"],
    [messages.nav.admin, "admin"],
  ] as const;

  return (
    <>
      <a className="skip-link" href="#main">
        {messages.shell.skip}
      </a>
      <header className="site-header">
        <Link
          className="logo"
          href={localizePath(activeLocale)}
          aria-label={messages.brand.name}
        >
          <span aria-hidden="true">{messages.brand.short}</span>
          <span>{messages.brand.name}</span>
        </Link>
        <nav aria-label={messages.shell.mainNav}>
          {links.map(([label, href]) => (
            <Link key={href} href={localizePath(activeLocale, href)}>
              {label}
            </Link>
          ))}
        </nav>
        <nav
          className="language-switcher"
          aria-label={messages.shell.languageLabel}
        >
          {locales.map((item) => (
            <Link
              key={item}
              href={localizePath(item)}
              aria-current={item === activeLocale ? "page" : undefined}
            >
              {messages.shell.languageNames[item]}
            </Link>
          ))}
        </nav>
        <form
          action={async () => {
            "use server";
            await signOutAction(activeLocale);
          }}
        >
          <button className="header-action" type="submit">
            {messages.shell.signOut}
          </button>
        </form>
      </header>
      {children}
      <footer className="footer">{messages.shell.footer}</footer>
    </>
  );
}
