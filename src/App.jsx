import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";

import "./assets/utils/styles/base.scss";
import Todo from "./components/Todo/Todo";
import Completed from "./components/Completed/Completed";

const generateId = () => Math.random().toString().slice(2, 6);

class App extends Component {
  state = {
    completedTasks: [
      { id: generateId(), title: "Learn about react" },
      { id: generateId(), title: "Use react hooks" },
    ],
  };

  handleComplete = (task) => {
    const newTasks = [...this.state.completedTasks, task];

    this.setState((this.state.completedTasks = newTasks));
  };

  render() {
    return (
      <>
        <h1>Todo App</h1>
        <div className="container">
          <Todo onComplete={this.handleComplete} />
          <Completed tasks={this.state.completedTasks} />
        </div>
      </>
    );
  }
}

export default App;
