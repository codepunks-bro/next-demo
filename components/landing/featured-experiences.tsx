import { use } from "react";
import type { FeaturedExperience } from "@/lib/data/landing";

export function FeaturedExperiences({ data }: { data: Promise<FeaturedExperience[]> }) {
  const experiences = use(data);

  return (
    <section className="grid gap-6">
      <header className="flex flex-col gap-2">
        <span className="text-xs font-semibold tracking-widest text-purple-600 uppercase dark:text-purple-300">
          Следующий шаг
        </span>
        <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
          Подборка маршрутов под ваш профиль
        </h3>
        <p className="max-w-2xl text-sm text-zinc-600 dark:text-zinc-300">
          Каждая карточка — серверный компонент без клиентского JavaScript. Данные
          загружаются потоково, поэтому рекомендации появляются ещё до догрузки
          второстепенных блоков.
        </p>
      </header>

      <div className="grid gap-4 lg:grid-cols-2">
        {experiences.map((experience) => (
          <article
            key={experience.id}
            className="flex h-full flex-col gap-4 rounded-3xl border border-zinc-200/60 bg-white/85 p-6 shadow-md shadow-zinc-200/40 transition hover:-translate-y-1 hover:shadow-xl dark:border-zinc-700/60 dark:bg-zinc-950/70"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex flex-col">
                <span className="text-xs tracking-wide text-zinc-500 uppercase">
                  {experience.region}
                </span>
                <h4 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  {experience.title}
                </h4>
              </div>
              <span className="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700 dark:bg-purple-500/20 dark:text-purple-200">
                {experience.duration}
              </span>
            </div>

            <p className="text-sm text-zinc-600 dark:text-zinc-300">
              {experience.description}
            </p>

            <div className="flex items-center gap-2 text-sm font-medium text-zinc-700 dark:text-zinc-200">
              <span className="inline-flex h-2 w-2 rounded-full bg-sky-500" />
              {experience.accent}
            </div>

            <div className="mt-auto flex items-center justify-between pt-2 text-sm font-medium">
              <button className="rounded-full border border-zinc-200 px-4 py-2 text-sm font-semibold text-zinc-700 transition hover:bg-sky-50 hover:text-sky-700 dark:border-zinc-600 dark:text-zinc-300 dark:hover:bg-sky-500/20 dark:hover:text-sky-200">
                Смотреть детали
              </button>
              <span className="text-xs tracking-widest text-zinc-400 uppercase">
                Server Component
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
