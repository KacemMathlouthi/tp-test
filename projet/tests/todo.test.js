import { describe, it, expect, beforeEach } from "vitest";
import {
  addTodo,
  removeTodo,
  toggleTodo,
  filterTodos,
  countTodos,
  resetId,
} from "../src/todo.js";

describe("Todo App", () => {
  let todos;

  beforeEach(() => {
    resetId();
    todos = [];
  });

  // --- addTodo ---
  describe("addTodo", () => {
    it("devrait ajouter un todo à une liste vide", () => {
      const result = addTodo(todos, "Acheter du lait");
      expect(result).toHaveLength(1);
      expect(result[0].title).toBe("Acheter du lait");
      expect(result[0].completed).toBe(false);
    });

    it("devrait ajouter plusieurs todos", () => {
      let result = addTodo(todos, "Tâche 1");
      result = addTodo(result, "Tâche 2");
      result = addTodo(result, "Tâche 3");
      expect(result).toHaveLength(3);
    });

    it("devrait supprimer les espaces du titre", () => {
      const result = addTodo(todos, "  Faire le ménage  ");
      expect(result[0].title).toBe("Faire le ménage");
    });

    it("devrait lancer une erreur si le titre est vide", () => {
      expect(() => addTodo(todos, "")).toThrow("Le titre ne peut pas être vide");
    });

    it("devrait lancer une erreur si le titre ne contient que des espaces", () => {
      expect(() => addTodo(todos, "   ")).toThrow("Le titre ne peut pas être vide");
    });

    it("ne devrait pas modifier le tableau original", () => {
      const original = [];
      addTodo(original, "Test");
      expect(original).toHaveLength(0);
    });
  });

  // --- removeTodo ---
  describe("removeTodo", () => {
    it("devrait supprimer un todo par son id", () => {
      let result = addTodo(todos, "À supprimer");
      result = removeTodo(result, 1);
      expect(result).toHaveLength(0);
    });

    it("devrait garder les autres todos intacts", () => {
      let result = addTodo(todos, "Tâche 1");
      result = addTodo(result, "Tâche 2");
      result = removeTodo(result, 1);
      expect(result).toHaveLength(1);
      expect(result[0].title).toBe("Tâche 2");
    });

    it("devrait lancer une erreur si le todo n'existe pas", () => {
      expect(() => removeTodo(todos, 999)).toThrow("Todo non trouvé");
    });
  });

  // --- toggleTodo ---
  describe("toggleTodo", () => {
    it("devrait marquer un todo comme complété", () => {
      let result = addTodo(todos, "Tâche");
      result = toggleTodo(result, 1);
      expect(result[0].completed).toBe(true);
    });

    it("devrait décocher un todo déjà complété", () => {
      let result = addTodo(todos, "Tâche");
      result = toggleTodo(result, 1);
      result = toggleTodo(result, 1);
      expect(result[0].completed).toBe(false);
    });

    it("devrait lancer une erreur si le todo n'existe pas", () => {
      expect(() => toggleTodo(todos, 999)).toThrow("Todo non trouvé");
    });
  });

  // --- filterTodos ---
  describe("filterTodos", () => {
    it("devrait retourner tous les todos avec le filtre 'all'", () => {
      let result = addTodo(todos, "Tâche 1");
      result = addTodo(result, "Tâche 2");
      result = toggleTodo(result, 1);
      expect(filterTodos(result, "all")).toHaveLength(2);
    });

    it("devrait retourner seulement les todos actifs", () => {
      let result = addTodo(todos, "Active");
      result = addTodo(result, "Complétée");
      result = toggleTodo(result, 2);
      const active = filterTodos(result, "active");
      expect(active).toHaveLength(1);
      expect(active[0].title).toBe("Active");
    });

    it("devrait retourner seulement les todos complétés", () => {
      let result = addTodo(todos, "Active");
      result = addTodo(result, "Complétée");
      result = toggleTodo(result, 2);
      const completed = filterTodos(result, "completed");
      expect(completed).toHaveLength(1);
      expect(completed[0].title).toBe("Complétée");
    });
  });

  // --- countTodos ---
  describe("countTodos", () => {
    it("devrait compter correctement les todos", () => {
      let result = addTodo(todos, "Tâche 1");
      result = addTodo(result, "Tâche 2");
      result = addTodo(result, "Tâche 3");
      result = toggleTodo(result, 2);
      const counts = countTodos(result);
      expect(counts.total).toBe(3);
      expect(counts.active).toBe(2);
      expect(counts.completed).toBe(1);
    });

    it("devrait retourner des zéros pour une liste vide", () => {
      const counts = countTodos([]);
      expect(counts).toEqual({ total: 0, active: 0, completed: 0 });
    });
  });
});
