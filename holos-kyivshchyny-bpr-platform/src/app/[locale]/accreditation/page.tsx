import { Card } from "@/components/ui/card";
import { demoDisclaimer, providerDocuments } from "@/lib/constants/demo-data";

export default function AccreditationPage() {
  return (
    <main id="main" className="container">
      <h1>Акредитація та документи провайдера</h1>
      <p className="disclaimer">{demoDisclaimer}</p>
      <div className="grid-cards">
        {providerDocuments.map((title) => (
          <Card key={title} className="card-interactive">
            <h2>{title}</h2>
            <p>
              Документ описує внутрішню процедуру провайдера, правила
              підготовки, оцінювання та збереження доказів для юридичної
              перевірки. Остаточний статус і зміст мають бути підтверджені
              відповідальними особами перед production-запуском.
            </p>
          </Card>
        ))}
      </div>
    </main>
  );
}
