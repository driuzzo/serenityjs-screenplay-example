import { By, PageElement, PageElements, Text } from "@serenity-js/web";
import { Answerable, QuestionAdapter } from "@serenity-js/core";
import { equals, includes } from "@serenity-js/assertions";
import { byDataTest, formatItemName } from "../../Utils";

export const appLogo = () =>
    PageElement
        .located(By.css('.app_logo'))
        .describedAs('app logo');

export const menuButton = () => 
    PageElement
        .located(By.id('react-burger-menu-btn'))
        .describedAs('menu button');

export const logoutButton = () =>    
    PageElement
        .located(byDataTest('logout-sidebar-link'))
        .describedAs('logout button');

export const addToCartButton = (itemName: string) =>
    PageElement
        .located(byDataTest(`add-to-cart-${formatItemName(itemName)}`))
        .describedAs(`add to cart button from ${itemName}`);

export const removeFromCartButton = (itemName: string) =>
    PageElement
        .located(byDataTest(`remove-${formatItemName(itemName)}`))
        .describedAs(`remove ${itemName} from cart button`);

export const inventoryList = () =>
    PageElements
        .located(byDataTest('inventory_list'))
        .describedAs('inventory list');

export const inventoryItems = () =>
    PageElements
        .located(By.css('[data-test="inventory-item"]'))
        .describedAs('inventory item');

export const inventoryItem = (itemName: Answerable<string>) =>
    inventoryItems()
        .where(Text, includes(itemName))
        .first()
        .describedAs(`an item called ${itemName}`);

export const itemNames = () =>
    Text.ofAll(
        PageElements
            .located(byDataTest('inventory-item-name'))
            .of(PageElement.located(By.css('.inventory_item')))
            .describedAs('names of inventory items')
    );

export const itemCalled = (itemName: Answerable<string>) =>
    PageElements
        .located(byDataTest('inventory-item-name'))
        .where(Text, equals(itemName))
        .first()
        .describedAs(`item called ${itemName}`) as QuestionAdapter<PageElement>;
        
export const cartBadge = () =>
    PageElement
        .located(byDataTest('shopping-cart-badge'))
        .describedAs('shopping cart badge');

export const shoppingCart = () =>
    PageElement
        .located(byDataTest('shopping-cart-link'))
        .describedAs('shopping cart');

export const itemPrice = () => 
    Text.of(PageElement
        .located(byDataTest('inventory-item-price')))
        .describedAs('item price')