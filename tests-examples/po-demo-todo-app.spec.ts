import { test, expect } from '@playwright/test';
import { TodoPage } from '../pages/TodoApp/TodoPage';
import { TODO_ITEMS } from '../test-data';

test.describe('New Todo', () => {
  let todoPage: TodoPage;

  test.beforeEach(async ({ page }) => {
    todoPage = new TodoPage(page);
    todoPage.goto();
  });

  test('should allow me to add todo items', async () => {
    
    todoPage.addTodoItem(TODO_ITEMS[0]);
    await expect(todoPage.todoTitles).toHaveText([TODO_ITEMS[0]]);
    
    todoPage.addTodoItem(TODO_ITEMS[1]);
    await expect(todoPage.todoTitles).toHaveText([TODO_ITEMS[0], TODO_ITEMS[1]]);
  });

  test('should clear text input field when an item is added', async () => {
    
    todoPage.addTodoItem(TODO_ITEMS[0]);
    await expect(todoPage.newTodoInput).toBeEmpty();
  });
});