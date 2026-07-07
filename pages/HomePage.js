const { expect } = require("@playwright/test");
module.exports=
class HomePage{
    constructor(page)
    {
        this.page = page;
        this.verifyHomePage = "//span[text()='Manage']";
        this.menuicon = "img[alt='menu']";
        this.home = "//div[normalize-space()='Home']";
    
    }
async verifyHomePageIsDisplayed(){
        await expect(this.page.locator(this.verifyHomePage)).toBeVisible();
    }

    async clickMenuIcon(){
        await this.page.click(this.menuicon)
    }

    async clickHome(){
        await this.page.click(this.home)
    }
}