export default class TodoList {
  constructor() {
    this.list = {};
  }

  add(item) {
    this.list = { ...this.list, [item.id]: { ...item } };
  }

  check(id) {
    if (!(id in this.list)) {
      return;
    }

    let checked;
    if (this.list[id].done) {
      checked = { ...this.list[id], done: false };
    } else {
      checked = { ...this.list[id], done: true };
    }

    this.list = { ...this.list, [id]: checked };
  }

  delete(id) {
    delete this.list[id];
  }
}
