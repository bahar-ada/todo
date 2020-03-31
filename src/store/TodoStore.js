import { observable, action, decorate } from "mobx";
import todoModel from "./TodoModel";

class TodoStore {
  todos = [];
  Act = [];
  comp = [];
  lastID = 0;
  itemCounts = 0;
  active = false;
  complete = false;
  All = true;

  addtoDo(title) {
    this.todos.push(new todoModel(this, this.lastID++, title, false));
    this.countActive();
  }
  deleteToDo(id) {
    this.todos.splice(id, 1);
    this.countActive();
  }
  countActive() {
    this.itemCounts = 0;
    if (this.todos.length > 0) {
      this.todos.map(todo => {
        if (!todo.completed) {
          this.itemCounts++;
        }
      });
    }
  }

  deleteCompleted() {
    if (this.todos.length > 0) {
      this.todos.map(todo => {
        if (todo.completed) {
          this.deleteToDo(todo.id);
        }
      });
    }
  }

  AllItems() {
    this.All = true;
    this.Active = false;
    this.complete = false;

    return this.todos;
  }

  ActiveItems() {
    this.All = false;
    this.Active = true;
    this.complete = false;

    this.Act = this.todos.filter(function(e) {
      return e.completed !== true;
    });
  }

  CompletedItems() {
    this.All = false;
    this.Active = false;
    this.complete = true;

    this.comp = this.todos.filter(function(e) {
      return e.completed === true;
    });
  }
}

decorate(TodoStore, {
  todos: observable,
  title: observable,
  itemCounts: observable,
  All: observable,
  Active: observable,
  complete: observable,

  addtoDo: action,
  deleteToDo: action,
  countActive: action,
  deleteCompleted: action,
  ActiveItems: action,
  CompletedItems: action
});

const todoStore = new TodoStore();
export default todoStore;
