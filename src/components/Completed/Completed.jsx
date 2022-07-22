import React, { Component } from "react";

class Completed extends Component {
  state = {
    completed: ["Learn about react", "Use react hooks"],
  };

  render() {
    return (
      <div className="card completed">
        <div className="card-header">Completed</div>
        <ul className="list-group list-group-flush">
          {this.state.completed.map((c) => (
            <li className="list-group-item" key={c}>
              <span>{c}</span>
              <i class="fa-solid fa-check"></i>
            </li>
          ))}
          {this.props.tasks.map((t) => (
            <li className="list-group-item" key={t}>
              <span>{t}</span>
              <i class="fa-solid fa-check"></i>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Completed;
