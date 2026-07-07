const LoginPages = require("../pages/loginPages")
const HomePage = require("../pages/HomePage")
const logOut = require("../pages/LogOut");

test('Logout Application Test', async ({ page }) => {
  
  const loginPages = new LoginPages(page);
 const homePage =new HomePage(page);
    await homePage.clickMenuIcon();
  const logOutPage = new logOut(page);
  await logOutPage.clickSignOutButton();
});