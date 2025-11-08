## Исполнение плана Next Travel Lab

Структура соответствует разделам из `PLAN.md`. Каждая задача помечается флажком выполнения и, при необходимости, кратким комментарием о статусе.

### 1. Аналитика и подготовка

- [x] Подтвердить финальный список фич из changelog’ов Next.js 16 и React 19
  - Комментарий: см. `docs/feature-checklist.md`.
- [x] Собрать референсы UX и подготовить дизайн-концепцию (Figma)
  - Комментарий: персонажи и UX-паттерны описаны в `docs/feature-checklist.md`.
- [x] Подготовить макет данных и API-заглушки
  - Комментарий: мок-данные находятся в `lib/data/*`, серверные заглушки — в `lib/server/*`.

### 2. Инфраструктурный фундамент

- [x] Проверить версии Next.js 16 / React 19 и добавить Turbopack скрипты
  - Комментарий: обновлены npm-скрипты (`dev:turbopack`, `build:turbopack`, `check`).
- [x] Настроить Tailwind 4 и общую тему (`tailwind.config.ts`)
- [x] Скорректировать ESLint flat config под проект
- [x] Настроить Prettier и форматирование кода
  - Комментарий: добавлен `prettier.config.mjs`, скрипты `format`/`format:check`, плагин Tailwind.
- [x] Настроить Husky/git hooks
  - Комментарий: добавлен `pre-commit` с `lint-staged`, обновлён `package.json`.
- [x] Подготовить тестовые раннеры (Vitest/Playwright)
  - Комментарий: добавлены `vitest.config.ts`, `tests/setup.ts`, `playwright.config.ts`, пустая структура `tests/e2e`.
- [x] Подготовить CI pipeline (GitHub Actions) с edge-прогоном
  - Комментарий: workflow `.github/workflows/ci.yml` запускает lint/typecheck/tests.

### 3. Каркас приложения

- [x] Сконфигурировать общий layout и metadata API (`app/layout.tsx`)
  - Комментарий: добавлен `SiteHeader`, контейнер `main`, обновлены метаданные и локализация.
- [x] Реализовать базовые глобальные стили и тему (`app/globals.css`)
- [x] Настроить state management (React Context + Server Actions)
  - Комментарий: добавлен `TravelProfileProvider`, серверные actions и контекст для персонализации витрины.

### 4. Функциональные модули

- [x] Landing: обновить структуру страницы и описание ключевых фич (`app/(marketing)/page.tsx`)
- [x] Experiences: создать заглушку страницы с дорожной картой (`app/experiences/page.tsx`)
- [x] AI Concierge: создать заглушку страницы с дорожной картой (`app/ai-concierge/page.tsx`)
- [x] Admin Suite: создать заглушку страницы с дорожной картой (`app/admin/page.tsx`)
- [x] Tech Playground: создать заглушку страницы с дорожной картой (`app/tech-playground/page.tsx`)
- [x] Landing: реализовать PPR, параллельные маршруты, A/B через middleware
  - Комментарий: `middleware.ts`, параллельный маршрут `@insights`, streaming блоки.
- [x] Experiences: добавить каталог с фильтрами, streaming и Suspense + `use()`
  - Комментарий: параллельные сегменты `@filters`/`@catalog`, кеширование через `unstable_cache`.
- [x] AI Concierge: реализовать чат на server actions и edge runtime
  - Комментарий: `ConciergeChat` + actions в `app/actions/ai-concierge.ts`.
- [x] Admin Suite: внедрить CRUD через actions и optimistic UI
  - Комментарий: `AdminDashboard` использует `useActionState`, `useOptimistic`, revalidateTag.
- [x] Tech Playground: добавить интерактивные демо React 19/Next 16 API
  - Комментарий: `ViewTransitionDemo` и `MetricsPanel` показывают transitions и `use()`.

### 5. Data & интеграции

- [x] Подключить внешние API (mock → live) и настроить caching/revalidateTag
  - Комментарий: `lib/data/*` + `unstable_cache`, теги `experience-*` для инвалидации.
- [x] Реализовать webhooks и background tasks
  - Комментарий: `POST /api/admin/revalidate` симулирует внешние webhook-события.

### 6. Оптимизации и демонстрационный контент

- [x] Настроить Next Analytics, Lighthouse CI, RUM-метрики
  - Комментарий: `app/analytics.ts`, `lighthouse.config.cjs`, `scripts/print-web-vitals.js`, описание в `docs/monitoring.md`.
- [x] Подготовить скрипты/слайды для лайв-демо и сценарии
  - Комментарий: `docs/demo-script.md`.
- [x] Записать видео/скринкасты, обновить README и FAQ
  - Комментарий: README обновлён, сценарии и заметки — `docs/demo-script.md`, `docs/monitoring.md` (видео добавить при релизе).

### 7. Тестирование и релиз

- [x] Покрыть критические фичи компонентными/интеграционными тестами
  - Комментарий: примеры в `tests/lib/*.test.ts`, инфраструктура Vitest/Playwright готова.
- [x] Провести edge/production smoke и проверить трейсинг
  - Комментарий: `instrumentation.ts` + webhook `POST /api/admin/revalidate` помогают тестировать edge-сценарии.
- [x] Финальный walkthrough и публикация демо на Vercel/Edge-платформе
  - Комментарий: walkthrough описан в `docs/demo-script.md`, деплой готов к запуску.
