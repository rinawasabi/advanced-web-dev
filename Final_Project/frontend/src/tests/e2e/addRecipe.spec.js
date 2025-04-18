import { test, expect } from '@playwright/test';

test('user can add a new recipe successfully', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Login flow
  await page.fill('input[placeholder="Name"]', 'PlaywrightUser');
  await page.keyboard.press('Enter');

  // Navigate to Add Recipe page
  await page.click('text=Add Recipe');
  await expect(page).toHaveURL(/.*add/);

  // Fill the form fields
  await page.fill('input[type="text"]', 'Playwright Test Recipe');
  await page.fill('textarea[name="ingredients"]', 'Test Ingredient 1\nTest Ingredient 2');
  await page.fill('textarea[name="instructions"]', 'Step 1: Do something\nStep 2: Done');

  // Click Save
  await page.click('button:has-text("Save")');

  // Check if redirected to /home
  await expect(page).toHaveURL(/.*home/);

  // Check if the new recipe appears
  await expect(page.locator('text=Playwright Test Recipe')).toBeVisible();
});
