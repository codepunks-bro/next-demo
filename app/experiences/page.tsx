import type { Metadata } from "next";
import { FeatureRoadmap, type RoadmapItem } from "@/components/ui/feature-roadmap";

export const metadata: Metadata = {
  title: "Experiences · Каталог на Server Components",
  description:
    "Стриминговый каталог направлений с использованием React Server Components, Suspense, use() и персонализацией.",
};

const roadmap: RoadmapItem[] = [
  {
    title: "Parallel Routes для фильтров и карточек",
    description:
      "Разделение фильтр-панели и каталога в параллельные сегменты App Router для сохранения состояния без перезагрузок.",
    focus: "next",
    status: "completed",
  },
  {
    title: "Тегированная инвалидация отзывов",
    description:
      "Использование revalidateTag для синхронизации каталога с админкой и отзывами пользователей.",
    focus: "next",
    status: "in-progress",
  },
  {
    title: "Гибридный map-view с Web Component",
    description:
      "Интеграция поставщика карт как web component с новым asset loading React 19.",
    focus: "react",
    status: "research",
  },
];

export default function ExperiencesPage() {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Дорожная карта фич</h2>
        <FeatureRoadmap items={roadmap} />
      </section>
    </div>
  );
}
