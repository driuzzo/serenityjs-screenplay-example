import { Locator, Page } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly addToCartButton: Locator;
  readonly removeFromCartButton: Locator;
  readonly cartBadge: Locator;
  readonly inventoryItemName: Locator;
  readonly itemPrice: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addToCartButton = page.getByRole('button', { name: 'Add to cart' });
    this.removeFromCartButton = page.getByRole('button', { name: 'Remove' });
    this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
    this.inventoryItemName = page.locator('[data-test="inventory-item-name"]');
    this.itemPrice = page.locator('[data-test="inventory-item-price"]');
  }

  async addToCart(productName: string) {
    const productAddToCartButton = this.page.locator(
      `.inventory_item:has(.inventory_item_name:text-is("${productName}")) .btn_inventory`
    );
    await productAddToCartButton.click();
  }

  async removeFromCart(){
    await this.removeFromCartButton.first().click();
  } 
}