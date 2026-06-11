import { signInAction } from "@/server/actions/auth-actions";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
export default async function SignInPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <main id="main" className="container">
      <h1>Вхід</h1>
      <Card>
        <form action={signInAction} className="card-list">
          <input type="hidden" name="locale" value={locale} />
          <Input name="email" type="email" defaultValue="user1@holos.example" />
          <Input name="password" type="password" defaultValue="demo-password" />
          <button className="primary-link" type="submit">
            Увійти
          </button>
        </form>
        <p>Демо: admin@holos.example або superadmin@holos.example</p>
      </Card>
    </main>
  );
}
