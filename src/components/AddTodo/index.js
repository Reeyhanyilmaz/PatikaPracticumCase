import React, { useState } from "react";
import { Input } from "@chakra-ui/react";

//for toast alert
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTodo } from "../../context/TodoContext";
import { postTodo } from "../../api"

function AddTodo() {
  const [inputValue, setInputValue] = useState("Todo:");

  const { handleFetchTodos } = useTodo();

  //toast alert
  const notify = () =>
    toast.info("Please enter todo", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  // for add button
  const handleAddClick = async () => {
    if (inputValue === "Todo:") {
      notify();
    } else {
      await postTodo(inputValue);
      await handleFetchTodos();
      setInputValue("Todo:");
    }
  };

  return (
    <div>
      <Input
        className="input"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="addButton" onClick={handleAddClick}>
        Add
      </button>
    </div>
  );
}

export default AddTodo;
