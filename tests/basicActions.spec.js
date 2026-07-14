const {test, expect} = require('@playwright/test')

test("Basic operations", async({page}) =>{

    await page.goto("https://www.hyrtutorials.com/p/basic-controls.html")
    await page .locator('text="Gender"').scrollIntoViewIfNeeded()

    const femaleRadioButton = await page.locator("#femalerb")
    await femaleRadioButton.click()
    await expect(femaleRadioButton).toBeChecked()

})

test("checkboxes", async({page}) =>{
    
  await page.goto("https://www.hyrtutorials.com/p/basic-controls.html")

    
    await page .locator('text="Register"').scrollIntoViewIfNeeded()

    
    const checkboxs = page.locator("//input[type='checkbox']")
const count= await checkboxs.count();

    for (let i = 0; i < count; i++) {
        const checkbox = checkboxs.nth(i);  
        await checkbox.check();
        await expect(checkbox).toBeChecked();
        
        
    }
  
});
