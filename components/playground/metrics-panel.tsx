import { use } from "react";
import { getBuildMetrics, getTransitionSnippets } from "@/lib/data/playground";

export function MetricsPanel() {
  const metrics = use(getBuildMetrics());
  const snippets = use(getTransitionSnippets());

  return (
    <div className="grid gap-4 rounded-3xl border border-zinc-200/60 bg-white/90 p-6 shadow-lg shadow-emerald-100/40 dark:border-zinc-700/60 dark:bg-zinc-950/80">
      <header className="space-y-1">
        <span className="text-xs font-semibold tracking-widest text-emerald-600 uppercase dark:text-emerald-300">
          Turbopack & Server Actions
        </span>
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
          Производительность и UX-метрики
        </h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-300">
          Реальные значения берутся из `use()` — данные подгружаются потоково, а UI
          остаётся отзывчивым.
        </p>
      </header>

      <div className="grid gap-3 md:grid-cols-2">
        <div className="space-y-3 rounded-2xl border border-emerald-200/60 bg-emerald-50/70 p-4 dark:border-emerald-400/20 dark:bg-emerald-500/10">
          <h4 className="text-sm font-semibold text-emerald-900 dark:text-emerald-200">
            Build & Dev-cycle
          </h4>
          <ul className="space-y-2">
            {metrics.map((metric) => {
              const improvement = metric.before - metric.after;
              const sign = improvement > 0 ? "-" : "+";
              return (
                <li
                  key={metric.name}
                  className="rounded-xl bg-white/80 px-3 py-2 text-xs font-medium text-emerald-700 shadow-sm dark:bg-emerald-500/10 dark:text-emerald-100"
                >
                  <span className="block text-[11px] tracking-widest uppercase opacity-70">
                    {metric.name}
                  </span>
                  <span className="text-sm">
                    {metric.after}
                    {metric.unit}{" "}
                    <span className="text-emerald-500">
                      ({sign}
                      {Math.abs(improvement)}
                      {metric.unit})
                    </span>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="space-y-3 rounded-2xl border border-sky-200/60 bg-sky-50/70 p-4 dark:border-sky-400/20 dark:bg-sky-500/10">
          <h4 className="text-sm font-semibold text-sky-900 dark:text-sky-200">
            Хуки и переходы
          </h4>
          <ul className="space-y-2 text-xs text-sky-800 dark:text-sky-100">
            {snippets.map((item) => (
              <li
                key={item.id}
                className="rounded-xl bg-white/80 px-3 py-2 shadow-sm dark:bg-sky-500/10"
              >
                <span className="block text-[11px] tracking-widest uppercase opacity-70">
                  {item.title}
                </span>
                <p className="text-sm">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
