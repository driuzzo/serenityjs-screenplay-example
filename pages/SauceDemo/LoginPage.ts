import { Locator, Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly appLogo: Locator;
  readonly loginFailMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.getByPlaceholder('Username');
    this.passwordInput = page.getByPlaceholder('password');
    this.loginButton = page.getByText('Login');
    this.appLogo = page.locator('.app_logo');
    this.loginFailMessage = page.locator('[data-test="error"]')
  }

  /*async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }*/

  async login(username: string, password: string ) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  
}