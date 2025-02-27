import { PageElement, Text } from "@serenity-js/web";
import { byDataTest } from "../../Utils";

export const firstNameField = () =>
    PageElement
        .located(byDataTest('firstName'))
        .describedAs('first name input');

export const lastNameField = () =>
    PageElement
        .located(byDataTest('lastName'))
        .describedAs('last name input');

export const postalCodeField = () =>
    PageElement
        .located(byDataTest('postalCode'))
        .describedAs('postal code input');

export const continueButton = () =>
    PageElement
        .located(byDataTest('continue'))
        .describedAs('continue button');

export const finishButton = () =>
    PageElement
        .located(byDataTest('finish'))
        .describedAs('finish button');

export const orderConfirmed = () => 
    PageElement
        .located(byDataTest('complete-header'))
        .describedAs('order confirmed message');

export const backHomeButton = () =>
    PageElement
        .located(byDataTest('back-to-products'))
        .describedAs('back home button');