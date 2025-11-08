"use server";

import {
  DEFAULT_TRAVEL_PROFILE,
  isTravelPersona,
  type TravelProfileActionState,
} from "@/lib/state/travel-profile";
import { persistTravelProfile, readTravelProfile } from "@/lib/server/travel-profile";

export async function updateTravelProfile(
  previousState: TravelProfileActionState,
  formData: FormData,
): Promise<TravelProfileActionState> {
  const persona = formData.get("persona");

  if (typeof persona !== "string" || !isTravelPersona(persona)) {
    return {
      status: "error",
      profile: previousState?.profile ?? (await readTravelProfile()),
      error: "Не удалось обновить предпочтения путешествий.",
    };
  }

  const nextProfile = { persona };

  await persistTravelProfile(nextProfile);

  return {
    status: "success",
    profile: nextProfile,
    message: `Профиль путешественника обновлён: ${persona}`,
  };
}

export async function getInitialTravelProfileState(): Promise<TravelProfileActionState> {
  const profile = await readTravelProfile();
  return {
    status: "idle",
    profile: profile ?? DEFAULT_TRAVEL_PROFILE,
  };
}
