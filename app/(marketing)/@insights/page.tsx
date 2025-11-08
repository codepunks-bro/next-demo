import { type LandingVariant, readLandingVariant } from "@/lib/server/ab-testing";
import { readTravelProfile } from "@/lib/server/travel-profile";
import { getPersonaHighlight } from "@/lib/data/landing";

const variantPalette: Record<LandingVariant, string> = {
  aurora: "from-sky-500/15 via-emerald-400/10 to-transparent border-sky-300/40",
  sonic: "from-purple-600/20 via-indigo-500/15 to-transparent border-purple-400/40",
};

export default async function LandingInsightsSlot() {
  const profile = await readTravelProfile();
  const variant = await readLandingVariant();
  const highlight = await getPersonaHighlight(profile.persona);

  return (
    <aside
      className={[
        "rounded-3xl border bg-gradient-to-br p-6 text-sm shadow-inner shadow-zinc-950/10 dark:shadow-none",
        variantPalette[variant],
      ].join(" ")}
    >
      <div className="flex flex-col gap-4">
        <header className="flex items-center justify-between gap-2">
          <span className="text-xs font-semibold tracking-widest text-sky-700 uppercase dark:text-sky-300">
            Live Insights
          </span>
          <span className="text-xs text-zinc-500 dark:text-zinc-400">
            Variant • {variant.toUpperCase()}
          </span>
        </header>
        <p className="text-base font-medium text-zinc-900 dark:text-zinc-100">
          {highlight.headline}
        </p>
        <ul className="grid gap-3 text-xs text-zinc-600 sm:grid-cols-3 dark:text-zinc-300">
          <li className="rounded-2xl border border-white/40 bg-white/60 p-3 text-center font-medium shadow-sm dark:border-white/5 dark:bg-white/10">
            Профиль: <span className="block text-lg">{profile.persona}</span>
          </li>
          <li className="rounded-2xl border border-white/40 bg-white/60 p-3 text-center font-medium shadow-sm dark:border-white/5 dark:bg-white/10">
            CTAs: <span className="block text-lg">{highlight.cta.length}</span>
          </li>
          <li className="rounded-2xl border border-white/40 bg-white/60 p-3 text-center font-medium shadow-sm dark:border-white/5 dark:bg-white/10">
            Stream: <span className="block text-lg">Suspense</span>
          </li>
        </ul>
      </div>
    </aside>
  );
}
