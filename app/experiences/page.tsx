import { Suspense } from "react";
import type { Metadata } from "next";
import { FilterPanel } from "@/components/experiences/filter-panel";
import { ExperienceGrid } from "@/components/experiences/experience-grid";
import {
  CatalogSkeleton,
  FiltersSkeleton,
} from "@/components/experiences/loading-skeleton";
import { getExperienceCatalog, getExperienceFilters } from "@/lib/data/experiences";
import { readTravelProfile } from "@/lib/server/travel-profile";
import { getTravelPersonaMeta, type TravelPersona } from "@/lib/state/travel-profile";
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
    status: "in-progress",
  },
  {
    title: "Тегированная инвалидация отзывов",
    description:
      "Использование revalidateTag для синхронизации каталога с админкой и отзывами пользователей.",
    focus: "next",
    status: "planned",
  },
  {
    title: "Гибридный map-view с Web Component",
    description:
      "Интеграция поставщика карт как web component с новым asset loading React 19.",
    focus: "react",
    status: "research",
  },
];

function PersonaHero({ persona }: { persona: TravelPersona }) {
  const meta = getTravelPersonaMeta(persona);
  return (
    <section className="space-y-4">
      <p className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-1 text-xs font-semibold tracking-widest text-sky-700 uppercase dark:border-sky-400/30 dark:bg-zinc-900/80 dark:text-sky-200">
        Каталог для профиля — {meta.label}
      </p>
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold text-zinc-900 dark:text-zinc-100">
          Experiences
        </h1>
        <p className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-300">
          Каталог формируется на сервере под выбранную персону. Используем Suspense,
          `use()` и потоковую доставку данных, чтобы карточки появлялись по мере
          готовности.
        </p>
      </div>
    </section>
  );
}

export default async function ExperiencesPage() {
  const profile = await readTravelProfile();
  const filtersPromise = getExperienceFilters(profile.persona);
  const catalogPromise = getExperienceCatalog(profile.persona);

  return (
    <div className="space-y-10">
      <PersonaHero persona={profile.persona} />

      <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
        <Suspense fallback={<FiltersSkeleton />}>
          <FilterPanel filters={filtersPromise} />
        </Suspense>

        <Suspense fallback={<CatalogSkeleton />}>
          <ExperienceGrid catalog={catalogPromise} />
        </Suspense>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Дорожная карта фич</h2>
        <FeatureRoadmap items={roadmap} />
      </section>
    </div>
  );
}
