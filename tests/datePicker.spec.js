const {test,expect}= require('@playwright/test')

test('Date Picker test', async ({page}) =>
{
    await page.goto('https://jqueryui.com/datepicker/')
    
    const frame1= page.frameLocator("//iframe[@class='demo-frame']")
    await frame1.locator('#datepicker').click()
    await frame1.getByText('Next').click()
    await frame1.getByText('29').click()
 
})