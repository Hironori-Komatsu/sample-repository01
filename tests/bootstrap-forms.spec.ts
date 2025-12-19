import { test, expect} from '@playwright/test'

test('Bootstrap Formsページが表示される', async({page}) => {
    await page.goto('https://getbootstrap.com/docs/5.3/components/buttons/')

    await expect(
        page.locator('main').getByRole('heading', { level: 1, name: /Forms/i })
    ).toBeVisible();
});


