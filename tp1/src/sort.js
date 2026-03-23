export function trier(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("L'argument doit être un tableau");
  }

  for (const element of arr) {
    if (typeof element !== "number" || isNaN(element)) {
      throw new Error("Le tableau ne doit contenir que des nombres");
    }
  }

  return [...arr].sort((a, b) => a - b);
}
