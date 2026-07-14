const {test, expect} = require('@playwright/test')

test("Tables test", async ({page}) =>
{
    await page.goto('https://testautomationpractice.blogspot.com/')

    const staticTable = await page.locator("//table[@name='BookTable']")
    
    const columns = await staticTable.locator('tbody tr th')
    console.log("Number of Columns: ", await columns.count())
    expect(await columns.count()).toBe(4)
    

    const rows = await staticTable.locator('tbody tr')
    console.log("Number of rows: ", await rows.count())
    expect(await rows.count()).toBe(7)
    const value1= await rows.nth(1).locator('//td[1]').textContent();
    console.log(value1)
})

test.only('Dynamic web table', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    

    const dynamicTable= await page.locator('#taskTable')

    const header =  await dynamicTable.locator('#headers').innerText()
    console.log('Header test:', header)

    const rows = await dynamicTable.locator('tbody tr')

    for(let i=1; i<await rows.count(); i++)
    {
        
        const tabledata= await rows.nth(i).locator('//td[1]').innerText()
        // page.waitForTimeout(5000)  
        console.log(tabledata)
    }


})