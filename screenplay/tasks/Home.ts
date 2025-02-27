import { Answerable, Task } from "@serenity-js/core";
import { Click, PageElement } from "@serenity-js/web";
import { addToCartButton, logoutButton, menuButton, removeFromCartButton } from "../questions/Home";

export const openMenu = (): Task =>
    Task.where(`#actor attempts to open the menu`,
        Click.on(menuButton()),
    );

export const logout = (): Task => 
    Task.where(`#actor attempts to logout`,
        Click.on(logoutButton()),
    );

export const select = (item: Answerable<PageElement>): Task => 
    Task.where(`#actor attempts to pick`,
        Click.on(item),
    );

export const addToCart = (item: string): Task =>
    Task.where(`#actor attempts to add ${item} to cart`,
        Click.on(
            addToCartButton(item)
        ),
    );

export const removeFromCart = (item: string): Task =>
    Task.where(`#actor attempts to remove ${item} from cart`,
        Click.on(
            removeFromCartButton(item)
        ),
    );