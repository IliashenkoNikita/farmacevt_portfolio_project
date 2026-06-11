import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <section className="not-found-panel">
        <p className="eyebrow">404</p>
        <h1>Сторінку не знайдено</h1>
        <p>
          Можливо, посилання змінилося або сторінка ще не підготовлена для
          production-показу.
        </p>
        <div className="actions">
          <Link className="primary-link" href="/uk">
            На головну
          </Link>
          <Link className="secondary-link" href="/uk/events">
            Переглянути події
          </Link>
        </div>
      </section>
    </main>
  );
}
