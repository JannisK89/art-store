import { test, expect } from '@playwright/test'

test('should open the home page', async ({ page }) => {
  await page.goto('/')

  await expect(page.getByText('Art Store')).toBeVisible()
})
