import { test, expect } from '@playwright/test';

test('login flow works correctly', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Fill in the login input
  await page.fill('input[placeholder="Name"]', 'User');

  // Press Enter or click Login button
  await page.keyboard.press('Enter');

  //Check if it was redirected to /home
  await expect(page).toHaveURL(/.*home/);

  // Expect redirect to home page with greeting or nav
  await expect(page.locator('text=What should we cook')).toBeVisible();
});
