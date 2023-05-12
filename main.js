import { TodoItem, Category } from './todo-item.js';
import TodoList from './todo-list.js';

const todoList = new TodoList();

const addBtn = document.querySelector('.footer__add');
const select = document.querySelector('.footer__select');
const textInput = document.querySelector('.footer__text-input');
const list = document.querySelector('.todoList__list');

addBtn.addEventListener('click', () => {
  onAdd();
});

window.addEventListener('keydown', e => {
  if (e.key === 'Enter' && !e.isComposing) {
    onAdd();
  }
});

function onAdd() {
  const category = select.value;
  const name = textInput.value;
  if (!/\S/.test(name)) {
    resetInput();
    return;
  }

  const todoItem = new TodoItem(name, category);
  todoList.add(todoItem);

  const item = createTodoItem(todoItem);
  list.append(item);
  item.scrollIntoView();

  resetInput();
}

function resetInput() {
  textInput.value = '';
  textInput.focus();
}

function createTodoItem({ name, category, done }) {
  const item = document.createElement('li');
  item.classList.add('todoList__item');
  item.innerHTML = `
        <span class="item-category item__category">${category}</span>
        <span class="item-name item__name">${name}</span>
        <div class="item__btns">
        <button class="item__btn item__check">
            <i class="fa-regular fa-circle-check"></i>
        </button>
        <button class="item__btn item__delete">
            <i class="fa-regular fa-trash-can"></i>
        </button>
        </div>
    `;

  return item;
}
