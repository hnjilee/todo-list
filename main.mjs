import { TodoItem, Category } from './todo-item.mjs';
import TodoList from './todo-list.mjs';

const todoList = new TodoList();
todoList.add(new TodoItem('exercise', Category.health));
todoList.add(new TodoItem('cooking', Category.health));
todoList.add(new TodoItem('JS', Category.study));
todoList.add(new TodoItem('English', Category.study));
todoList.add(new TodoItem('cleaning', Category.chores));
console.log(todoList);

todoList.check(1);
todoList.check(3);
todoList.check(4);
console.log(todoList);

todoList.delete(0);
console.log(todoList);

todoList.check(1);
console.log(todoList);
todoList.check(1);
console.log(todoList);
todoList.check(0);
console.log(todoList);
