import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function POST(request: Request) {
  const payload = await request.json().catch(() => ({}));
  const persona = typeof payload?.persona === "string" ? payload.persona : "explorer";

  revalidateTag(`experience-catalog:${persona}`);
  revalidateTag(`experience-filters:${persona}`);

  return NextResponse.json({
    ok: true,
    revalidated: [`experience-catalog:${persona}`, `experience-filters:${persona}`],
  });
}

export const runtime = "nodejs";
