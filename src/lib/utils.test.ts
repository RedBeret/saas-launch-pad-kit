import { describe, it, expect } from "vitest";
import { cn } from "./utils";

describe("cn", () => {
  it("joins class names", () => {
    expect(cn("a", "b")).toBe("a b");
  });

  it("merges duplicate classes", () => {
    expect(cn("px-2", "px-2", "py-1")).toBe("px-2 py-1");
  });
});
