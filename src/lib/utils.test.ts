import { describe, it, expect } from "vitest";
import { cn } from "./utils";

describe("cn", () => {
  it("joins class names", () => {
    expect(cn("a", "b")).toBe("a b");
  });

  it("merges duplicate classes", () => {
    expect(cn("a", "a", "b")).toBe("a b");
  });
});
