import { observable, action, decorate } from "mobx";

export default class TodoModel {
  id;
  store;
  title;
  completed;

  constructor(store, id, title, completed) {
    this.title = title;
    this.completed = completed;
    this.id = id;
    this.store = store;
  }

  toggle() {
    this.completed = !this.completed;
  }

}

decorate(TodoModel, {
  title: observable,
  completed: observable,
  toggle: action,
  
});
