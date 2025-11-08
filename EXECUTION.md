## Исполнение плана Next Travel Lab

Структура соответствует разделам из `PLAN.md`. Каждая задача помечается флажком выполнения и, при необходимости, кратким комментарием о статусе.

### 1. Аналитика и подготовка
- [ ] Подтвердить финальный список фич из changelog’ов Next.js 16 и React 19  
- [ ] Собрать референсы UX и подготовить дизайн-концепцию (Figma)  
- [ ] Подготовить макет данных и API-заглушки  

### 2. Инфраструктурный фундамент
- [ ] Обновить зависимости до целевых версий и настроить Turbopack для dev/prod  
- [ ] Настроить ESLint/Prettier, Husky, тестовые раннеры (Vitest/Playwright)  
- [ ] Подготовить CI pipeline (GitHub Actions) с edge-прогоном  

### 3. Каркас приложения
- [x] Сконфигурировать общий layout и metadata API (`app/layout.tsx`)  
  - Комментарий: добавлен `SiteHeader`, контейнер `main`, обновлены метаданные и локализация.
- [x] Реализовать базовые глобальные стили и тему (`app/globals.css`)  
- [ ] Настроить state management (React Context + Server Actions)  

### 4. Функциональные модули
- [x] Landing: обновить структуру страницы и описание ключевых фич (`app/page.tsx`)  
- [x] Experiences: создать заглушку страницы с дорожной картой (`app/experiences/page.tsx`)  
- [x] AI Concierge: создать заглушку страницы с дорожной картой (`app/ai-concierge/page.tsx`)  
- [x] Admin Suite: создать заглушку страницы с дорожной картой (`app/admin/page.tsx`)  
- [x] Tech Playground: создать заглушку страницы с дорожной картой (`app/tech-playground/page.tsx`)  
- [ ] Landing: реализовать PPR, параллельные маршруты, A/B через middleware  
- [ ] Experiences: добавить каталог с фильтрами, streaming и Suspense + `use()`  
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

