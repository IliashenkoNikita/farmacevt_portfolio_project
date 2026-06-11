import { Card } from "@/components/ui/card";
import { demoDisclaimer, providerDocuments } from "@/lib/constants/demo-data";
export default function AccreditationPage() {
  return (
    <main id="main" className="container">
      <h1>Акредитація та документи провайдера</h1>
      <p className="disclaimer">{demoDisclaimer}</p>
      <div className="grid-cards">
        {providerDocuments.map((title) => (
          <Card key={title}>
            <h2>{title}</h2>
            <p>
              Документ доступний після завантаження та перевірки
              адміністратором. Офіційну акредитацію не заявлено для демо-даних.
            </p>
          </Card>
        ))}
      </div>
    </main>
  );
}
