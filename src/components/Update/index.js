import React, { useState } from "react";
import { Input, Button } from "@chakra-ui/react";

//context
import { useTodo } from "../../context/TodoContext";

//api
import { editTodo } from "../../api";

function Update() {
  const { handleFetchTodos, setIsEditing, updateTodo, setUpdateTodo } =
    useTodo();
  const [loading, setLoading] = useState(false);

  //for click update button
  const handleUpdateClick = async () => {
    setLoading(true);
    await editTodo(updateTodo);
    await handleFetchTodos();
    setLoading(false);
    setIsEditing(false); //artık düzenleme yapmadığımızdan false'a çektim.
  };

  return (
    <div className="inputDiv">
      <Input
        className="input"
        value={updateTodo.content}
        onChange={(e) =>
          setUpdateTodo({ ...updateTodo, content: e.target.value })
        }
      />

      {loading ? (
        <>
          <Button
            isLoading
            loadingText='Updating...'
            colorScheme="teal"
            onClick={() => handleUpdateClick()}
            width="50%"
            marginLeft="20px"
          >
            Update
          </Button>
          <button className="cancelButton" onClick={() => setIsEditing(false)}>
            Cancel
          </button>
        </>
      ) : (
        <>
          <button className="updateButton" onClick={() => handleUpdateClick()}>
            Update
          </button>
          <button className="cancelButton" onClick={() => setIsEditing(false)}>
            Cancel
          </button>
        </>
      )}
    </div>
  );
}

export default Update;
