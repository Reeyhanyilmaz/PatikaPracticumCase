import React, { useState } from "react";
import { Input, Button } from "@chakra-ui/react";

//for toast alert
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//context
import { useTodo } from "../../context/TodoContext";

//api
import { postTodo } from "../../api";

function AddTodo() {
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);

  const { handleFetchTodos } = useTodo();

  //toast alert
  const notify = () =>
    toast.info("Please enter todo", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  // for add button
  const handleAddClick = async () => {
    if (inputValue === "") {
      notify();
    } else {
      setLoading(true);
      await postTodo(inputValue);
      await handleFetchTodos();
      setInputValue("");
      setLoading(false);
    }
  };

  return (
    <div className="inputDiv">
      <Input
        className="input"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      {loading === true ? (
        <Button className="addButton" colorScheme="teal" isLoading>
          Add
        </Button>
      ) : (
        <button className="addButton" onClick={handleAddClick}>
          Add
        </button>
      )}
    </div>
  );
}

export default AddTodo;
