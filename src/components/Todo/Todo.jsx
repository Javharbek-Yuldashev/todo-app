import React, { Component } from "react";

class Todo extends Component {
  state = {
    tasks: [
      "Land a job as a react developer",
      "Broaden my experience as a developer",
      "Learn backend development",
      "Land a job as a full stack web developer",
    ],
  };

  handleDelete = (index) => {
    const updatedTasks = this.state.tasks.filter((t, i) => i !== index);
    this.setState((this.state.tasks = updatedTasks));
  };

  handleAdd = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();

      const tasks = this.state.tasks;
      tasks.push(e.target.value);
      this.setState((this.state.tasks = tasks));

      e.target.value = "";
    }
  };

  handleComplete = (task, index) => {
    this.props.onComplete(task);
    this.handleDelete(index);
  };

  render() {
    return (
      <div className="card todo">
        <div className="card-header">Todo List</div>
        <ul className="list-group list-group-flush">
          {this.state.tasks.map((task, index) => (
            <li className="list-group-item" key={task}>
              <p>{task}</p>
              <div className="btns">
                <button
                  className="btn btn-success me-3"
                  onClick={() => this.handleComplete(task, index)}
                >
                  Complete
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => this.handleDelete(index)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
          <li className="list-group-item">
            <input
              type="text"
              className="form-control py-2"
              placeholder="Enter a task"
              onKeyDown={this.handleAdd}
            />
          </li>
        </ul>
      </div>
    );
  }
}

export default Todo;
