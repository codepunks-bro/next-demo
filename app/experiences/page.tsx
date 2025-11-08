import type { Metadata } from "next";
import {
  FeatureRoadmap,
  type RoadmapItem,
} from "@/components/ui/feature-roadmap";

export const metadata: Metadata = {
  title: "Experiences · Каталог на Server Components",
  description:
    "Стриминговый каталог направлений с использованием React Server Components, use() и частичного предварительного рендеринга.",
};

const roadmap: RoadmapItem[] = [
  {
    title: "Stream + Suspense каталога направлений",
    description:
      "Категории и рекомендации рендерятся на сервере, карточки направлений догружаются потоково с fallback-скелетоном.",
    focus: "react",
    status: "planned",
  },
  {
    title: "Фильтры и поисковые слайсы через параллельные маршруты",
    description:
      "Используем параллельные и перехватывающие сегменты App Router для фильтров по сезонам, географии и бюджету.",
    focus: "next",
    status: "planned",
  },
  {
    title: "Отзывы и рейтинги с тегированной инвалидацией",
    description:
      "Обновление данных отзывов через revalidateTag, чтобы админка мгновенно обновляла свежесть каталога.",
    focus: "next",
    status: "in-progress",
    notes: "Зависит от реализации серверных actions и источника данных.",
  },
  {
    title: "Интерактивная карта как Web Component",
    description:
      "Встраиваем карту поставщика как web component с новым asset loading React 19 без дополнительного бандла.",
    focus: "react",
    status: "research",
  },
];

export default function ExperiencesPage() {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-widest text-sky-600 dark:text-sky-300">
          Раздел в подготовке
        </p>
        <h1 className="text-3xl font-semibold">Experiences</h1>
        <p className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-300">
          Здесь появится каталог направлений, построенный на стабильных Server
          Components React 19. Мы покажем комбинирование streaming, use(),
          параллельных маршрутов и гибкого кеширования Next.js 16.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Дорожная карта фич</h2>
        <FeatureRoadmap items={roadmap} />
      </section>
    </div>
  );
}

