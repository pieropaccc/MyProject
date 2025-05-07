import { expect, test } from '@playwright/test';

test.beforeEach(async({page}) =>{
    await page.goto("https://demoqa.com/checkbox")
}
)

test("Testing checkbox 1" , async({page}) =>{
    await page.getByRole("button" , {name:"Toggle"}).click()
    await page.locator('.rct-checkbox').nth(0).check()
    await page.locator('.rct-checkbox').nth(2).uncheck()
})

test('Looping through checkboxes', async({page}) =>{
    await page.getByRole('button', {name:'Toggle'}).click()

    const AllBoxes = await page.locator('.rct-checkbox')
    for(const Box of await AllBoxes.all()) {
        await Box.check()
        expect(await Box.isChecked()).toBeTruthy()
    }

    for(const Box of await AllBoxes.all()){
        await Box.uncheck()
        expect(await Box.isChecked()).toBeFalsy()
    }
})