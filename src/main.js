import { TodoItem, Category } from './todo-item.js';
import { TodoList } from './todo-list.js';

const todoList = new TodoList();

const addBtn = document.querySelector('.footer__add');
const select = document.querySelector('.footer__select');
const textInput = document.querySelector('.footer__text-input');
const list = document.querySelector('.todoList__list');

const options = createOptions(Category);
select.append(...options);

addBtn.addEventListener('click', () => {
  onAdd();
});

window.addEventListener('keydown', e => {
  if (e.key === 'Enter' && !e.isComposing) {
    onAdd();
  }
});

list.addEventListener('click', e => {
  const target = e.target;
  const item = target.closest('[data-id]');
  if (item == null) {
    return;
  }
  const id = item.dataset.id;

  if (target.closest('.item__check')) {
    onCheck(id, item);
  } else if (target.closest('.item__delete')) {
    onDelete(id, item);
  }
});

function createOptions(categoryObj) {
  return Object.values(categoryObj).map(category => {
    const option = document.createElement('option');
    option.setAttribute('value', category);
    option.textContent = category;
    return option;
  });
}

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

function createTodoItem({ id, name, category, done }) {
  const item = document.createElement('li');
  item.setAttribute('data-id', id);
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

function onCheck(id, item) {
  todoList.check(id);
  const name = item.querySelector('.item__name');
  name.classList.toggle('item__name--checked');
}

function onDelete(id, item) {
  todoList.delete(id);
  item.remove();
}
