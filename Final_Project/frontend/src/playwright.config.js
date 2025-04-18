import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests', 
  testMatch: '**/*.spec.js',
  use: {
    baseURL: 'http://localhost:3000',
    headless: true,
    screenshot: 'only-on-failure',
  },
});
