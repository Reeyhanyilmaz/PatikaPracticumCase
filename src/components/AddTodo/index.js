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
  const [inputValue, setInputValue] = useState("Todo:");
  const [loading, setLoading] = useState(false);

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
      setLoading(true);
      await postTodo(inputValue);
      await handleFetchTodos();
      setInputValue("Todo:");
      setLoading(false);
    }
  };

  return (
    <div>
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
        <Button
          className="addButton"
          colorScheme="teal"
          onClick={handleAddClick}
        >
          Add
        </Button>
      )}
    </div>
  );
}

export default AddTodo;
