import { Suspense } from "react";
import Link from "next/link";
import { mainNavigation } from "@/config/navigation";
import { TravelPersonaSelector } from "@/components/landing/travel-persona-selector";
import { PersonalizedHighlight } from "@/components/landing/personalized-highlight";
import {
  ExperiencesSkeleton,
  HighlightSkeleton,
} from "@/components/landing/loading-skeleton";
import { FeaturedExperiences } from "@/components/landing/featured-experiences";
import { readTravelProfile } from "@/lib/server/travel-profile";
import { getFeaturedExperiences, getPersonaHighlight } from "@/lib/data/landing";
import { type LandingVariant, readLandingVariant } from "@/lib/server/ab-testing";

export const revalidate = 60;
export const experimental_ppr = true;

const VARIANT_BADGE: Record<LandingVariant, string> = {
  aurora: "Aurora Stream",
  sonic: "Sonic Burst",
};

export default async function LandingPage() {
  const profile = await readTravelProfile();
  const variant = await readLandingVariant();
  const highlightPromise = getPersonaHighlight(profile.persona);
  const experiencesPromise = getFeaturedExperiences(profile.persona);
  const badgeLabel = VARIANT_BADGE[variant];

  return (
    <div className="space-y-12">
      <section
        className={[
          "grid gap-6 rounded-3xl border p-10 shadow-xl shadow-sky-100/40 backdrop-blur transition",
          variant === "aurora"
            ? "border-zinc-200/60 bg-white/80 dark:border-zinc-800/60 dark:bg-zinc-950/80"
            : "border-purple-200/70 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 text-white shadow-purple-500/30",
        ].join(" ")}
      >
        <div className="flex items-center justify-between gap-4">
          <span
            className={[
              "inline-flex max-w-max items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold tracking-widest uppercase shadow ring-1",
              variant === "aurora"
                ? "bg-white text-sky-700 ring-sky-200 dark:bg-zinc-900 dark:text-sky-300 dark:ring-sky-400/40"
                : "bg-white/10 text-white ring-white/30 backdrop-blur",
            ].join(" ")}
          >
            Next.js 16 · React 19 Showcase
          </span>
          <span
            className={[
              "hidden rounded-full px-3 py-1 text-xs font-semibold tracking-widest uppercase md:inline-flex",
              variant === "aurora" ? "bg-sky-100 text-sky-700" : "bg-white/10 text-white",
            ].join(" ")}
          >
            Variant: {badgeLabel}
          </span>
        </div>

        <h1 className="text-3xl leading-tight font-semibold sm:text-4xl">
          Next Travel Lab — продуктовая витрина, которая демонстрирует все главные новинки
          Next.js 16 и React 19 на реальном сценарии.
        </h1>
        <p
          className={[
            "max-w-2xl text-lg",
            variant === "aurora" ? "text-zinc-600 dark:text-zinc-300" : "text-white/80",
          ].join(" ")}
        >
          Мы строим платформу бронирования с AI-консьержем, параллельными маршрутами,
          частичным предварительным рендерингом и богатым инструментарием разработчика.
          Переходите в разделы ниже, чтобы увидеть каждую фичу в действии.
        </p>

        <div className="flex flex-wrap gap-3">
          {mainNavigation.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={[
                "inline-flex items-center gap-2 rounded-full border px-5 py-2 text-sm font-medium transition",
                variant === "aurora"
                  ? "border-sky-200 bg-white/80 text-sky-700 hover:-translate-y-0.5 hover:bg-white hover:text-sky-900 hover:shadow dark:border-sky-400/40 dark:bg-zinc-900/80 dark:text-sky-300 dark:hover:border-sky-300"
                  : "border-white/20 bg-white/10 text-white hover:-translate-y-0.5 hover:bg-white/20",
              ].join(" ")}
            >
              {item.label}
              <span className="text-xs opacity-80">→</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="grid gap-6">
        <h2 className="text-2xl font-semibold">Что планируем показать</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {mainNavigation.map((item) => (
            <article
              key={item.href}
              className="flex flex-col gap-2 rounded-2xl border border-zinc-200/60 bg-white/70 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg dark:border-zinc-800/60 dark:bg-zinc-950/70"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{item.label}</h3>
                {item.badge ? (
                  <span className="inline-flex items-center rounded-full bg-sky-100 px-2 py-0.5 text-xs font-semibold text-sky-700 dark:bg-sky-500/20 dark:text-sky-200">
                    {item.badge}
                  </span>
                ) : null}
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-300">
                {item.description}
              </p>
              <Link
                href={item.href}
                className="text-sm font-medium text-sky-700 transition hover:text-sky-900 dark:text-sky-300 dark:hover:text-sky-200"
              >
                Перейти к разделу →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <Suspense fallback={<HighlightSkeleton />}>
        <PersonalizedHighlight data={highlightPromise} />
      </Suspense>

      <section className="grid gap-6">
        <h2 className="text-2xl font-semibold">Персонализация экспириенса в один клик</h2>
        <p className="max-w-2xl text-sm text-zinc-600 dark:text-zinc-300">
          Попробуйте выбрать сценарий путешественника — мы будем сохранять предпочтения с
          помощью Server Actions, cookies и контекста React 19. В следующих разделах
          рекомендации, цены и AI-подборки подстроятся под выбранную персону.
        </p>
        <TravelPersonaSelector />
      </section>

      <Suspense fallback={<ExperiencesSkeleton />}>
        <FeaturedExperiences data={experiencesPromise} />
      </Suspense>
    </div>
  );
}
