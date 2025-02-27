import { Task } from "@serenity-js/core";
import { Click } from "@serenity-js/web";
import { shoppingCart } from "../questions/Home";
import { checkoutButton } from "../questions/Cart";

export const openCart = (): Task =>
    Task.where(`#actor attempts to open cart page`,
        Click.on(shoppingCart())
    );

export const startCheckout = (): Task =>
    Task.where(`#actor attempts to open checkout page`,
        Click.on(checkoutButton())
    );