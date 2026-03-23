import { describe, it, expect } from "vitest";
import { trier } from "../src/sort.js";

describe("trier", () => {
  it("devrait trier un tableau de nombres par ordre croissant", () => {
    expect(trier([3, 1, 4, 1, 5])).toEqual([1, 1, 3, 4, 5]);
  });

  it("devrait retourner un tableau vide pour un tableau vide", () => {
    expect(trier([])).toEqual([]);
  });

  it("devrait retourner le même tableau s'il est déjà trié", () => {
    expect(trier([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it("devrait trier un tableau inversé", () => {
    expect(trier([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  it("devrait gérer un tableau avec un seul élément", () => {
    expect(trier([42])).toEqual([42]);
  });

  it("devrait gérer les nombres négatifs", () => {
    expect(trier([3, -1, 0, -5, 2])).toEqual([-5, -1, 0, 2, 3]);
  });

  it("devrait gérer les nombres décimaux", () => {
    expect(trier([1.5, 1.2, 1.8])).toEqual([1.2, 1.5, 1.8]);
  });

  it("devrait ne pas modifier le tableau original", () => {
    const original = [3, 1, 2];
    trier(original);
    expect(original).toEqual([3, 1, 2]);
  });

  it("devrait lancer une erreur si l'argument n'est pas un tableau", () => {
    expect(() => trier("abc")).toThrow("L'argument doit être un tableau");
  });

  it("devrait lancer une erreur si le tableau contient des éléments non numériques", () => {
    expect(() => trier([1, "a", 3])).toThrow(
      "Le tableau ne doit contenir que des nombres"
    );
  });

  it("devrait lancer une erreur si le tableau contient NaN", () => {
    expect(() => trier([1, NaN, 3])).toThrow(
      "Le tableau ne doit contenir que des nombres"
    );
  });
});
