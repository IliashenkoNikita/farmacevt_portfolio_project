import { StatCard } from "@/components/ui/stat-card";

export default function CabinetPage() {
  return (
    <>
      <h1>Кабінет</h1>
      <div className="grid">
        <StatCard label="Найближча подія" value="18.07" />
        <StatCard label="Бали БПР" value="10" />
        <StatCard label="Сертифікати" value="1" />
      </div>
      <p>
        Кабінет об’єднує події, матеріали, сертифікати та портфоліо БПР учасника
        в одному робочому просторі.
      </p>
    </>
  );
}
