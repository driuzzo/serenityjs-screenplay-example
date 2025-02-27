import { PageElement, Text } from "@serenity-js/web";
import { byDataTest } from "../../Utils";

export const pageTitle = () =>
    Text.of(PageElement
        .located(byDataTest('title')))
        .describedAs('cart page title');

export const inventoryItemName = () => 
    Text.of(PageElement
        .located(byDataTest('inventory-item-name')))
        .describedAs('inventory item name');