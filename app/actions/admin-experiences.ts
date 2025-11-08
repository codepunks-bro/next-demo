"use server";

import { revalidatePath } from "next/cache";
import {
  type AdminExperienceDraft,
  createAdminDraft,
  deleteDraft,
  listAdminDrafts,
  toggleDraftStatus,
} from "@/lib/server/admin-drafts";
import { TRAVEL_PERSONA_OPTIONS } from "@/lib/state/travel-profile";

export type AdminDashboardState = {
  drafts: AdminExperienceDraft[];
  message?: string;
  error?: string;
};

export async function getAdminDashboardState(): Promise<AdminDashboardState> {
  return {
    drafts: listAdminDrafts(),
  };
}

export async function createDraftAction(
  _prevState: AdminDashboardState,
  formData: FormData,
): Promise<AdminDashboardState> {
  const title = formData.get("title");
  const price = Number(formData.get("priceFrom"));
  const persona = formData.get("persona");

  if (typeof title !== "string" || !title.trim()) {
    return {
      drafts: listAdminDrafts(),
      error: "Название обязательно.",
    };
  }

  if (!Number.isFinite(price) || price <= 0) {
    return {
      drafts: listAdminDrafts(),
      error: "Укажите стоимость от, например 3500.",
    };
  }

  createAdminDraft({
    title: title.trim(),
    priceFrom: Math.round(price),
    persona: typeof persona === "string" ? persona : null,
  });

  revalidatePath("/experiences");
  revalidatePath("/admin");

  return {
    drafts: listAdminDrafts(),
    message: "Новый опыт добавлен и готов к публикации.",
  };
}

export async function toggleDraftAction(formData: FormData) {
  const id = formData.get("id");
  if (typeof id !== "string") return;
  toggleDraftStatus(id);
  revalidatePath("/admin");
  revalidatePath("/experiences");
}

export async function deleteDraftAction(formData: FormData) {
  const id = formData.get("id");
  if (typeof id !== "string") return;
  deleteDraft(id);
  revalidatePath("/admin");
  revalidatePath("/experiences");
}

export const personaOptions = TRAVEL_PERSONA_OPTIONS;
