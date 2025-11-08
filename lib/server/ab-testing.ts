import { cookies, headers } from "next/headers";

const LANDING_VARIANT_COOKIE = "ntl.landingVariant";
const LANDING_VARIANT_HEADER = "x-ntl-variant";

export type LandingVariant = "aurora" | "sonic";

const FALLBACK_VARIANT: LandingVariant = "aurora";

export async function readLandingVariant(): Promise<LandingVariant> {
  const headerStore = await headers();
  const fromHeader = headerStore.get(LANDING_VARIANT_HEADER);
  if (fromHeader === "aurora" || fromHeader === "sonic") {
    return fromHeader;
  }

  const cookieStore = await cookies();
  const fromCookie = cookieStore.get(LANDING_VARIANT_COOKIE)?.value;
  if (fromCookie === "aurora" || fromCookie === "sonic") {
    return fromCookie;
  }

  return FALLBACK_VARIANT;
}
