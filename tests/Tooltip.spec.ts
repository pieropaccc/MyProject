import { expect, test } from '@playwright/test';

test.beforeEach(async({page}) =>{
    await page.goto('https://demoqa.com/tool-tips')
})

test('tooltip button testing 1', async({page}) =>{

    const TooltipButton = await page.getByRole("button" , {name:"Hover me to see"})

    await TooltipButton.hover()
    
   // F12, ir pestaña "Sources", apretar F8 para pausar ejecucion y obtener locator 
    const TooltipContent = await page.locator('.tooltip-inner').textContent()
    await expect(TooltipContent).toEqual("You hovered over the Button") 


})