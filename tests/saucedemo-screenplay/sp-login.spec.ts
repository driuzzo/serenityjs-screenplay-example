import { Ensure, equals } from '@serenity-js/assertions';
import { test } from '@serenity-js/playwright-test';
import { isVisible, Navigate, Page } from '@serenity-js/web';
import { chromium } from '@playwright/test';
import { BrowseTheWebWithPlaywright } from '@serenity-js/playwright';

import { loginWith } from '../../screenplay/tasks/Login';
import { loginFailMessage, loginScreen } from '../../screenplay/questions/Login';
import { logout, openMenu } from '../../screenplay/tasks/Home';
import { appLogo, inventoryItems } from '../../screenplay/questions/Home';
import { invalidCredentials, validCredentials } from '../../test-data';


test.describe('Login Scenarios', () => {

  test.beforeEach(async ({ actor }) => {
    const browse = await chromium.launch({ headless: false });
    await actor.whoCan(BrowseTheWebWithPlaywright.using(browse))
      .attemptsTo(
        Navigate.to('https://www.saucedemo.com/'),
        Ensure.that(Page.current().title(), equals('Swag Labs')),
      )
    });
  
  test('should login with valid credentials', async ({ actor }) => {
    await actor
      .attemptsTo(

        loginWith(validCredentials()),
        
        Ensure.that(appLogo(), isVisible()),
        Ensure.that(inventoryItems().count(), equals(6))
      )
    });

    test('should fail login with invalid credentials', async ({ actor }) => {
      await actor
        .attemptsTo(
  
          loginWith(invalidCredentials()),
          
          Ensure.that(loginFailMessage(), isVisible())
        )
    });

    test('should logout successfully', async ({ actor }) => {
      await actor
        .attemptsTo(
          
          loginWith(validCredentials()),  
          
          openMenu(),          
          
          logout(),          
          
          Ensure.that(loginScreen(), isVisible())
        )
    }
  );
});


