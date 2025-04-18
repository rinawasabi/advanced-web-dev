// Function to convert snake_case keys to camelCase
function convertRecipeKeys(recipe) {
    return {
        ...recipe,
        userAdded: recipe.user_added,
        userId: recipe.user_id,
    };
}

import { describe, it, expect } from "vitest";

// Checks if the conversion correctly maps user_added → userAdded and user_id → userId
describe("convertRecipeKeys", () => {
    it("converts snake_case keys to camelCase", () => {
        const input = {
            id: 1,
            title: "Soup",
            user_added: true,
            user_id: 123,
        };

        const result = convertRecipeKeys(input);

        expect(result.userAdded).toBe(true);
        expect(result.userId).toBe(123);
        expect(result.user_added).toBeDefined();
    });
});
