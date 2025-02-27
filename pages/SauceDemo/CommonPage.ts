import { Locator, Page } from '@playwright/test';

export class CommonPage {
  readonly page: Page;
  readonly pageTitle: Locator


  constructor(page: Page) {
    this.page = page;
    this.pageTitle = page.locator('[data-test="title"]');
  }

}