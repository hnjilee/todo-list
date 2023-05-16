export const Category = Object.freeze({
  health: 'health',
  study: 'study',
  chores: 'chores',
  reading: 'reading',
});

export class TodoItem {
  constructor(name, category) {
    this.id = Date.now();
    this.name = name;
    this.category = category;
    this.done = false;
  }
}
