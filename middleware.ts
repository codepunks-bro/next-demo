import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const LANDING_VARIANT_COOKIE = "ntl.landingVariant";
const LANDING_VARIANT_HEADER = "x-ntl-variant";

const VARIANTS = ["aurora", "sonic"] as const;
type LandingVariant = (typeof VARIANTS)[number];

function pickVariant(): (typeof VARIANTS)[number] {
  const index = Math.floor(Math.random() * VARIANTS.length);
  return VARIANTS[index];
}

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname !== "/") {
    return NextResponse.next();
  }

  const response = NextResponse.next();
  const existingVariant = request.cookies.get(LANDING_VARIANT_COOKIE)?.value as
    | LandingVariant
    | undefined;
  const variant: LandingVariant =
    existingVariant && VARIANTS.includes(existingVariant)
      ? existingVariant
      : pickVariant();

  if (!existingVariant) {
    response.cookies.set({
      name: LANDING_VARIANT_COOKIE,
      value: variant,
      path: "/",
      httpOnly: false,
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7,
    });
  }

  response.headers.set(LANDING_VARIANT_HEADER, variant);
  return response;
}

export const config = {
  matcher: ["/"],
};
