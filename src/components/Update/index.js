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
    <div>
      {loading ? (
        <>
          <Input
            className="input"
            value={updateTodo.content}
            onChange={(e) =>
              setUpdateTodo({ ...updateTodo, content: e.target.value })
            }
          />
          <Button
            className="addButton"
            isLoading
            colorScheme="teal"
            onClick={() => handleUpdateClick()}
          >
            Update
          </Button>
          <button className="addButton" onClick={() => setIsEditing(false)}>
            Cancel
          </button>
        </>
      ) : (
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
      )}
    </div>
  );
}

export default Update;
