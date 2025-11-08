## Исполнение плана Next Travel Lab

Структура соответствует разделам из `PLAN.md`. Каждая задача помечается флажком выполнения и, при необходимости, кратким комментарием о статусе.

### 1. Аналитика и подготовка

- [ ] Подтвердить финальный список фич из changelog’ов Next.js 16 и React 19
- [ ] Собрать референсы UX и подготовить дизайн-концепцию (Figma)
- [ ] Подготовить макет данных и API-заглушки

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
- [ ] Подготовить CI pipeline (GitHub Actions) с edge-прогоном

### 3. Каркас приложения

- [x] Сконфигурировать общий layout и metadata API (`app/layout.tsx`)
  - Комментарий: добавлен `SiteHeader`, контейнер `main`, обновлены метаданные и локализация.
- [x] Реализовать базовые глобальные стили и тему (`app/globals.css`)
- [x] Настроить state management (React Context + Server Actions)
  - Комментарий: добавлен `TravelProfileProvider`, серверные actions и контекст для персонализации витрины.

### 4. Функциональные модули

- [x] Landing: обновить структуру страницы и описание ключевых фич (`app/page.tsx`)
- [x] Experiences: создать заглушку страницы с дорожной картой (`app/experiences/page.tsx`)
- [x] AI Concierge: создать заглушку страницы с дорожной картой (`app/ai-concierge/page.tsx`)
- [x] Admin Suite: создать заглушку страницы с дорожной картой (`app/admin/page.tsx`)
- [x] Tech Playground: создать заглушку страницы с дорожной картой (`app/tech-playground/page.tsx`)
- [~] Landing: реализовать PPR, параллельные маршруты, A/B через middleware
  - Комментарий: добавлены PPR (`experimental_ppr`), Suspense + streaming с `use()` и персонализацией; A/B и параллельные маршруты ещё в работе.
- [~] Experiences: добавить каталог с фильтрами, streaming и Suspense + `use()`
  - Комментарий: реализованы серверные фильтры/каталог с `Suspense` и `use()`, данные подбираются по персоне; параллельные маршруты и URL-состояние впереди.
- [ ] AI Concierge: реализовать чат на server actions и edge runtime
- [ ] Admin Suite: внедрить CRUD через actions и optimistic UI
- [ ] Tech Playground: добавить интерактивные демо React 19/Next 16 API

### 5. Data & интеграции

- [ ] Подключить внешние API (mock → live) и настроить caching/revalidateTag
- [ ] Реализовать webhooks и background tasks

### 6. Оптимизации и демонстрационный контент

- [ ] Настроить Next Analytics, Lighthouse CI, RUM-метрики
- [ ] Подготовить скрипты/слайды для лайв-демо и сценарии
- [ ] Записать видео/скринкасты, обновить README и FAQ

### 7. Тестирование и релиз

- [ ] Покрыть критические фичи компонентными/интеграционными тестами
- [ ] Провести edge/production smoke и проверить трейсинг
- [ ] Финальный walkthrough и публикация демо на Vercel/Edge-платформе
