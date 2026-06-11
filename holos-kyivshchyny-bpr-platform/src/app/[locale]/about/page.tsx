import { Card } from "@/components/ui/card";

export default function Page() {
  return (
    <main id="main" className="container">
      <h1>Про платформу</h1>
      <Card>
        <p>
          Місія платформи — підтримувати професійний розвиток фахівців
          фармацевтичної галузі, медичних виробів та систем якості через
          навчальні заходи, тестування, матеріали й прозору сертифікацію.
        </p>
      </Card>
    </main>
  );
}
