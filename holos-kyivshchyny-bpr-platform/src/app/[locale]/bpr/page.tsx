import { Card } from "@/components/ui/card";

export default function Page() {
  return (
    <main id="main" className="container">
      <h1>БПР/CPD</h1>
      <Card>
        <p>
          Сторінка описує логіку безперервного професійного розвитку: навчальні
          заходи, тестування, нарахування балів, сертифікати та портфоліо
          учасника. Перед production-запуском юридична команда має підтвердити
          відповідність формулювань чинним вимогам.
        </p>
      </Card>
    </main>
  );
}
