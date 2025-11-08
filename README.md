## Next Travel Lab — Next.js 16 & React 19 Showcase

Демо-проект, который демонстрирует ключевые новинки Next.js 16 и React 19: PPR, Server Actions, параллельные маршруты, React `use()` и обновлённые transitions.

### Стэк

- Next.js 16.0.1 (App Router, PPR, параллельные маршруты)
- React 19.2 (`useActionState`, `use()`, transitions)
- Tailwind CSS 4, TypeScript 5, Turbopack
- Vitest + Testing Library, Playwright (готовый сетап)

### Быстрый старт

```bash
npm install
npm run dev
```

Основные команды:

| Скрипт                               | Назначение                                              |
| ------------------------------------ | ------------------------------------------------------- |
| `npm run dev:turbopack`              | Dev-сервер на Turbopack                                 |
| `npm run build:turbopack`            | Прод-сборка Turbopack                                   |
| `npm run lint` / `npm run typecheck` | Статический анализ                                      |
| `npm run test:unit`                  | Vitest тесты                                            |
| `npm run test:e2e`                   | Playwright (запускает dev-сервер автоматически)         |
| `npm run analyze:lighthouse`         | Генерация отчёта Lighthouse (`.lighthouse/report.json`) |
| `npm run analyze:rum`                | Чтение отчёта Lighthouse и вывод Web Vitals             |

### Карта демо

- `/` — Landing с PPR, streaming и A/B вариантами (middleware + параллельный маршрут `@insights`).
- `/experiences` — Каталог на Server Components с параллельными сегментами `@filters`/`@catalog`, `unstable_cache` и revalidateTag.
- `/ai-concierge` — Чат на Server Actions (`useActionState`, optimistic UI).
- `/admin` — Admin Suite с CRUD, `useOptimistic`, revalidatePath/revalidateTag.
- `/tech-playground` — интерактивные демо React 19 (View Transitions, `use()`).
- `POST /api/admin/revalidate` — webhook для программной инвалидации каталога.

### Документация

- `PLAN.md` — стратегический план фич.
- `EXECUTION.md` — чек-лист выполнения (обновляется по мере прогресса).
- `docs/feature-checklist.md` — сводка релизных фич и UX-персонажей.
- `docs/demo-script.md` — сценарий живой демонстрации.
- `docs/monitoring.md` — инструкции по метрикам, Lighthouse и RUM.

### CI

GitHub Actions workflow (`.github/workflows/ci.yml`) выполняет lint, typecheck и unit-тесты на любом push/PR в `main`.

### Deploy

Проект готов к деплою на Vercel. Перед публикацией выполните:

```bash
npm run lint
npm run typecheck
npm run test:unit
npm run build
```

Далее используйте `vercel deploy` или веб-интерфейс Vercel.
