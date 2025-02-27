import { Task } from "@serenity-js/core";
import { Click, Enter } from "@serenity-js/web";
import { continueButton, finishButton, firstNameField, lastNameField, postalCodeField } from "../questions/Checkout";

export const fillCheckoutInfoWith = (data: { firstName: string, lastName: string, postalCode: string }): Task =>
    Task.where(`#actor attempts to fill first name, last name and postal code`,
        Enter.theValue(data.firstName).into(firstNameField()),
        Enter.theValue(data.lastName).into(lastNameField()),
        Enter.theValue(data.postalCode).into(postalCodeField()),
        Click.on(continueButton())
    );

export const finishCheckout = (): Task =>
    Task.where(`#actor attempts to finish checkout`,
        Click.on(finishButton())
    );