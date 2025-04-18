// Filters a list of recipes based on a search query
function filterRecipes(recipes, query) {
  return recipes.filter(
    (r) =>
      r.title.toLowerCase().includes(query.toLowerCase()) ||
      r.ingredients.toLowerCase().includes(query.toLowerCase())
  );
}

import { describe, it, expect } from "vitest";

describe("filterRecipes", () => {
  // Should return recipes that match the query in the title
  it("filters recipes by title", () => {
    const recipes = [
      { title: "Curry", ingredients: "meat and rice" },
      { title: "Salad", ingredients: "lettuce and tomato" },
    ];
    const result = filterRecipes(recipes, "salad");
    expect(result).toHaveLength(1);
    expect(result[0].title).toBe("Salad");
  });

  // Should return recipes that match the query in the ingredients
  it("filters recipes by ingredients", () => {
    const recipes = [
      { title: "Pasta", ingredients: "cheese and tomato" },
      { title: "Toast", ingredients: "butter and jam" },
    ];
    const result = filterRecipes(recipes, "cheese");
    expect(result).toHaveLength(1);
    expect(result[0].title).toBe("Pasta");
  });
});
