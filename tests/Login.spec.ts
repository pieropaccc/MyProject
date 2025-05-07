import { expect, test } from '@playwright/test';
 import Login from '../clases/login';

test.beforeEach(async({page}) =>{
    await page.goto("https://practice.expandtesting.com/login")

})

test('Login successful', async({page}) =>{
    await page.getByRole('textbox',{name:'Username'}).fill("practice")
    await page.locator('.mb-3 #password').fill("SuperSecretPassword!")
    await page.getByRole('button',{name:'Login'}).click()
    await page.waitForURL('https://practice.expandtesting.com/secure');
    const URL = page.url()
    expect(URL).toBe('https://practice.expandtesting.com/secure')
    const message = page.locator('text="You logged into a secure area!"');
    await expect(message).toBeVisible();

})

test('Incorrect Username', async({page}) =>{
    const Username = await page.getByRole('textbox',{name:'Username'})
    const Password = await page.locator('.mb-3 #password')
    const LoginButton = await page.getByRole('button',{name:'Login'})
    const InvalidMessage = await page.getByText('Your username is invalid!')
    
    await Username.fill('Wrong')
    await Password.fill("SuperSecretPassword!")
    await LoginButton.click()
    await page.waitForURL('https://practice.expandtesting.com/login');
    await expect(InvalidMessage).toBeVisible()

})

test('Incorrect Password', async ({ page }) => {
 const loginPage = new Login        (page);

 await loginPage.login('practice', 'WrongPassword!');
 await page.getByText("Your password is invalid!")
     });