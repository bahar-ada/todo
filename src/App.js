import React, { Component } from "react";
import store from "./store";
import { observer } from "mobx-react";
import "./App.css";
import TodoEntery from "./components/TodoEntry";
import TodoItems from "./components/TodoItems";
import TodoSummary from "./components/TodoSummary";

const App = observer(
  class App extends Component {
    render() {
      return (
        <div className="todoapp">
          <TodoEntery />

          <TodoItems />

          <TodoSummary />
        </div>
      );
    }
  }
);

export default App;
