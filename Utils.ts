import { By } from "@serenity-js/web";

export const byDataTest = (value: string) =>
        By.css(`[data-test="${value}"]`)
        .describedAs(`element with data-test="${value}"`);

export const formatItemName = (itemName: string) => {
        return itemName.toLowerCase().replace(/\s+/g, '-');
        };