import { use } from "react";
import type { ExperienceCard } from "@/lib/data/experiences";

export function ExperienceGrid({ catalog }: { catalog: Promise<ExperienceCard[]> }) {
  const experiences = use(catalog);

  return (
    <section className="grid gap-6 rounded-3xl border border-zinc-200/70 bg-white/90 p-6 shadow-lg shadow-zinc-200/40 dark:border-zinc-700/60 dark:bg-zinc-950/80">
      <header className="flex flex-col gap-2">
        <span className="text-xs font-semibold tracking-widest text-purple-600 uppercase dark:text-purple-300">
          Результаты
        </span>
        <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
          Подборка направлений
        </h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-300">
          Каталог — серверный компонент. На клиент отправляются только интерактивные
          элементы интерфейса.
        </p>
      </header>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {experiences.map((experience) => (
          <article
            key={experience.id}
            className="flex h-full flex-col gap-4 rounded-3xl border border-zinc-200/60 bg-white/95 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-2xl dark:border-zinc-700/60 dark:bg-zinc-950/90"
          >
            <div className="flex items-center justify-between gap-3">
              <div>
                <h4 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  {experience.title}
                </h4>
                <p className="text-xs tracking-wide text-zinc-500 uppercase">
                  {experience.location}
                </p>
              </div>
              <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                от {experience.priceFrom.toLocaleString("ru-RU")} $
              </span>
            </div>

            <p className="text-sm text-zinc-600 dark:text-zinc-300">
              {experience.summary}
            </p>

            <div className="flex flex-wrap gap-2">
              {experience.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full bg-sky-100 px-3 py-1 text-xs font-medium text-sky-700 dark:bg-sky-500/20 dark:text-sky-200"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-auto flex items-center justify-between text-sm text-zinc-600 dark:text-zinc-400">
              <div className="flex items-center gap-2 font-medium text-zinc-700 dark:text-zinc-300">
                ⭐ {experience.rating}
                <span className="text-xs text-zinc-400">
                  {experience.reviews} отзывов
                </span>
              </div>
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
