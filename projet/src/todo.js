let nextId = 1;

export function createTodo(title) {
  return { id: nextId++, title, completed: false };
}

export function addTodo(todos, title) {
  if (!title || title.trim() === "") {
    throw new Error("Le titre ne peut pas être vide");
  }
  return [...todos, createTodo(title.trim())];
}

export function removeTodo(todos, id) {
  const filtered = todos.filter((todo) => todo.id !== id);
  if (filtered.length === todos.length) {
    throw new Error("Todo non trouvé");
  }
  return filtered;
}

export function toggleTodo(todos, id) {
  let found = false;
  const updated = todos.map((todo) => {
    if (todo.id === id) {
      found = true;
      return { ...todo, completed: !todo.completed };
    }
    return todo;
  });
  if (!found) {
    throw new Error("Todo non trouvé");
  }
  return updated;
}

export function filterTodos(todos, status) {
  if (status === "active") return todos.filter((t) => !t.completed);
  if (status === "completed") return todos.filter((t) => t.completed);
  return todos;
}

export function countTodos(todos) {
  return {
    total: todos.length,
    active: todos.filter((t) => !t.completed).length,
    completed: todos.filter((t) => t.completed).length,
  };
}

export function resetId() {
  nextId = 1;
}
