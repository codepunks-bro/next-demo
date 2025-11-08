export function FiltersSkeleton() {
  return (
    <div className="h-full animate-pulse rounded-3xl border border-zinc-200/70 bg-white/70 p-6 shadow-sm dark:border-zinc-700/60 dark:bg-zinc-900/60">
      <div className="mb-4 h-4 w-32 rounded-full bg-zinc-200/70 dark:bg-zinc-700" />
      <div className="mb-2 h-3 w-52 rounded-full bg-zinc-200/60 dark:bg-zinc-700/80" />
      <div className="space-y-4 pt-4">
        {[0, 1, 2].map((section) => (
          <div key={section} className="space-y-3">
            <div className="h-3 w-36 rounded-full bg-zinc-200/60 dark:bg-zinc-700/80" />
            <div className="flex flex-wrap gap-2">
              {[0, 1, 2].map((chip) => (
                <span
                  key={chip}
                  className="h-7 w-24 rounded-full bg-zinc-200/40 dark:bg-zinc-700/60"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function CatalogSkeleton() {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {[0, 1, 2, 3, 4, 5].map((card) => (
        <div
          key={card}
          className="h-64 animate-pulse rounded-3xl border border-zinc-200/70 bg-white/80 p-5 shadow-sm dark:border-zinc-700/60 dark:bg-zinc-900/60"
        >
          <div className="mb-4 h-6 w-3/4 rounded-full bg-zinc-200/70 dark:bg-zinc-700" />
          <div className="mb-2 h-3 w-48 rounded-full bg-zinc-200/60 dark:bg-zinc-700/80" />
          <div className="mb-8 h-3 w-36 rounded-full bg-zinc-200/60 dark:bg-zinc-700/80" />
          <div className="space-y-2">
            {[0, 1, 2].map((tag) => (
              <div
                key={tag}
                className="h-5 w-24 rounded-full bg-sky-200/60 dark:bg-sky-500/30"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
