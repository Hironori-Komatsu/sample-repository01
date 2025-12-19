import { test, expect } from '@playwright/test'
import { executionAsyncId } from 'node:async_hooks';

test('Bootstrap Buttonsページが表示される', async({page}) => {
    await page.goto('https://getbootstrap.com/docs/5.3/components/buttons/');

    //await expect(page).toHaveTitle(/Buttons/i);

    await expect(
    page.locator('main').getByRole('heading', { level: 1, name: 'Buttons' })
    ).toBeVisible();
        
    const primary = page.getByRole('button', { name: /Primary/i }).first();

    await expect(primary).toBeVisible();
    await expect(primary).toBeEnabled();

    await primary.click();
    await expect(page).toHaveURL(/buttons/);


});

