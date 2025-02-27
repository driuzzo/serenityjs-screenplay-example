import { Task } from "@serenity-js/core"
import { Enter, Key, Press } from "@serenity-js/web"
import { todoInput } from "../questions/Todo"

export const add = (itemName: string): Task =>
    Task.where(`#actor attempts to add an item called ${itemName}`,
        Enter.theValue(itemName).into(todoInput()),
        Press.the(Key.Enter).in(todoInput()),       
    );