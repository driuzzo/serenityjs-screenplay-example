import { test } from "@serenity-js/playwright-test";
import { Navigate, Value } from "@serenity-js/web";
import { add } from "../screenplay/tasks/Todo";
import { TODO_ITEMS } from "../test-data";
import { itemNames, todoInput } from "../screenplay/questions/Todo";
import {Ensure, equals } from "@serenity-js/assertions";

test.beforeEach(async ({ actor }) => {
    await actor.attemptsTo(
        Navigate.to('https://demo.playwright.dev/todomvc')
    )
});

test.describe('New Todo', () => {
    test('should allow me to add todo items', async ({ actor }) => {
        await actor.attemptsTo(
            
            add(TODO_ITEMS[0]),
            Ensure.that(itemNames(), equals([TODO_ITEMS[0]])),

            add(TODO_ITEMS[1]),
            Ensure.that((itemNames()), equals([TODO_ITEMS[0], TODO_ITEMS[1]])),
        )
    })
    test('should clear text input field when an item is added', async ({ actor }) => {
        await actor.attemptsTo(
            
            add(TODO_ITEMS[0]),
            Ensure.that(Value.of(todoInput()), equals(''))
        )
    })
})