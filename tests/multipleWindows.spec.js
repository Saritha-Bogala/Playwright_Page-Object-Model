const {test, expect, chromium} = require('@playwright/test')

test ("Multiple windows", async() => {
    
    const browser = await chromium.launch()
    const context = await browser.newContext()

    const page1 = await context.newPage()
    const page2 =await context.newPage()
    
    //await page1.goto('https://orangehrm.com/')
  // await expect(page1).toHaveTitle('OranageHRM')


    await page2.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
//await expect(page2).toHaveTitle('OranageHRM')
   
const pagePromise=context.waitForEvent('page')
await page2.locator('//a[normalize-space()="OrangeHRM, Inc"]').click()


const newPage=await pagePromise;
await expect(newPage).toHaveTitle("OrangeHRM: All in One HR Software for Businesses | OrangeHRM")

await page1.waitForTimeout(3000)
await newPage.waitForTimeout(3000)

await browser.close()

})