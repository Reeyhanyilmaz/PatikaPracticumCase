import React, { useState } from "react";
import { Input } from "@chakra-ui/react";
import axios from "axios";
import "./style.css";

//toast alert
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function InputArea({
  fetchTodos,
  setIsEditing,
  isEditing,
  setUpdateTodo,
  updateTodo,
}) {
  const [inputValue, setInputValue] = useState("Todo:");

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

  //todo ekleme
  const postTodo = async () => {
    const { data } = await axios.post(
      `https://6311aeb7f5cba498da835aac.mockapi.io/todos`,
      {
        content: inputValue,
        isCompleted: false,
      }
    );
    console.log("data", data);
    return data;
  };

  const handleAddClick = (e) => {
    if (inputValue === "Todo:") {
      notify();
    } else {
      e.preventDefault();
      postTodo();
      fetchTodos();
      setInputValue("Todo:");
    }
  };

  //todo update
  const editTodo = async () => {
    const { data } = await axios.put(
      `https://6311aeb7f5cba498da835aac.mockapi.io/todos/${updateTodo.id}`,
      {
        content: updateTodo.content,
        isCompleted: updateTodo.isCompleted,
        id: updateTodo.id,
      }
    );
    console.log("data", data);
    return data;
  };

  const handleUpdateClick = (id) => {
    setIsEditing(false); //artık düzenleme yapmadığımızdan false'a çektim.
    editTodo();
    fetchTodos();
  };

  return (
    <div className="inputDiv">
      <ToastContainer />
      {isEditing ? (
        <>
          <Input
            className="input"
            value={updateTodo.content}
            onChange={(e) =>
              setUpdateTodo({ ...updateTodo, content: e.target.value })
            }
          />
          <button className="addButton" onClick={() => handleUpdateClick()}>
            Update
          </button>
          <button className="addButton" onClick={() => setIsEditing(false)}>
            Cancel
          </button>
        </>
      ) : (
        <>
          <Input
            className="input"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="addButton" onClick={handleAddClick}>
            Add
          </button>
        </>
      )}
    </div>
  );
}

export default InputArea;
