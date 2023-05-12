export const Category = Object.freeze({
  health: 'health',
  study: 'study',
  chores: 'chores',
});

export class TodoItem {
  constructor(name, category) {
    this.name = name;
    this.category = category;
    this.done = false;
  }
}
