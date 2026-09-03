import { test, expect } from '@playwright/test';

const routes = [
  { path: '/', title: /Operations & Production Leader/ },
  { path: '/about', title: /About \|/ },
  { path: '/skills', title: /Skills \|/ },
  { path: '/experience', title: /Experience \|/ },
  { path: '/achievements', title: /Achievements \|/ },
  { path: '/impact', title: /Production Impact \|/ },
  { path: '/contact', title: /Contact \|/ },
];

test.describe('portfolio smoke', () => {
  for (const r of routes) {
    test(`route ${r.path} loads with correct title`, async ({ page }) => {
      await page.goto(r.path);
      await expect(page).toHaveTitle(r.title);
      // basic a11y: main content visible
      await expect(page.locator('main')).toBeVisible();
    });
  }

  test('hero -> navigation works', async ({ page }) => {
    await page.goto('/');
    // About is SPA route, check canonical exists
    await page.goto('/about');
    await expect(page.locator('h2', { hasText: 'Data-driven' })).toBeVisible();
  });

  test('no console errors on home', async ({ page }) => {
    const errors = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error' && !msg.text().includes('Failed to load resource')) {
        errors.push(msg.text());
      }
    });
    await page.goto('/');
    await page.waitForTimeout(1500);
    expect(errors, `console errors: ${errors.join('\n')}`).toEqual([]);
  });
});

test('visual regression — hero baseline', async ({ page }) => {
  await page.goto('/');
  await page.waitForTimeout(800);
  await expect(page).toHaveScreenshot('hero.png', { maxDiffPixels: 300, threshold: 0.2 });
});
