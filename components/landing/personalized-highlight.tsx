import { use } from "react";
import type { PersonaHighlight } from "@/lib/data/landing";

export function PersonalizedHighlight({ data }: { data: Promise<PersonaHighlight> }) {
  const highlight = use(data);

  return (
    <article className="relative overflow-hidden rounded-4xl border border-zinc-200/60 bg-gradient-to-br from-sky-100 via-white to-purple-100 p-10 shadow-2xl shadow-sky-200/50 backdrop-blur dark:border-zinc-700/60 dark:from-sky-500/10 dark:via-zinc-950/80 dark:to-purple-600/10">
      <div className="grid gap-4">
        <span className="inline-flex max-w-max items-center gap-2 rounded-full border border-sky-200 bg-white/90 px-4 py-1.5 text-xs font-semibold tracking-widest text-sky-700 uppercase dark:border-sky-400/40 dark:bg-zinc-900/80 dark:text-sky-200">
          Персонализированные рекомендации
        </span>
        <h2 className="max-w-2xl text-3xl leading-tight font-semibold text-zinc-900 dark:text-zinc-100">
          {highlight.headline}
        </h2>
        <p className="max-w-2xl text-base text-zinc-600 dark:text-zinc-300">
          {highlight.supporting}
        </p>
        <div>
          <button className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-300/40 transition hover:-translate-y-0.5 hover:bg-sky-500 focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:outline-none">
            {highlight.cta}
            <span aria-hidden>→</span>
          </button>
        </div>
      </div>
      <div className="pointer-events-none absolute -top-6 -right-6 h-32 w-32 rounded-full bg-sky-300/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-6 left-1/3 h-32 w-32 rounded-full bg-purple-300/30 blur-3xl" />
    </article>
  );
}
