# Live Demo Script — Next Travel Lab

## 1. Вступление (2 мин)

- Коротко о цели: показать PPR, Server Actions, React 19 hooks.
- Объяснить A/B вариант лендинга и cookie-based персонализацию.

## 2. Landing (5 мин)

- Переключить персонажа → наблюдать мгновенное обновление стриминговых блоков.
- Показать live insights (параллельный маршрут `@insights`) и A/B вариант через middleware.
- Объяснить PPR (`experimental_ppr = true`) и использование `Suspense` + `use()`.

## 3. Experiences (4 мин)

- Подчеркнуть параллельные маршруты (`@filters`, `@catalog`) и тегированное кеширование.
- Показать, что данные меняются при смене персонажа без refetch клиента.

## 4. AI Concierge (4 мин)

- Ввести запрос в чат, отметить работу `useActionState`, optimistic UI и server action.
- Пояснить структуру ответа и будущее расширение на streaming.

## 5. Admin Suite (4 мин)

- Создать черновик, опубликовать, удалить — наблюдать оптимистичные обновления.
- Упомянуть revalidateTag/revalidatePath, связку с Experiences и webhook.

## 6. Tech Playground (3 мин)

- Переключить темы во View Transition Demo, объяснить fallback на React transitions.
- Показать `MetricsPanel` и использование `use()` для live метрик.

## 7. Завершение (2 мин)

- Ссылка на GitHub Actions CI, Lighthouse / RUM скрипты, instrumentation.
- Ответы на вопросы.
