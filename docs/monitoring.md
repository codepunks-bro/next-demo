# Наблюдаемость и метрики

## Web Vitals / RUM

- `app/analytics.ts` экспортирует `reportWebVitals`, данные отправляются в консоль или внешние сервисы.
- Для реального RUM интеграции используйте `lib/observability/analytics.ts` и подключите Snowplow, Datadog или Vercel Analytics.

## Tracing & instrumentation

- `instrumentation.ts` включает OpenTelemetry при запуске Node runtime в dev-режиме.
- Конфиг находится в `lib/observability/tracing.ts`, экспорт — в консоль (можно заменить на Jaeger/OTLP).

## Lighthouse / Lighthouse CI

- Конфигурация: `lighthouse.config.cjs`.
- Скрипт запуска: `npm run analyze:lighthouse` (результат в `.lighthouse/report.json`).
- Для быстрого обзора метрик: `npm run analyze:rum` (читает отчёт Lighthouse и выводит ключевые значения).
