# Next.js 16 / React 19 — чек-лист релизных новинок

## Подтверждённые фичи

- **Next.js 16**
  - Partial Prerendering (PPR) и Fragment-level streaming.
  - React Server Actions в статусе GA, поддержка `GET`/`POST` cookies().
  - `typedRoutes`, Turbopack в прод-режиме, расширенный `next/font`.
  - Новые async hooks для `headers()` и `cookies()` (требуют `await`/`use()`).
- **React 19**
  - Стабильные Server Components, `use()` на сервере и клиенте.
  - Actions API (`useActionState`, `useFormStatus`) и новые Transitions.
  - Улучшенная поддержка Web Components и asset loading.

## UX & дизайн-референсы

- UI паттерны для travel/voyage приложений (Airbnb, Booking, Fjord Trends).
- A/B варианты лендинга: светлый «Aurora» и контрастный «Sonic».
- Сценарии персонализации для 4 персонажей (исследователь, wellness, семья, luxury).

## Макеты данных и API-заглушки

- Каталоги Experiences и AI Concierge используют заглушки из `lib/data/*`.
- Админка оперирует in-memory store (`lib/server/admin-drafts.ts`) с revalidateTag.
- Webhook `POST /api/admin/revalidate` обеспечивает связку с внешними системами.

Документ обновлён: 2025-11-08
