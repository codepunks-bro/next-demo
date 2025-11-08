"use client";

import { useTravelProfile } from "@/components/providers/travel-profile-provider";

export function TravelPersonaSelector() {
  const { profile, personas, submit, isPending, state, activePersona } =
    useTravelProfile();

  return (
    <section className="grid gap-4 rounded-3xl border border-sky-200/60 bg-white/85 p-6 shadow-lg shadow-sky-100/40 backdrop-blur dark:border-sky-500/30 dark:bg-zinc-950/80">
      <header className="flex flex-col gap-2">
        <span className="text-xs font-semibold tracking-widest text-sky-600 uppercase dark:text-sky-300">
          Профиль путешественника
        </span>
        <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
          {activePersona.label}
        </h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-300">
          {activePersona.summary}
        </p>
      </header>

      <form action={submit} className="grid gap-4 md:grid-cols-[1fr_auto]">
        <label className="grid gap-2">
          <span className="text-xs font-medium tracking-wide text-zinc-500 uppercase">
            Выберите сценарий
          </span>
          <select
            name="persona"
            defaultValue={profile.persona}
            disabled={isPending}
            className="rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-800 shadow-sm transition outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-200 disabled:cursor-wait disabled:opacity-60 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:focus:border-sky-400 dark:focus:ring-sky-500/40"
          >
            {personas.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label} — {option.tagline}
              </option>
            ))}
          </select>
        </label>

        <button
          type="submit"
          disabled={isPending}
          className="self-end rounded-xl bg-sky-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-500 focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-wait disabled:bg-sky-400 disabled:opacity-70"
        >
          {isPending ? "Сохраняем..." : "Персонализировать контент"}
        </button>
      </form>

      {state.status === "success" ? (
        <p className="rounded-xl border border-emerald-300/60 bg-emerald-50 px-4 py-3 text-sm text-emerald-700 shadow-sm dark:border-emerald-400/30 dark:bg-emerald-500/10 dark:text-emerald-200">
          Предпочтения обновлены — контент витрины будет адаптирован для профиля{" "}
          <span className="font-semibold">{activePersona.label}</span>.
        </p>
      ) : state.status === "error" ? (
        <p className="rounded-xl border border-rose-300/60 bg-rose-50 px-4 py-3 text-sm text-rose-700 shadow-sm dark:border-rose-400/30 dark:bg-rose-500/10 dark:text-rose-200">
          {state.error ?? "Не удалось сохранить предпочтения. Попробуйте ещё раз."}
        </p>
      ) : null}
    </section>
  );
}
