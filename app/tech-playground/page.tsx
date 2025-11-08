import type { Metadata } from "next";
import { ViewTransitionDemo } from "@/components/playground/view-transition-demo";
import { MetricsPanel } from "@/components/playground/metrics-panel";
import { FeatureRoadmap, type RoadmapItem } from "@/components/ui/feature-roadmap";

export const metadata: Metadata = {
  title: "Tech Playground · Эксперименты с новыми API",
  description:
    "Интерактивные демо React 19 и Next.js 16: transitions, React Compiler, asset loading и devtools.",
};

const roadmap: RoadmapItem[] = [
  {
    title: "View Transitions и анимации без хаков",
    description:
      "Демо `document.startViewTransition` + React.startTransition для плавных переключений.",
    focus: "react",
    status: "completed",
  },
  {
    title: "React Compiler Preview",
    description:
      "Включаем React Compiler для выбранных компонентов, сравниваем производительность до и после.",
    focus: "react",
    status: "research",
    notes: "Зависит от доступности компилятора в релизной сборке.",
  },
  {
    title: "Turbopack в прод-режиме",
    description:
      "Демонстрация ускоренной пересборки и прогрева кеша в dev и prod конфигурациях.",
    focus: "dx",
    status: "completed",
  },
  {
    title: "Интеграция Lighthouse CI и RUM",
    description:
      "Отдельный стенд для мониторинга метрик LCP, INP и пользовательских событий.",
    focus: "infra",
    status: "planned",
  },
];

export default function TechPlaygroundPage() {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <p className="text-xs font-semibold tracking-widest text-amber-600 uppercase dark:text-amber-300">
          React 19 · Next.js 16 Labs
        </p>
        <h1 className="text-3xl font-semibold text-zinc-900 dark:text-zinc-100">
          Tech Playground
        </h1>
        <p className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-300">
          Интерактивная песочница для демонстрации новых API: View Transitions, `use()` на
          сервере, Turbopack метрики и подготовка к React Compiler.
        </p>
      </section>

      <div className="grid gap-6 lg:grid-cols-2">
        <ViewTransitionDemo />
        <MetricsPanel />
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Дорожная карта фич</h2>
        <FeatureRoadmap items={roadmap} />
      </section>
    </div>
  );
}
