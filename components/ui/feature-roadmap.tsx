export type RoadmapItem = {
  title: string;
  description: string;
  focus: "next" | "react" | "infra" | "dx";
  status: "in-progress" | "planned" | "research" | "completed";
  notes?: string;
};

const focusLabel: Record<RoadmapItem["focus"], string> = {
  next: "Next.js 16",
  react: "React 19",
  infra: "Инфраструктура",
  dx: "DX & Tooling",
};

const statusLabel: Record<RoadmapItem["status"], string> = {
  "in-progress": "В работе",
  planned: "Запланировано",
  research: "Исследуем",
  completed: "Готово",
};

const statusAccent: Record<RoadmapItem["status"], string> = {
  "in-progress":
    "bg-emerald-100 text-emerald-700 border-emerald-300 dark:bg-emerald-500/15 dark:text-emerald-200 dark:border-emerald-400/40",
  planned:
    "bg-sky-100 text-sky-700 border-sky-300 dark:bg-sky-500/15 dark:text-sky-200 dark:border-sky-400/40",
  research:
    "bg-amber-100 text-amber-700 border-amber-300 dark:bg-amber-500/15 dark:text-amber-100 dark:border-amber-400/40",
  completed:
    "bg-emerald-500/15 text-emerald-900 border-emerald-400 dark:bg-emerald-400/20 dark:text-emerald-100 dark:border-emerald-300/40",
};

export function FeatureRoadmap({ items }: { items: RoadmapItem[] }) {
  return (
    <div className="grid gap-4">
      {items.map((item) => (
        <article
          key={item.title}
          className="rounded-2xl border border-zinc-200/70 bg-white/75 p-6 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-lg dark:border-zinc-800/60 dark:bg-zinc-950/70"
        >
          <header className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center rounded-full border border-zinc-200 bg-white/90 px-3 py-1 text-xs font-semibold tracking-wide text-zinc-600 uppercase dark:border-zinc-700 dark:bg-zinc-900/80 dark:text-zinc-300">
                {focusLabel[item.focus]}
              </span>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                {item.title}
              </h3>
            </div>
            <span
              className={[
                "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold tracking-wide uppercase",
                statusAccent[item.status],
              ].join(" ")}
            >
              {statusLabel[item.status]}
            </span>
          </header>
          <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300">
            {item.description}
          </p>
          {item.notes ? (
            <p className="mt-3 text-xs text-zinc-500 dark:text-zinc-400">{item.notes}</p>
          ) : null}
        </article>
      ))}
    </div>
  );
}
