import { describe, it, expect } from "vitest";
import { add } from "../src/math.js";

describe("add", () => {
  it("devrait additionner deux nombres positifs", () => {
    const result = add(2, 3);
    expect(result).toBe(5);
  });

  it("devrait additionner un nombre positif et un nombre négatif", () => {
    expect(add(5, -3)).toBe(2);
  });

  it("devrait retourner 0 quand on additionne 0 et 0", () => {
    expect(add(0, 0)).toBe(0);
  });

  it("devrait gérer les nombres décimaux", () => {
    expect(add(0.1, 0.2)).toBeCloseTo(0.3);
  });
});
