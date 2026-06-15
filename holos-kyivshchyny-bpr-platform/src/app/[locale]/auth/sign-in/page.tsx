import { signInAction } from "@/server/actions/auth-actions";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { getMessages, type Locale } from "@/lib/i18n/config";

export default async function SignInPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const messages = getMessages(locale);

  return (
    <main id="main" className="container auth-page">
      <h1>{messages.auth.signInTitle}</h1>
      <Card>
        <form action={signInAction} className="card-list">
          <input type="hidden" name="locale" value={locale} />
          <label className="field">
            <span>{messages.auth.emailLabel}</span>
            <Input
              name="email"
              type="email"
              defaultValue="user1@holos.example"
            />
          </label>
          <label className="field">
            <span>{messages.auth.passwordLabel}</span>
            <Input
              name="password"
              type="password"
              defaultValue="demo-password"
            />
          </label>
          <button className="primary-link" type="submit">
            {messages.auth.submit}
          </button>
        </form>
        <p>{messages.auth.demoHint}</p>
      </Card>
    </main>
  );
}
