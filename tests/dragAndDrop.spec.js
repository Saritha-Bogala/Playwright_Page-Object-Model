const {test, expect } = require('@playwright/test')


test("Drag and Drop test", async ({page}) =>{

    await page.goto("https://www.globalsqa.com/demo-site/draganddrop/")

    const sourceElement = await page.locator("#box6")
    const targetElement = await page.locator("#box106")
    
    //Approach 1
    await sourceElement.hover()
    await page.mouse.down()
    
    await targetElement.hover()
    await page.mouse.up()

    await page.waitForTimeout(5000)
})