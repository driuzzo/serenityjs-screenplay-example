import { Locator, Page } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly cartButton: Locator
  readonly checkoutButton: Locator;


  constructor(page: Page) {
    this.page = page;
    this.cartButton = page.locator('[data-test="shopping-cart-link"]');
    this.checkoutButton = page.getByText('Checkout');
  }
  
  async openCart() {
    await this.cartButton.click();
  }

  async startCheckout() {
    await this.checkoutButton.click();
  }

}