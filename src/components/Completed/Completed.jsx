import React, { Component } from "react";

class Completed extends Component {


  render() {
    return (
      <div className="card completed">
        <div className="card-header">Completed</div>
        <ul className="list-group list-group-flush">
          {this.props.tasks.map((t) => (
            <li className="list-group-item" key={t}>
              <span>{t}</span>
              <i className="fa-solid fa-check"></i>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Completed;
