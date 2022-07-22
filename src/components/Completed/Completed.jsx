import React, { Component } from "react";

class Completed extends Component {


  render() {
    return (
      <div className="card completed">
        <div className="card-header">Completed</div>
        <ul className="list-group list-group-flush">
          {this.props.tasks.map((task) => (
            <li className="list-group-item" key={task.id}>
              <span>{task.title}</span>
              <i className="fa-solid fa-check"></i>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Completed;
