import { use } from "react";
import type { ExperienceFilter } from "@/lib/data/experiences";

export function FilterPanel({ filters }: { filters: Promise<ExperienceFilter[]> }) {
  const data = use(filters);

  return (
    <aside className="grid gap-4 rounded-3xl border border-zinc-200/70 bg-white/85 p-6 shadow-md shadow-zinc-200/40 dark:border-zinc-700/60 dark:bg-zinc-950/70">
      <div className="grid gap-1">
        <span className="text-xs font-semibold tracking-widest text-sky-600 uppercase dark:text-sky-300">
          Фильтры
        </span>
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
          Настройка каталога
        </h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-300">
          Фильтры будут подключены к параллельным маршрутам и URL параметрам, чтобы
          сохранить состояние каталога.
        </p>
      </div>

      <div className="grid gap-6">
        {data.map((filter) => (
          <section key={filter.id} className="grid gap-3">
            <h4 className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
              {filter.label}
            </h4>
            <div className="flex flex-wrap gap-2">
              {filter.options.map((option) => (
                <span
                  key={option.id}
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/90 px-3 py-1.5 text-xs font-medium text-zinc-700 shadow-sm dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
                >
                  {option.label}
                  <span className="rounded-full bg-zinc-200 px-2 py-0.5 text-[10px] font-semibold text-zinc-600 dark:bg-zinc-700 dark:text-zinc-200">
                    {option.count}
                  </span>
                </span>
              ))}
            </div>
          </section>
        ))}
      </div>
    </aside>
  );
}
