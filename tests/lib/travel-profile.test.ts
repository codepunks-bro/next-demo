import { describe, expect, it } from "vitest";
import {
  DEFAULT_TRAVEL_PROFILE,
  getTravelPersonaMeta,
  isTravelPersona,
  TRAVEL_PERSONA_OPTIONS,
} from "@/lib/state/travel-profile";

describe("travel profile helpers", () => {
  it("validates persona values", () => {
    expect(isTravelPersona("explorer")).toBe(true);
    expect(isTravelPersona("unknown")).toBe(false);
  });

  it("returns meta for default persona", () => {
    const meta = getTravelPersonaMeta(DEFAULT_TRAVEL_PROFILE.persona);
    expect(meta.label).toBeDefined();
  });

  it("contains four persona options", () => {
    expect(TRAVEL_PERSONA_OPTIONS).toHaveLength(4);
  });
});
