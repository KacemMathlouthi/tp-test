import { describe, it, expect } from "vitest";
import { transformer } from "../src/stringUtils.js";

describe("transformer", () => {
  it("devrait retourner une chaîne vide pour une entrée vide", () => {
    expect(transformer("")).toBe("");
  });

  it("devrait transformer les minuscules en majuscules", () => {
    expect(transformer("hello world")).toBe("HELLO WORLD");
  });

  it("devrait gérer les caractères spéciaux", () => {
    expect(transformer("hello! @world#")).toBe("HELLO! @WORLD#");
  });

  it("devrait garder les majuscules inchangées", () => {
    expect(transformer("HELLO")).toBe("HELLO");
  });

  it("devrait gérer les chaînes mixtes (majuscules et minuscules)", () => {
    expect(transformer("HeLLo WoRLd")).toBe("HELLO WORLD");
  });

  it("devrait gérer les caractères accentués", () => {
    expect(transformer("café résumé")).toBe("CAFÉ RÉSUMÉ");
  });

  it("devrait gérer les chiffres dans la chaîne", () => {
    expect(transformer("test123")).toBe("TEST123");
  });
});
