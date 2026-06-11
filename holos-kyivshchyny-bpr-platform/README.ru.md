# Holos Kyivshchyny BPR Platform

Production MVP образовательной BPR/CPD платформы для ТОВ «Незалежна інформаційна компанія “Голос Київщини”».

## Быстрый старт

```bash
pnpm install
cp .env.example .env
pnpm seed
pnpm dev
```

Откройте http://localhost:3000/uk.

## Что реализовано

Публичные страницы, каталог мероприятий, регистрация, кабинет пользователя, тестирование, PDF-сертификаты, QR-проверка, админ-раздел, Excel-экспорт, уведомления, аудит, защита маршрутов, валидация, тесты и документация.

## Проверка

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

Перед production настройте PostgreSQL, секреты, Better Auth adapter, email, OAuth, файловое хранилище, мониторинг и юридически проверенные документы провайдера.
