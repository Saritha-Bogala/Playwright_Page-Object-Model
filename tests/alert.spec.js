const {test, expect } = require('@playwright/test')


test("Alert", async ({page}) =>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    page.on('Dialog', async dialog => {

        expect (dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('I am an alert box!')
        
    })
})