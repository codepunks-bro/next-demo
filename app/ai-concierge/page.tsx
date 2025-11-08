import type { Metadata } from "next";
import {
  FeatureRoadmap,
  type RoadmapItem,
} from "@/components/ui/feature-roadmap";

export const metadata: Metadata = {
  title: "AI Concierge · Server Actions & Edge runtime",
  description:
    "Чат-помощник для планирования путешествий на основе React Server Actions, edge runtime и потоковых ответов.",
};

const roadmap: RoadmapItem[] = [
  {
    title: "AI-чат с потоковыми ответами",
    description:
      "Запросы оформляются как server actions, которые стримят markdown-ответы из AI-провайдера с помощью use().",
    focus: "react",
    status: "planned",
  },
  {
    title: "Edge runtime и геоконтекст",
    description:
      "Размещение handler’ов на edge для минимального latency и персонализации рекомендаций по локации пользователя.",
    focus: "next",
    status: "planned",
  },
  {
    title: "Action Hooks: useActionState и useFormStatus",
    description:
      "Формы команд и быстрая генерация подборок с оптимистичным UI без локального состояния.",
    focus: "react",
    status: "in-progress",
  },
  {
    title: "Инструментирование и трассировка",
    description:
      "Настраиваем instrumentation.ts для записи trace в OpenTelemetry и анализа времени отклика edge-функций.",
    focus: "infra",
    status: "research",
  },
];

export default function AiConciergePage() {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-widest text-purple-600 dark:text-purple-300">
          Раздел в подготовке
        </p>
        <h1 className="text-3xl font-semibold">AI Concierge</h1>
        <p className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-300">
          Будущий AI-помощник поможет планировать путешествия и подбирать
          персональные маршруты. Раздел покажет полноценный стек server actions:
          валидацию, стриминг, optimistic UI и трассировку на edge runtime.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Дорожная карта фич</h2>
        <FeatureRoadmap items={roadmap} />
      </section>
    </div>
  );
}

