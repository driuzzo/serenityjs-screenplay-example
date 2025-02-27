import { Ensure, equals, not } from '@serenity-js/assertions';
import { test } from '@serenity-js/playwright-test';
import { isVisible, Navigate, Text } from '@serenity-js/web';
import { chromium } from '@playwright/test';
import { BrowseTheWebWithPlaywright } from '@serenity-js/playwright';

import { loginWith } from '../../screenplay/tasks/Login';
import { inventoryItemName, pageTitle } from '../../screenplay/questions/Common';
import { addToCart, removeFromCart } from '../../screenplay/tasks/Home';
import { appLogo, cartBadge, inventoryItems, itemPrice } from '../../screenplay/questions/Home';
import { openCart, startCheckout} from '../../screenplay/tasks/Cart';
import { checkoutButton } from '../../screenplay/questions/Cart';
import { fillCheckoutInfoWith, finishCheckout } from '../../screenplay/tasks/Checkout';
import { backHomeButton, orderConfirmed } from '../../screenplay/questions/Checkout';
import { personalData, PRODUCT, sauceDemoWebsite, validCredentials } from '../../test-data';

test.describe('Order Scenarios', async () => {
    
    test.beforeEach(async ({actor}) => {
        const browser = await chromium.launch({headless: false})      
        
        await actor
                .whoCan(BrowseTheWebWithPlaywright.using(browser))
                .attemptsTo(
                    Navigate.to(sauceDemoWebsite),

                    loginWith(validCredentials()),

                    Ensure.that(appLogo(), isVisible()),
                    Ensure.that(inventoryItems().count(), equals(6))            
                )
    });

    test('orders a product', async ({actor})=> {
        await actor.attemptsTo(
            
            addToCart(PRODUCT.name),            
            Ensure.that(Text.of(cartBadge()), equals('1')),

            openCart(),
            Ensure.that(pageTitle(), equals('Your Cart')),
            Ensure.that(checkoutButton(), isVisible()),

            startCheckout(),
            Ensure.that(pageTitle(), equals('Checkout: Your Information')),

            fillCheckoutInfoWith(personalData()),
            Ensure.that(pageTitle(), equals('Checkout: Overview')),
            Ensure.that(inventoryItemName(), equals(PRODUCT.name)),
            Ensure.that(itemPrice(), equals(PRODUCT.price)),

            finishCheckout(),
            Ensure.that(pageTitle(), equals('Checkout: Complete!')),
            Ensure.that(Text.of(orderConfirmed()), equals('Thank you for your order!')),
            Ensure.that(backHomeButton(), isVisible())
        )
    });

    test('should put an item into cart and then removes it', async ({ actor }) => {
        await actor.attemptsTo(
            
            addToCart(PRODUCT.name),
            Ensure.that(Text.of(cartBadge()), equals('1')),
            
            removeFromCart(PRODUCT.name),
            Ensure.that(cartBadge(), not(isVisible()))
        )
    });    
});