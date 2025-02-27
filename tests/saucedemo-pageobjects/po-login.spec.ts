import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/SauceDemo/LoginPage';
import { HomePage } from '../../pages/SauceDemo/HomePage';

test.describe('Sauce Demo - Login Scenarios - Page Objects', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    page.goto('https://www.saucedemo.com/');
  });

  test('should login with valid credentials', async ({ page }) => {
    const homePage = new HomePage(page);
    
    await loginPage.login('standard_user', 'secret_sauce');

    await expect(loginPage.appLogo).toHaveText('Swag Labs');
    await expect(homePage.inventoryItem).toHaveCount(6);
  });

  test('should fail login with invalid credentials', async ({ }) => {
    
    await loginPage.login('invalid_user', 'invalid_password');

    await expect(loginPage.loginFailMessage).toBeVisible();

  });
  
  test('should logout successfully', async ({ page }) => {

    const homePage = new HomePage(page);

    await loginPage.login('standard_user', 'secret_sauce');
    
    await homePage.openMenu();
    
    await homePage.logoutClick();
    
    await expect(loginPage.loginButton).toBeVisible();    
  }
);
});