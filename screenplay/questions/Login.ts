import { PageElement } from "@serenity-js/web";
import { byDataTest } from "../../Utils";

export const usernameField = () =>
    PageElement
        .located(byDataTest('username'))
        .describedAs('username input');

export const passwordField = () =>
    PageElement
        .located(byDataTest('password'))
        .describedAs('password input');

export const loginButton = () =>
    PageElement
        .located(byDataTest('login-button'))
        .describedAs('login button');

export const loginFailMessage = () =>
    PageElement
        .located(byDataTest('error-button'))
        .describedAs('error message');

export const loginScreen = () =>
    PageElement
        .located(byDataTest('login-container'))
        .describedAs('login fields');