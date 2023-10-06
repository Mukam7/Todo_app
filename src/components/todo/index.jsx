import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";

import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import TodoDoneItem from "./TodoDoneItem";

import { TODOS } from "../../const";

export class Todo extends Component {
  state = {
    todos: JSON.parse(localStorage.getItem(TODOS)) || [
      {
        id: 0,
        title: "Playing football",
        done: false,
      },
      {
        id: 1,
        title: "Reading books",
        done: false,
      },
      {
        id: 2,
        title: "Listening music",
        done: true,
      },
    ],
    selected: null,
  };
  render() {
    let todos = [];
    const unDoneItems = this.state.todos.filter((todo) => !todo.done);
    const doneItems = this.state.todos.filter((todo) => todo.done);

    const setTodos = () => {
      this.setState({ todos });
      localStorage.setItem(TODOS, JSON.stringify(todos));
    };

    const getValue = (value) => {
      if (this.state.selected === null) {
        todos = [
          ...this.state.todos,
          { id: uuidv4(), title: value, done: false },
        ];
        toast.success("Add successfully !");
      } else {
        todos = this.state.todos.map((td) => {
          if (td.id === this.state.selected) {
            td.title = value;
          }
          return td;
        });
        this.setState({ selected: null });
        toast.success("Edit successfully !");
      }
      if (value !== "") {
        setTodos();
      } else {
        toast.error("Please fill this input !");
      }
    };
    const doneTodo = (id) => {
      todos = this.state.todos.map((todo) => {
        todo.id === id && (todo.done = true);
        return todo;
      });
      setTodos();
    };
    const deleteTodo = (id) => {
      todos = this.state.todos.filter((todo) => todo.id !== id);
      setTodos();
    };
    const editTodo = (id) => {
      this.setState({ selected: id });
    };
    let todo = this.state.todos.find((td) => td.id === this.state.selected);
    return (
      <Container className="container-two-item">
        <TodoInput todo={todo ? todo.title : ""} getValue={getValue} />
        <Row>
          <Col lg={6}>
            {unDoneItems.map((todo) => (
              <TodoItem
                editTodo={editTodo}
                doneTodo={doneTodo}
                key={todo.id}
                {...todo}
              />
            ))}
          </Col>
          <Col lg={6}>
            {doneItems.map((todo) => (
              <TodoDoneItem deleteTodo={deleteTodo} key={todo.id} {...todo} />
            ))}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Todo;
