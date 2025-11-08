"use client";

import { useActionState, useOptimistic } from "react";
import {
  type AdminDashboardState,
  type AdminExperienceDraft,
  createDraftAction,
  deleteDraftAction,
  personaOptions,
  toggleDraftAction,
} from "@/app/actions/admin-experiences";

type OptimisticUpdate =
  | { type: "create"; draft: AdminExperienceDraft }
  | { type: "delete"; id: string }
  | { type: "toggle"; id: string };

function applyOptimisticDrafts(
  current: AdminExperienceDraft[],
  update: OptimisticUpdate,
): AdminExperienceDraft[] {
  switch (update.type) {
    case "create":
      return [update.draft, ...current];
    case "delete":
      return current.filter((draft) => draft.id !== update.id);
    case "toggle":
      return current.map((draft) =>
        draft.id === update.id
          ? { ...draft, status: draft.status === "draft" ? "published" : "draft" }
          : draft,
      );
    default:
      return current;
  }
}

export function AdminDashboard({ initialState }: { initialState: AdminDashboardState }) {
  const [state, formAction, isSubmitting] = useActionState(
    createDraftAction,
    initialState,
  );

  const [optimisticDrafts, addOptimisticDraft] = useOptimistic(
    state.drafts,
    applyOptimisticDrafts,
  );

  return (
    <div className="grid gap-8">
      <section className="grid gap-4">
        <header className="space-y-2">
          <span className="text-xs font-semibold tracking-widest text-emerald-600 uppercase dark:text-emerald-300">
            Server Actions · Optimistic UI
          </span>
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
            Добавить новое направление
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-300">
            Данные сохраняются на сервере и обновляют публичный каталог через
            revalidateTag и revalidatePath.
          </p>
        </header>

        <form
          action={async (formData) => {
            const persona = formData.get("persona");
            const newDraft: AdminExperienceDraft = {
              id: `optimistic-${Date.now()}`,
              title: String(formData.get("title") ?? "Новое направление"),
              persona:
                typeof persona === "string"
                  ? (persona as AdminExperienceDraft["persona"])
                  : (personaOptions[0]?.id ?? "explorer"),
              priceFrom: Number(formData.get("priceFrom") ?? 2500),
              status: "draft",
              createdAt: new Date().toISOString(),
            };

            addOptimisticDraft({ type: "create", draft: newDraft });
            await formAction(formData);
          }}
          className="grid gap-4 rounded-3xl border border-zinc-200/60 bg-white/90 p-6 shadow-lg dark:border-zinc-700/60 dark:bg-zinc-950/80"
        >
          <label className="grid gap-2">
            <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-200">
              Название направления
            </span>
            <input
              name="title"
              placeholder="Aurora Retreat в Исландии"
              className="rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-800 shadow-sm focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200 focus:outline-none disabled:cursor-wait dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:focus:border-emerald-400 dark:focus:ring-emerald-500/40"
              required
              disabled={isSubmitting}
            />
          </label>
        </form>
      </section>
    </div>
  );
}
