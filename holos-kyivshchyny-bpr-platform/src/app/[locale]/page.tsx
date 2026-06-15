import Link from "next/link";
import { AnimatedHero } from "@/components/animation/animated-hero";
import { StaggerCards } from "@/components/animation/stagger-cards";
import { AnimatedMetric } from "@/components/animation/animated-metric";
import { CertificatePreview } from "@/components/ui/certificate-preview";
import { Card } from "@/components/ui/card";
import { EventCard } from "@/components/marketing/event-card";
import { ExpertCard } from "@/components/marketing/expert-card";
import { demoData, experts } from "@/lib/constants/demo-data";
import { getMessages, localizePath, type Locale } from "@/lib/i18n/config";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const messages = getMessages(locale);

  return (
    <main id="main">
      <AnimatedHero
        title={messages.brand.name}
        slogan={messages.home.slogan}
        eyebrow={messages.home.eyebrow}
        primaryLabel={messages.home.primaryCta}
        secondaryLabel={messages.home.secondaryCta}
        locale={locale}
      />
      <section className="container section-lead">
        <p className="disclaimer">{messages.common.demoDisclaimer}</p>
        <h2>{messages.home.leadTitle}</h2>
        <p>{messages.home.leadBody}</p>
        <div className="grid metric-grid">
          <AnimatedMetric
            value={demoData.events.length}
            label={messages.home.metrics.events}
          />
          <AnimatedMetric
            value={experts.length}
            label={messages.home.metrics.experts}
          />
          <AnimatedMetric
            value={2}
            label={messages.home.metrics.certificates}
          />
        </div>
      </section>
      <section className="container">
        <div className="section-heading">
          <h2>{messages.home.upcomingEvents}</h2>
          <Link className="text-link" href={localizePath(locale, "events")}>
            {messages.common.allEvents}
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
          <h2>{messages.home.expertsTitle}</h2>
          <Link className="text-link" href={localizePath(locale, "experts")}>
            {messages.common.team}
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
          <h2>{messages.home.trustTitle}</h2>
          <p>{messages.home.trustBody}</p>
          <Link className="primary-link" href={localizePath(locale, "bpr")}>
            {messages.home.trustCta}
          </Link>
        </Card>
        <CertificatePreview />
        <Card className="card-interactive">
          <h2>{messages.home.verifyTitle}</h2>
          <p>{messages.home.verifyBody}</p>
          <Link
            className="primary-link"
            href={localizePath(
              locale,
              "certificate/verify/verify_demo_active_8YK4mP",
            )}
          >
            {messages.home.verifyCta}
          </Link>
        </Card>
      </section>
    </main>
  );
}
