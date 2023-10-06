import React, { useState, useRef } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

const TodoInput = ({ todo, getValue }) => {
  const [isDarkMode, setDarkMode] = useState(false);
  const inputRef = useRef();

  const submit = (e) => {
    e.preventDefault();
    const inputValue = inputRef.current.value.trim(); // Bo'shliklarni olib tashlash
    if (inputValue === "") {
      return; // Agar input bo'sh bo'lsa, hech narsa qilmaslik
    }
    getValue(inputValue);
    inputRef.current.value = "";
  };

  const light_mode = () => {
    setDarkMode(!isDarkMode);

    if (isDarkMode) {
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };

  inputRef.current && (inputRef.current.value = todo);

  return (
    <Form onSubmit={submit}>
      <InputGroup className="my-3 w-50 m-auto">
        <Form.Control
          ref={inputRef}
          placeholder="Writing todo name"
          aria-label="Writing todo name"
        />
        <Button type="submit" variant="outline-success text-white">
          {todo ? (
            "Save"
          ) : (
            <span style={{ color: isDarkMode ? "black" : "white" }}>Add</span>
          )}
        </Button>
        <Button onClick={light_mode}>
          {isDarkMode ? (
            <i className="fa-sharp fa-regular fa-moon"></i>
          ) : (
            <i className="fa-sharp fa-regular fa-sun"></i>
          )}
        </Button>
      </InputGroup>
    </Form>
  );
};

export default TodoInput;
