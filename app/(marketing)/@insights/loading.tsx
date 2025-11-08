export default function LandingInsightsLoading() {
  return (
    <aside className="animate-pulse rounded-3xl border border-sky-200/40 bg-white/40 p-6 shadow-inner shadow-sky-200/30 dark:border-slate-700/40 dark:bg-slate-900/40">
      <div className="flex flex-col gap-4">
        <div className="h-3 w-24 rounded-full bg-sky-200/80 dark:bg-slate-700/80" />
        <div className="h-6 w-3/4 rounded-full bg-sky-100/80 dark:bg-slate-700/60" />
        <div className="grid gap-3 sm:grid-cols-3">
          {[0, 1, 2].map((item) => (
            <div
              key={item}
              className="h-16 rounded-2xl border border-sky-100/80 bg-white/60 dark:border-slate-700/60 dark:bg-slate-800/60"
            />
          ))}
        </div>
      </div>
    </aside>
  );
}
