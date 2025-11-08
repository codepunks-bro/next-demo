import type { Metadata } from "next";
import { ConciergeChat } from "@/components/ai/concierge-chat";
import { type ConciergeChatState, getInitialChatState } from "@/app/actions/ai-concierge";
import { FeatureRoadmap, type RoadmapItem } from "@/components/ui/feature-roadmap";

export const metadata: Metadata = {
  title: "AI Concierge · Server Actions & Edge runtime",
  description:
    "Чат-помощник для планирования путешествий на основе React Server Actions, edge runtime и потоковых ответов.",
};

const roadmap: RoadmapItem[] = [
  {
    title: "AI-чат с потоковыми ответами",
    description:
      "Реализовать streaming-ответы через server actions и асинхронные генераторы.",
    focus: "react",
    status: "in-progress",
  },
  {
    title: "Edge runtime и геоконтекст",
    description:
      "Перевести обработку на edge runtime для снижения latency и персонализации по геоданным.",
    focus: "next",
    status: "planned",
  },
  {
    title: "Инструментирование и трассировка",
    description: "Подключить OpenTelemetry trace для server actions и внешних API.",
    focus: "infra",
    status: "research",
  },
];

export default async function AiConciergePage() {
  const initialState: ConciergeChatState = await getInitialChatState();

  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <p className="text-xs font-semibold tracking-widest text-purple-600 uppercase dark:text-purple-300">
          Server Actions · React 19
        </p>
        <h1 className="text-3xl font-semibold text-zinc-900 dark:text-zinc-100">
          AI Concierge
        </h1>
        <p className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-300">
          Этот чат демонстрирует использование React Server Actions и хука
          `useActionState` для построения отзывчивого сервиса без клиентского состояния.
          Ответы формируются на сервере с учётом выбранной персоны.
        </p>
      </section>

      <ConciergeChat initialState={initialState} />

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Дорожная карта фич</h2>
        <FeatureRoadmap items={roadmap} />
      </section>
    </div>
  );
}
