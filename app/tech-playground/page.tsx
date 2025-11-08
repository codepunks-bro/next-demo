import type { Metadata } from "next";
import {
  FeatureRoadmap,
  type RoadmapItem,
} from "@/components/ui/feature-roadmap";

export const metadata: Metadata = {
  title: "Tech Playground · Эксперименты с новыми API",
  description:
    "Интерактивные демо React 19 и Next.js 16: transitions, React Compiler, asset loading и devtools.",
};

const roadmap: RoadmapItem[] = [
  {
    title: "View Transitions и анимации без хаков",
    description:
      "Покажем startViewTransition и обновлённые transitions React 19 для плавных переключений режимов.",
    focus: "react",
    status: "planned",
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
    status: "in-progress",
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
        <p className="text-sm font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-300">
          Раздел в подготовке
        </p>
        <h1 className="text-3xl font-semibold">Tech Playground</h1>
        <p className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-300">
          Песочница для экспериментов с новыми API Next.js 16 и React 19. Здесь
          появятся живые демо transitions, React Compiler, обновлённого asset
          loading и инструментов наблюдаемости.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Дорожная карта фич</h2>
        <FeatureRoadmap items={roadmap} />
      </section>
    </div>
  );
}

