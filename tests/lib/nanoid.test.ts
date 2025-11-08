import { describe, expect, it } from "vitest";
import { nanoid } from "@/lib/utils/nanoid";

describe("nanoid", () => {
  it("generates ids with requested length", () => {
    const id = nanoid(8);
    expect(id).toHaveLength(8);
  });

  it("produces different values across calls", () => {
    const first = nanoid();
    const second = nanoid();
    expect(first).not.toEqual(second);
  });
});
