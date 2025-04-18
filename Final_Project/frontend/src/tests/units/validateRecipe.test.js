// Validates that a recipe object has non-empty (non-whitespace) values 
function validateRecipe(recipe) {
    return (
      recipe.title?.trim() &&
      recipe.ingredients?.trim() &&
      recipe.instructions?.trim()
    );
  }
  
  import { describe, it, expect } from "vitest";
  
  describe("validateRecipe", () => {
    // Should return true if all required fields are properly filled
    it("returns true when all fields are filled", () => {
      const recipe = {
        title: "Omelette",
        ingredients: "eggs, salt, pepper",
        instructions: "1. Beat eggs\n2. Fry\n3. Serve",
      };
      expect(validateRecipe(recipe)).toBeTruthy();
    });
  
    // Should return false if title is empty
    it("returns false when title is empty", () => {
      const recipe = {
        title: "",
        ingredients: "flour, sugar",
        instructions: "Mix and bake",
      };
      expect(validateRecipe(recipe)).toBeFalsy();
    });
  
    // Should return false if ingredients are just whitespace
    it("returns false when ingredients are missing", () => {
      const recipe = {
        title: "Bread",
        ingredients: "   ",
        instructions: "Bake for 30 mins",
      };
      expect(validateRecipe(recipe)).toBeFalsy();
    });
  
    // Should return false if instructions are empty
    it("returns false when instructions are missing", () => {
      const recipe = {
        title: "Salad",
        ingredients: "lettuce, tomato",
        instructions: "",
      };
      expect(validateRecipe(recipe)).toBeFalsy();
    });
  });
  