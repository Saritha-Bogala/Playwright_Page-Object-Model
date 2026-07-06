const {test, expect} = require('@playwright/test');
const LoginPages = require("../pages/loginPages")
const HomePage = require("../pages/HomePage")
const testData = require('../testdata/loginData.json');






test('Login Application Test', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://freelance-learn-automation.vercel.app/login');
  const loginPages = new LoginPages(page);
  await loginPages.loginToApplication(testData.validUser.username, testData.validUser.password);
 await page.waitForTimeout(3000);

  const homePage =new HomePage(page);
  await homePage.verifyHomePageIsDisplayed();
  await homePage.clickMenuIcon();
  await homePage.clickHome();

  
 
});
