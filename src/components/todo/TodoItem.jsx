import React, { Component } from "react";

export class TodoItem extends Component {
  render() {
    const { id, title, doneTodo, editTodo } = this.props;
    return (
      <div className="p-3 d-flex justify-content-between align-items-center border mb-3 todo-item">
        <span>{title}</span>
        <div>
          <button className="btn btn-primary me-3" onClick={() => editTodo(id)}>
            Edit
          </button>
          <button className="btn btn-success" onClick={() => doneTodo(id)}>
            Done
          </button>
        </div>
      </div>
    );
  }
}

export default TodoItem;
