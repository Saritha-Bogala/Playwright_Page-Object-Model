const {test,expect}= require('@playwright/test')

test("Upload test", async({page}) =>{
    await page.goto("https://the-internet.herokuapp.com/upload")
    await page.setInputFiles("#file-upload", "./UploadFiles/image1.jpg")
    await page.click("#file-submit")
    await expect(page.locator("text=File Uploaded!")).toHaveText("File Uploaded!")
    

})

test("Download file", async({page}) =>{
    await page.goto("https://the-internet.herokuapp.com/download")
    
    const downloadPromise = page.waitForEvent('download');
    await page.click("text=file.json")
        
    // Get the download object
    const download = await downloadPromise;

    // Verify the filename
    expect(download.suggestedFilename()).toBe('file.json');

    // Save the file
    const filePath = `downloads/${download.suggestedFilename()}`;
    await download.saveAs(filePath);

    

})