import { Suspense } from "react";
import {
  CatalogSkeleton,
  FiltersSkeleton,
} from "@/components/experiences/loading-skeleton";
import { readTravelProfile } from "@/lib/server/travel-profile";
import { getTravelPersonaMeta } from "@/lib/state/travel-profile";

export default async function ExperiencesLayout({
  children,
  filters,
  catalog,
}: {
  children: React.ReactNode;
  filters: React.ReactNode;
  catalog: React.ReactNode;
}) {
  const profile = await readTravelProfile();
  const persona = getTravelPersonaMeta(profile.persona);

  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <p className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-1 text-xs font-semibold tracking-widest text-sky-700 uppercase dark:border-sky-400/30 dark:bg-zinc-900/80 dark:text-sky-200">
          Каталог для профиля — {persona.label}
        </p>
        <div className="space-y-3">
          <h1 className="text-3xl font-semibold text-zinc-900 dark:text-zinc-100">
            Experiences
          </h1>
          <p className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-300">
            Каталог формируется на сервере под выбранную персону. Используем Suspense,
            `use()` и потоковую доставку данных, чтобы карточки появлялись по мере
            готовности. Фильтры и результаты вынесены в параллельные маршруты App Router.
          </p>
        </div>
      </section>

      <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
        <Suspense fallback={<FiltersSkeleton />}>{filters}</Suspense>
        <Suspense fallback={<CatalogSkeleton />}>{catalog}</Suspense>
      </div>

      {children}
    </div>
  );
}
