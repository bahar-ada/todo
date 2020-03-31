import React, { Component } from "react";
import todoStore from "../store/TodoStore";
import { observer } from "mobx-react";

const TodoSummary = observer(
  class TodoSummary extends Component {
    handleAllSelect() {
      todoStore.AllItems();
    }
    handleActiveSelect() {
      todoStore.ActiveItems();
    }
    handleCompleteSelect() {
      todoStore.CompletedItems();
    }

    handleClickCompleted() {
      todoStore.deleteCompleted();
    }

    render() {
      return (
        <footer className="footer">
          <label className="todo-count">{`${todoStore.itemCounts} items left`}</label>
          <div className="filters">
            <ul className="filters">
              <li>
                <button onClick={this.handleAllSelect}>All</button>
              </li>
              <li>
                <button onClick={this.handleActiveSelect}>Active</button>
              </li>
              <li>
                <button onClick={this.handleCompleteSelect}>Completed</button>
              </li>
            </ul>
          </div>
          <button
            className="clear-completed"
            onClick={this.handleClickCompleted}
          >
            Clear Completed
          </button>
        </footer>
      );
    }
  }
);

export default TodoSummary;
