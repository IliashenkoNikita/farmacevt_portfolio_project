import Link from "next/link";
import { AnimatedHero } from "@/components/animation/animated-hero";
import { StaggerCards } from "@/components/animation/stagger-cards";
import { AnimatedMetric } from "@/components/animation/animated-metric";
import { CertificatePreview } from "@/components/ui/certificate-preview";
import { Card } from "@/components/ui/card";
import { EventCard } from "@/components/marketing/event-card";
import { ExpertCard } from "@/components/marketing/expert-card";
import { demoDisclaimer, demoData, experts } from "@/lib/constants/demo-data";
import { getMessages } from "@/lib/i18n/config";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = getMessages(locale);

  return (
    <main id="main">
      <AnimatedHero
        title={messages.name}
        slogan={messages.slogan}
        locale={locale}
      />
      <section className="container section-lead">
        <p className="disclaimer">{demoDisclaimer}</p>
        <h2>Платформа для професійного розвитку</h2>
        <p>
          Семінари, вебінари, e-learning, тестування, БПР-бали,
          сертифікати, матеріали та кабінет учасника для фахівців охорони
          здоров’я, фармації, медичних виробів і GMP/GDP.
        </p>
        <div className="grid metric-grid">
          <AnimatedMetric value={demoData.events.length} label="подій у демо" />
          <AnimatedMetric value={experts.length} label="експерти" />
          <AnimatedMetric value={2} label="сертифікати у реєстрі" />
        </div>
      </section>
      <section className="container">
        <div className="section-heading">
          <h2>Найближчі події</h2>
          <Link className="text-link" href={"/" + locale + "/events"}>
            Усі події
          </Link>
        </div>
        <StaggerCards>
          {demoData.events.slice(0, 3).map((event) => (
            <EventCard key={event.slug} event={event} locale={locale} />
          ))}
        </StaggerCards>
      </section>
      <section className="container">
        <div className="section-heading">
          <h2>Експерти</h2>
          <Link className="text-link" href={"/" + locale + "/experts"}>
            Команда
          </Link>
        </div>
        <StaggerCards>
          {experts.slice(0, 3).map((expert) => (
            <ExpertCard key={expert.slug} expert={expert} locale={locale} />
          ))}
        </StaggerCards>
      </section>
      <section className="container grid">
        <Card className="card-interactive">
          <h2>Довіра БПР</h2>
          <p>
            Процедури оцінювання, тестування, сертифікації та портфоліо БПР
            задокументовані для юридичної перевірки перед production.
          </p>
          <Link className="primary-link" href={"/" + locale + "/bpr"}>
            Дізнатися про БПР
          </Link>
        </Card>
        <CertificatePreview />
        <Card className="card-interactive">
          <h2>Перевірка сертифіката</h2>
          <p>
            Роботодавець або зовнішній перевіряючий бачить лише мінімальні
            дані сертифіката.
          </p>
          <Link
            className="primary-link"
            href={
              "/" + locale + "/certificate/verify/verify_demo_active_8YK4mP"
            }
          >
            Перевірити демо
          </Link>
        </Card>
      </section>
    </main>
  );
}
