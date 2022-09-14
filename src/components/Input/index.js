import React from "react";
import "./style.css";
import { useTodo } from "../../context/TodoContext";
import Update from "../Update";

//for toast alert
import { ToastContainer } from "react-toastify";

import AddTodo from "../AddTodo";

function InputArea() {
  const { isEditing } = useTodo();

  return (
    <div className="inputDiv">
      <ToastContainer />
      {isEditing ? <Update /> : <AddTodo />}
    </div>
  );
}

export default InputArea;
