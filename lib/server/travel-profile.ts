import { cookies } from "next/headers";
import {
  DEFAULT_TRAVEL_PROFILE,
  isTravelPersona,
  type TravelProfile,
} from "@/lib/state/travel-profile";

const COOKIE_NAME = "ntl.travelProfile";
const COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 30;

export async function readTravelProfile(): Promise<TravelProfile> {
  const store = await cookies();
  const raw = store.get(COOKIE_NAME)?.value;

  if (!raw) {
    return DEFAULT_TRAVEL_PROFILE;
  }

  try {
    const parsed = JSON.parse(raw) as Partial<TravelProfile>;
    if (parsed && parsed.persona && isTravelPersona(parsed.persona)) {
      return { persona: parsed.persona };
    }
  } catch {
    // Ignore corrupted cookie payloads and fall back to defaults.
  }

  return DEFAULT_TRAVEL_PROFILE;
}

export async function persistTravelProfile(profile: TravelProfile) {
  const store = await cookies();
  store.set({
    name: COOKIE_NAME,
    value: JSON.stringify(profile),
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: COOKIE_MAX_AGE_SECONDS,
  });
}
