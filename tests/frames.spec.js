const{test, expect} = require('@playwright/test');

test("Frame handling test", async({page}) =>{
    await page.goto("https://ui.vision/demo/webtest/frames/")
    
    const allframes = await page.frames()
    console.log("Total number of frames in the page: " + allframes.length)


    //const frame1= await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
   // await frame1.fill("[name='mytext1']", "Hello")
  const frame1= await page.frameLocator("frame[src='frame_1.html']").locator("[name='mytext1']")
  await frame1.fill("Hello")
  await page.waitForTimeout(3000)
    
  const frame3= await page.frameLocator("[src='frame_3.html']")
  await frame3.locator("[name='mytext3']").fill("Welcome")
  await page.waitForTimeout(3000)
  //const childframes= await frame3.childframes()
  //childframes[0].getByLabel("Hi, I am the UI.Vision IDE").check();
  await page.waitForTimeout(3000)

})