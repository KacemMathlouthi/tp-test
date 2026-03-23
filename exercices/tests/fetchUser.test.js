import { describe, it, expect } from "vitest";
import { fetchRandomUser } from "../src/fetchUser.js";

describe("fetchRandomUser", () => {
  it("devrait récupérer un utilisateur aléatoire depuis l'API", async () => {
    const user = await fetchRandomUser();

    expect(user).toBeDefined();
    expect(typeof user).toBe("object");
  });

  it("devrait contenir les informations de base de l'utilisateur", async () => {
    const user = await fetchRandomUser();

    expect(user).toHaveProperty("name");
    expect(user).toHaveProperty("email");
    expect(user).toHaveProperty("gender");
  });

  it("devrait contenir un nom avec prénom et nom de famille", async () => {
    const user = await fetchRandomUser();

    expect(user.name).toHaveProperty("first");
    expect(user.name).toHaveProperty("last");
    expect(typeof user.name.first).toBe("string");
    expect(typeof user.name.last).toBe("string");
  });

  it("devrait contenir un email valide", async () => {
    const user = await fetchRandomUser();

    expect(user.email).toBeDefined();
    expect(typeof user.email).toBe("string");
    expect(user.email).toContain("@");
  });
});
