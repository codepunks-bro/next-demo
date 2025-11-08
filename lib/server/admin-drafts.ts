import { revalidateTag } from "next/cache";
import { nanoid } from "@/lib/utils/nanoid";
import {
  DEFAULT_TRAVEL_PROFILE,
  TRAVEL_PERSONA_OPTIONS,
  type TravelPersona,
} from "@/lib/state/travel-profile";

type DraftStatus = "draft" | "published";

export type AdminExperienceDraft = {
  id: string;
  title: string;
  persona: TravelPersona;
  priceFrom: number;
  status: DraftStatus;
  createdAt: string;
};

type DraftStore = Map<string, AdminExperienceDraft>;

declare global {
  var __ntl_draft_store: DraftStore | undefined;
}

function getStore(): DraftStore {
  if (!globalThis.__ntl_draft_store) {
    globalThis.__ntl_draft_store = new Map<string, AdminExperienceDraft>();
    seedInitialDrafts(globalThis.__ntl_draft_store);
  }
  return globalThis.__ntl_draft_store;
}

function seedInitialDrafts(store: DraftStore) {
  const seedData: AdminExperienceDraft[] = [
    {
      id: nanoid(),
      title: "Wellness-релакс в Киото",
      persona: "wellness",
      priceFrom: 4200,
      status: "draft",
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(),
    },
    {
      id: nanoid(),
      title: "Горный треккинг в Торрес-дель-Пайне",
      persona: "explorer",
      priceFrom: 2800,
      status: "published",
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
    },
  ];

  seedData.forEach((item) => {
    store.set(item.id, item);
  });
}

export function listAdminDrafts(): AdminExperienceDraft[] {
  return [...getStore().values()].sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1));
}

function invalidatePersonaCaches(persona: TravelPersona) {
  const invalidate = revalidateTag as unknown as (tag: string) => void;
  invalidate(`experience-catalog:${persona}`);
  invalidate(`experience-filters:${persona}`);
}

function resolvePersona(persona: string | null | undefined): TravelPersona {
  const fallback = DEFAULT_TRAVEL_PROFILE.persona;
  if (!persona) return fallback;
  return TRAVEL_PERSONA_OPTIONS.some((option) => option.id === persona)
    ? (persona as TravelPersona)
    : fallback;
}

export function createAdminDraft(input: {
  title: string;
  persona: string | null;
  priceFrom: number;
}): AdminExperienceDraft {
  const store = getStore();
  const draft: AdminExperienceDraft = {
    id: nanoid(),
    title: input.title,
    persona: resolvePersona(input.persona),
    priceFrom: input.priceFrom,
    status: "draft",
    createdAt: new Date().toISOString(),
  };

  store.set(draft.id, draft);
  invalidatePersonaCaches(draft.persona);
  return draft;
}

export function toggleDraftStatus(id: string): AdminExperienceDraft | null {
  const store = getStore();
  const draft = store.get(id);
  if (!draft) return null;

  const nextStatus: DraftStatus = draft.status === "draft" ? "published" : "draft";
  const updatedDraft: AdminExperienceDraft = {
    ...draft,
    status: nextStatus,
  };

  store.set(id, updatedDraft);
  invalidatePersonaCaches(draft.persona);
  return updatedDraft;
}

export function deleteDraft(id: string): boolean {
  const store = getStore();
  const draft = store.get(id);
  if (!draft) return false;

  store.delete(id);
  invalidatePersonaCaches(draft.persona);
  return true;
}
