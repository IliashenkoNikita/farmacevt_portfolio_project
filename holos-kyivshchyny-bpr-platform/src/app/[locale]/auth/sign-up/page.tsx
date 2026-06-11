import { Card } from "@/components/ui/card";

export default function Page() {
  return (
    <main id="main" className="container">
      <h1>Реєстрація</h1>
      <Card>
        <p>
          Реєстрація користувачів працює через Better Auth. Після підключення
          production-пошти ця сторінка має надсилати підтвердження та вести
          користувача до особистого кабінету.
        </p>
      </Card>
    </main>
  );
}
