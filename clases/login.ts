import { Page, Locator } from '@playwright/test';

class LoginPage {
  private page: Page;
  private usernameInput: Locator;
  private passwordInput: Locator;
  private loginButton: Locator;
  
  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.getByRole('textbox', { name: 'Username' });
    this.passwordInput = page.locator('.mb-3 #password');
    this.loginButton = page.getByRole('button', { name: 'Login' });
   
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
    await this.page.waitForURL('https://practice.expandtesting.com/login');
  }
  

}

export default LoginPage;