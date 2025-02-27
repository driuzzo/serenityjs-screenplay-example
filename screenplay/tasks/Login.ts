import { Task } from "@serenity-js/core";
import { Click, Enter } from "@serenity-js/web";
import { loginButton, passwordField, usernameField } from "../questions/Login";

export const loginWith = (data: { username: string, password: string }) =>
    Task.where(`#actor attempts to login with ${ data.username } and ${ data.password }`,
        Enter.theValue(data.username).into(usernameField()),
        Enter.theValue(data.password).into(passwordField()),
        Click.on(loginButton()),
    );