"use client";

import { useEffect, useState, useTransition } from "react";

const modes = [
  {
    id: "aurora",
    label: "Aurora Stream",
    gradient:
      "from-sky-500/80 via-emerald-400/80 to-sky-600/80 text-white shadow-sky-500/40",
    description:
      "Плавные градиенты и мягкая подсветка секций, идеально для демонстрации PPR.",
  },
  {
    id: "sonic",
    label: "Sonic Burst",
    gradient:
      "from-purple-700/90 via-indigo-600/90 to-slate-900/90 text-white shadow-purple-500/40",
    description:
      "Контрастная тема для A/B-теста лендинга с упором на CTA и hover-эффекты.",
  },
  {
    id: "mono",
    label: "Monochrome DX",
    gradient:
      "from-zinc-900/90 via-zinc-800/90 to-zinc-900/90 text-zinc-50 shadow-zinc-800/40",
    description:
      "Минимализм для фокусировки на DevTools и трассировке производительности.",
  },
] as const;

type ModeId = (typeof modes)[number]["id"];

function runViewTransition(callback: () => void) {
  if (typeof document !== "undefined" && "startViewTransition" in document) {
    // @ts-expect-error experimental API
    document.startViewTransition(callback);
  } else {
    callback();
  }
}

export function ViewTransitionDemo() {
  const [mode, setMode] = useState<ModeId>("aurora");
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    document.documentElement.dataset.playgroundTheme = mode;
  }, [mode]);

  return (
    <div className="grid gap-4 rounded-3xl border border-zinc-200/60 bg-white/90 p-6 shadow-lg shadow-sky-100/40 dark:border-zinc-700/60 dark:bg-zinc-950/80">
      <header className="flex flex-wrap items-center justify-between gap-3">
        <div className="space-y-1">
          <span className="text-xs font-semibold tracking-widest text-amber-600 uppercase dark:text-amber-300">
            View Transitions API
          </span>
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            Переключение вариантов без layout shift
          </h3>
        </div>
        <span className="text-xs tracking-widest text-zinc-400 uppercase">
          {isPending ? "Animating..." : "Ready"}
        </span>
      </header>

      <div className="flex flex-wrap gap-2">
        {modes.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => {
              if (item.id === mode) return;
              startTransition(() => {
                runViewTransition(() => setMode(item.id));
              });
            }}
            className={[
              "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold tracking-widest uppercase transition",
              item.id === mode
                ? "border-amber-400 bg-amber-100 text-amber-800 dark:border-amber-300/60 dark:bg-amber-500/20 dark:text-amber-100"
                : "border-zinc-200 bg-white text-zinc-600 hover:border-amber-300 hover:text-amber-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-amber-300/60 dark:hover:text-amber-200",
            ].join(" ")}
          >
            {item.label}
          </button>
        ))}
      </div>

      <article
        className={[
          "min-h-[180px] rounded-3xl border border-white/20 p-6 shadow-xl transition duration-500",
          modes.find((item) => item.id === mode)?.gradient ??
            "from-sky-500/80 via-emerald-400/80 to-sky-600/80 text-white shadow-sky-500/40",
          "bg-gradient-to-br",
        ].join(" ")}
      >
        <p className="text-xs tracking-widest uppercase opacity-80">
          Активный вариант: {mode}
        </p>
        <h4 className="mt-3 text-2xl font-semibold">
          {modes.find((item) => item.id === mode)?.label}
        </h4>
        <p className="mt-2 max-w-xl text-sm font-medium opacity-90">
          {modes.find((item) => item.id === mode)?.description}
        </p>
        <p className="mt-6 text-xs opacity-70">
          Анимация запускается через `document.startViewTransition()` с fallback на
          React.startTransition.
        </p>
      </article>
    </div>
  );
}
