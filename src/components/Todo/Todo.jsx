import React, { Component } from "react";
const generateId = () => Math.random().toString().slice(2, 6);

class Todo extends Component {
  state = {
    tasks: [
      { id: generateId(), title: "Land a job as a react developer" },
      { id: generateId(), title: "Broaden my experience as a developer" },
      { id: generateId(), title: "Learn backend development" },
      { id: generateId(), title: "Land a job as a full stack web developer" },
    ],
    value: "",
    editId: "",
    isDisable: false,
  };

  handleDelete = (task) => {
    const updatedTasks = this.state.tasks.filter((t) => t !== task);
    this.setState({ tasks: updatedTasks });
  };

  handleAdd = (e) => {
    if (e.target.value === "") return;

    if (e.key === "Enter") {
      e.preventDefault();

      if (this.state.editId !== "") {

        this.state.tasks.map((task) => {
          if (task.id === this.state.editId) {
            task.title = e.target.value;

            this.setState({
              value: "",
              editId: "",
              isDisable: false,
            });
          }
        });

      } else {

        const newTask = { id: generateId(), title: e.target.value };
        const tasks = [...this.state.tasks, newTask];
        this.setState({
          tasks,
          value: "",
        });
      }
    }
  };

  handleComplete = (task) => {
    this.props.onComplete(task);
    this.handleDelete(task);
  };

  handleEdit = (task) => {
    this.setState({ value: task.title, editId: task.id, isDisable: true });
  };

  render() {
    return (
      <div className="card todo">
        <div className="card-header">Todo List</div>
        <ul className="list-group list-group-flush">
          {this.state.tasks.map((task) => (
            <li className="list-group-item" key={task.id}>
              <p>{task.title}</p>
              <div className="btns">
                <button
                  className="btn btn-success me-3"
                  onClick={() => this.handleComplete(task)}
                  disabled={this.state.isDisable}
                >
                  <i className="fa-solid fa-check"></i>
                </button>
                <button
                  className="btn btn-danger me-3"
                  onClick={() => this.handleDelete(task)}
                  disabled={this.state.isDisable}
                >
                  <i className="fa-regular fa-trash-can"></i>
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => this.handleEdit(task)}
                  disabled={this.state.isDisable}
                >
                  <i className="fa-solid fa-pen"></i>
                </button>
              </div>
            </li>
          ))}
          <li className="list-group-item">
            <input
              value={this.state.value}
              type="text"
              className="form-control py-2"
              placeholder="Enter a task"
              onKeyDown={this.handleAdd}
              onChange={(e) =>
                this.setState({
                  value: e.target.value,
                })
              }
            />
          </li>
        </ul>
      </div>
    );
  }
}

export default Todo;
