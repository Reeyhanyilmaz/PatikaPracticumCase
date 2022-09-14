import React, { useState } from "react";
import { Input } from "@chakra-ui/react";

//context
import { useTodo } from "../../context/TodoContext";

//api
import { editTodo } from "../../api";

function Update() {


  const { handleFetchTodos, setIsEditing } = useTodo();

  //for click update button
  const handleUpdateClick = () => {
    setIsEditing(false); //artık düzenleme yapmadığımızdan false'a çektim.
    editTodo(updateTodo);
    handleFetchTodos();
  };

  return (
    <div>
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
    </div>
  );
}

export default Update;
