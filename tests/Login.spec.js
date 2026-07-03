import {test,expect} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';


test('Login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.gotoLoginPage()
    await loginPage.login('pavanol', 'test@123')
//   await page.goto('https://demoblaze.com/index.html');
//     await page.locator('#login2').click();
//     await page.locator('#loginusername').fill('testuser');
//     await page.locator('#loginpassword').fill('testpassword');
//     await page.locator("button[onclick='logIn()']").click();
//     await expect(page.locator('#nameofuser')).toHaveText('Welcome testuser');
})
