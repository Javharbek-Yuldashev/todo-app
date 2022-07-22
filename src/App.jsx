import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css"

import "./assets/utils/styles/base.scss";
import Todo from "./components/Todo/Todo";
import Completed from "./components/Completed/Completed";

class App extends Component {

  state = {
    completedTasks: []
  }

  handleFindComplete = (task) => {
    const newTasks = this.state.completedTasks;
    newTasks.push(task)

    this.setState(this.state.completedTasks = newTasks);
  }

  render() {
    return (
      <>
        <h1>Todo App</h1>
        <div className="container">
          <Todo find={this.handleFindComplete}/>
          <Completed tasks={this.state.completedTasks}/>
        </div>
      </>
    );
  }
}

export default App;