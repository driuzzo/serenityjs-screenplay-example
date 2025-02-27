import test, { expect } from "@playwright/test";
import { LoginPage } from "../../pages/SauceDemo/LoginPage";
import { HomePage } from "../../pages/SauceDemo/HomePage";
import { InventoryPage } from "../../pages/SauceDemo/InventoryPage";
import { CartPage } from "../../pages/SauceDemo/CartPage";
import { CommonPage } from "../../pages/SauceDemo/CommonPage";
import { CheckoutPage } from "../../pages/SauceDemo/CheckoutPage";
import { PRODUCT } from "../../test-data";

test.describe('Sauce Demo - Login Scenarios - Page Objects', () => {
  let loginPage: LoginPage;
  let homePage: HomePage;
  let inventoryPage: InventoryPage;
  let cartPage: CartPage;
  let checkoutPage: CheckoutPage;
  let commonPage: CommonPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);
    inventoryPage = new InventoryPage(page);
    cartPage = new CartPage(page);
    checkoutPage = new CheckoutPage(page);
    commonPage = new CommonPage(page);    
    
    await page.goto('https://www.saucedemo.com/');
    await loginPage.login('standard_user', 'secret_sauce');
  
    expect(loginPage.appLogo).toHaveText('Swag Labs');
    expect(homePage.inventoryItem).toHaveCount(6);
  });

  test('orders a product', async () => {
  await inventoryPage.addToCart(PRODUCT.name);
  await expect(inventoryPage.cartBadge).toHaveText('1');

  await cartPage.openCart();
  await expect(commonPage.pageTitle).toHaveText('Your Cart');
  await expect(cartPage.checkoutButton).toBeVisible();

  await cartPage.startCheckout();
  await expect(commonPage.pageTitle).toHaveText('Checkout: Your Information');

  await checkoutPage.fillCheckoutInfo('John', 'Doe', '99999-999');
  await expect(commonPage.pageTitle).toHaveText('Checkout: Overview');
  await expect(inventoryPage.inventoryItemName).toHaveText(PRODUCT.name);
  await expect(inventoryPage.itemPrice).toHaveText(PRODUCT.price);

  await checkoutPage.finishCheckout();
  await expect(commonPage.pageTitle).toHaveText('Checkout: Complete!');
  await expect(checkoutPage.orderConfirmed).toHaveText('Thank you for your order!');
  await expect(checkoutPage.backHomeButton).toBeVisible();
  
  });

  test('should put an item into cart and then removes it', async () => {
    
    await inventoryPage.addToCart('Sauce Labs Backpack');
    await expect(inventoryPage.cartBadge).toHaveText('1');
    
    await inventoryPage.removeFromCart();
    await expect(inventoryPage.cartBadge).not.toBeVisible();
      
    });
});
