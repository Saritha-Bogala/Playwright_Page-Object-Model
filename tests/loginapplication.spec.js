const {test, expect} = require('@playwright/test');

const LoginPages = require("../pages/loginPages")
const HomePage = require("../pages/HomePage")

const testData = require('../testdata/Logindata.json');


//test('Login Application Test', async ({ page }) => {
  
  for(const user of testData.users){
   
    test(`Login Test for ${user.username}`, async ({ page }) => {
      
      //Open Application
      await page.goto('https://freelance-learn-automation.vercel.app/login');
      
      const loginPages = new LoginPages(page);
      
      //Validate login page
      await expect(page).toHaveURL(/login/);

      await loginPages.loginToApplication(user.username, user.password);
      await loginPages.clickLoginButton();
      await page.waitForTimeout(3000);

      if(user.username === testData.users[0].username && user.password === testData.users[0].password){
      
        await expect(page).toHaveTitle('Learn Automation Courses')
        const homePage =new HomePage(page);
        await homePage.verifyHomePageIsDisplayed();
        await homePage.clickMenuIcon();
        await homePage.clickHome();
      }

      else{
        const errorMessage = await loginPages.getErrorMessage();
        expect(errorMessage).toBe("Email and Password Doesn't match");
      }
 
  
    });
  }  
 
