import { Component, Fragment } from "react";
import { ToastContainer } from "react-toastify";

import Todo from "./components/todo";
import Background from "./components/todo/Background";

class App extends Component {
  render() {
    return (
      <Fragment>
        <ToastContainer position="bottom-right" autoClose={1000} />
        <Todo />
        <Background />
      </Fragment>
    );
  }
}

export default App;
