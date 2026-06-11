export const demoDisclaimer =
  "Демо-версія. Дані та документи потребують юридичної перевірки перед production.";

export const categories = [
  "Реєстрація ЛЗ",
  "GMP/GDP",
  "Медичні вироби",
  "Фармаконагляд",
] as const;

export const experts = [
  {
    slug: "olena-melnyk",
    name: "Олена Мельник",
    position: "Керівниця напряму фармаконагляду",
    specialization:
      "Фармаконагляд, безпека лікарських засобів, аудит процесів",
    bio: "Понад 12 років практики у фармаконагляді, навчанні відповідальних осіб та аудиті процесів.",
  },
  {
    slug: "andrii-koval",
    name: "Андрій Коваль",
    position: "Консультант GMP/GDP",
    specialization: "GMP/GDP, внутрішні аудити, CAPA",
    bio: "Допомагає фармацевтичним компаніям будувати якісні системи дистрибуції та виробництва.",
  },
  {
    slug: "iryna-shevchenko",
    name: "Ірина Шевченко",
    position: "Експертка з реєстрації ЛЗ",
    specialization: "Реєстрація лікарських засобів",
    bio: "Супроводжує регуляторні досьє, зміни та практичні навчання для реєстраційних команд.",
  },
  {
    slug: "maksym-honchar",
    name: "Максим Гончар",
    position: "Фахівець з медичних виробів",
    specialization: "Медичні вироби, технічні файли, відповідність",
    bio: "Проводить тренінги з оцінки відповідності, документації та постмаркетингового нагляду.",
  },
] as const;

export const organizationalInfo =
  "Подія відбуватиметься на платформі YouTube. У день проведення ви отримаєте персональне посилання на трансляцію. Нагадування з доступами email/SMS/Viber будуть надіслані за день до події та за 30 хвилин до старту. Запис події буде доступний протягом 30 днів. Сертифікат буде надіслано на вашу електронну пошту наступного дня після події.";

export const providerDocuments = [
  "Положення про оцінку заходів БПР",
  "Методологія оцінювання набутих знань",
  "Запобігання конфлікту інтересів",
  "Декларація про академічну доброчесність",
  "Нормативна база БПР в Україні",
  "Підтвердження від регулятора МОЗ / ВФАР, якщо доступне",
] as const;

const speakerBySlug = Object.fromEntries(
  experts.map((expert) => [expert.slug, expert]),
) as Record<(typeof experts)[number]["slug"], (typeof experts)[number]>;

export const demoData = {
  users: [
    {
      id: "u-super",
      email: "superadmin@holos.example",
      name: "Супер Адмін",
      role: "SUPER_ADMIN",
    },
    {
      id: "u-admin",
      email: "admin@holos.example",
      name: "Адміністратор",
      role: "ADMIN",
    },
    {
      id: "u-user-1",
      email: "user1@holos.example",
      name: "Марія Петренко",
      role: "USER",
    },
    {
      id: "u-user-2",
      email: "user2@holos.example",
      name: "Олег Іваненко",
      role: "USER",
    },
    {
      id: "u-user-3",
      email: "user3@holos.example",
      name: "Наталія Ковтун",
      role: "USER",
    },
  ],
  events: [
    {
      slug: "farmakonagliad-2026",
      code: "PV",
      title: "Фармаконагляд: практичні оновлення 2026",
      category: "Фармаконагляд",
      format: "WEBINAR",
      date: "2026-07-18",
      points: 10,
      hours: 4,
      speaker: speakerBySlug["olena-melnyk"],
      price: "1200 грн",
    },
    {
      slug: "gmp-gdp-audit",
      code: "GMP",
      title: "GMP/GDP аудит для відповідальних осіб",
      category: "GMP/GDP",
      format: "HYBRID",
      date: "2026-08-02",
      points: 15,
      hours: 6,
      speaker: speakerBySlug["andrii-koval"],
      price: "2400 грн",
    },
    {
      slug: "reestratsiia-lz",
      code: "RLZ",
      title: "Реєстрація ЛЗ: зміни, досьє, комунікація",
      category: "Реєстрація ЛЗ",
      format: "E_LEARNING",
      date: "2026-09-11",
      points: 12,
      hours: 5,
      speaker: speakerBySlug["iryna-shevchenko"],
      price: "1200 грн",
    },
    {
      slug: "medical-devices-qms",
      code: "MD",
      title: "Медичні вироби: QMS та технічна документація",
      category: "Медичні вироби",
      format: "SEMINAR",
      date: "2026-10-03",
      points: 8,
      hours: 3,
      speaker: speakerBySlug["maksym-honchar"],
      price: "2400 грн",
    },
    {
      slug: "pharma-quality-risk",
      code: "PQR",
      title: "Управління ризиками якості у фармації",
      category: "GMP/GDP",
      format: "ONLINE",
      date: "2026-11-14",
      points: 10,
      hours: 4,
      speaker: speakerBySlug["olena-melnyk"],
      price: "1200 грн",
    },
    {
      slug: "pv-case-workshop",
      code: "PVC",
      title: "Фармаконагляд: розбір кейсів та сигналів",
      category: "Фармаконагляд",
      format: "OFFLINE",
      date: "2026-12-05",
      points: 9,
      hours: 4,
      speaker: speakerBySlug["andrii-koval"],
      price: "2400 грн",
    },
  ],
  certificates: [
    {
      certificateNumber: "GK-BPR-2026-PV-000123",
      verificationCode: "verify_demo_active_8YK4mP",
      status: "ACTIVE",
      userName: "Марія Петренко",
      eventTitle: "Фармаконагляд: практичні оновлення 2026",
      eventDate: "2026-07-18",
      points: 10,
      issuedAt: "2026-07-19",
      providerName: "Holos Kyivshchyny",
      officialBprEventRegistrationNumber: "BPR-2026-PV-001",
    },
    {
      certificateNumber: "GK-BPR-2026-GMP-000124",
      verificationCode: "verify_demo_revoked_W2K9qa",
      status: "REVOKED",
      userName: "Олег Іваненко",
      eventTitle: "GMP/GDP аудит для відповідальних осіб",
      eventDate: "2026-08-02",
      points: 15,
      issuedAt: "2026-08-03",
      providerName: "Holos Kyivshchyny",
      officialBprEventRegistrationNumber: "BPR-2026-GMP-002",
    },
  ],
  notifications: [
    {
      type: "registration_confirmation",
      channel: "EMAIL",
      status: "SCHEDULED",
    },
    {
      type: "event_reminder_day_before",
      channel: "VIBER",
      status: "SCHEDULED",
    },
  ],
  auditLogs: [
    { action: "EVENT_CREATE", actor: "admin@holos.example", entity: "Event" },
    {
      action: "CERTIFICATE_GENERATE",
      actor: "admin@holos.example",
      entity: "Certificate",
    },
  ],
} as const;
