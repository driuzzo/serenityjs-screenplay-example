import { Locator, Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly inventoryItem: Locator;
  readonly menu: Locator
  readonly logoutButton: Locator;


  constructor(page: Page) {
    this.page = page;
    this.inventoryItem = page.locator('.inventory_item');
    this.menu = page.getByText('Open Menu');
    this.logoutButton = page.locator('#logout_sidebar_link');
  }

  async openMenu() {
    await this.menu.click();
  }

  async logoutClick() {
    await this.logoutButton.click();
  }
  
}