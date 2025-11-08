export function HighlightSkeleton() {
  return (
    <div className="h-full animate-pulse rounded-4xl border border-zinc-200/60 bg-gradient-to-br from-zinc-100 via-zinc-50 to-zinc-100 p-10 dark:border-zinc-700/60 dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900">
      <div className="grid gap-4">
        <div className="h-4 w-44 rounded-full bg-zinc-200/70 dark:bg-zinc-700" />
        <div className="h-10 w-3/4 rounded-2xl bg-zinc-200/70 dark:bg-zinc-700" />
        <div className="h-4 w-full rounded-full bg-zinc-200/60 dark:bg-zinc-700/80" />
        <div className="h-4 w-2/3 rounded-full bg-zinc-200/60 dark:bg-zinc-700/80" />
        <div className="mt-4 h-12 w-48 rounded-full bg-sky-200/60 dark:bg-sky-500/30" />
      </div>
    </div>
  );
}

export function ExperiencesSkeleton() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {[0, 1, 2, 3].map((item) => (
        <div
          key={item}
          className="animate-pulse rounded-3xl border border-zinc-200/60 bg-white/60 p-6 shadow-sm dark:border-zinc-700/60 dark:bg-zinc-900/60"
        >
          <div className="mb-4 flex items-center justify-between">
            <div>
              <div className="mb-2 h-3 w-24 rounded-full bg-zinc-200/70 dark:bg-zinc-600" />
              <div className="h-6 w-40 rounded-full bg-zinc-200/70 dark:bg-zinc-600" />
            </div>
            <div className="h-6 w-20 rounded-full bg-purple-200/70 dark:bg-purple-500/30" />
          </div>
          <div className="mb-6 h-12 w-full rounded-xl bg-zinc-200/60 dark:bg-zinc-600/80" />
          <div className="h-3 w-48 rounded-full bg-zinc-200/60 dark:bg-zinc-700/80" />
        </div>
      ))}
    </div>
  );
}
