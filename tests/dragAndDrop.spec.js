const {test, expect } = require('@playwright/test')


test("Drag and Drop test", async ({page}) =>{

    await page.goto("https://www.globalsqa.com/demo-site/draganddrop/")

    const frame1 = await page.frameLocator("//iframe[@class='demo-frame']").first()
 //Approach 1
    await frame1.getByText('High Tatras').first().hover()     
    await page.mouse.down()
    await frame1.locator("#trash").hover()
        await page.mouse.up()

    await page.waitForTimeout(5000)
})