import { describe, it, expect } from "vitest";
import { isPriceInRange } from "../src/priceUtils.js";

describe("isPriceInRange - Boundary testing", () => {
  it("devrait retourner true quand le prix est égal au minimum (limite inférieure)", () => {
    expect(isPriceInRange(10, 10, 100)).toBe(true);
  });

  it("devrait retourner true quand le prix est égal au maximum (limite supérieure)", () => {
    expect(isPriceInRange(100, 10, 100)).toBe(true);
  });

  it("devrait retourner true quand le prix est entre min et max", () => {
    expect(isPriceInRange(50, 10, 100)).toBe(true);
  });

  it("devrait retourner false quand le prix est en dessous du minimum", () => {
    expect(isPriceInRange(9, 10, 100)).toBe(false);
  });

  it("devrait retourner false quand le prix est au dessus du maximum", () => {
    expect(isPriceInRange(101, 10, 100)).toBe(false);
  });

  it("devrait retourner false quand le prix est juste en dessous du minimum (min - 1)", () => {
    expect(isPriceInRange(9, 10, 100)).toBe(false);
  });

  it("devrait retourner false quand le prix est juste au dessus du maximum (max + 1)", () => {
    expect(isPriceInRange(101, 10, 100)).toBe(false);
  });

  it("devrait retourner true quand le prix est juste au dessus du minimum (min + 1)", () => {
    expect(isPriceInRange(11, 10, 100)).toBe(true);
  });

  it("devrait retourner true quand le prix est juste en dessous du maximum (max - 1)", () => {
    expect(isPriceInRange(99, 10, 100)).toBe(true);
  });

  it("devrait retourner true quand min et max sont égaux et le prix est égal", () => {
    expect(isPriceInRange(50, 50, 50)).toBe(true);
  });

  it("devrait retourner false quand le prix est négatif et hors de la plage", () => {
    expect(isPriceInRange(-5, 0, 100)).toBe(false);
  });

  it("devrait retourner true quand le prix est 0 et 0 est le minimum", () => {
    expect(isPriceInRange(0, 0, 100)).toBe(true);
  });
});
