import React, { Component } from "react";
import { observer } from "mobx-react";
import todoStore from "../store/TodoStore";

const TodoItem = observer(
  class TodoItem extends Component {
    onToggle = () => {
      this.props.todo.toggle();
      todoStore.countActive();
    };
    onDestroyButtonClick = () => {

      todoStore.deleteToDo(this.props.todo.id);
    };

    render() {
      const { todo } = this.props;
      return (
        <ul className="todo-list">
          <li className={todo.completed ? "completed" : "new-todo"}>
            <div className="view">
              <input
                onChange={this.onToggle}
                type="checkbox"
                className="toggle"
                value="on"
                checked={todo.completed}
              />
              <label htmlFor=""> {todo.title}</label>
              <button
                className="destroy"
                onClick={this.onDestroyButtonClick}
              ></button>
            </div>
          </li>
        </ul>
      );
    }
  }
);

export default TodoItem;
