import React, { useState } from "react";
import "./style.css";
import { useTodo } from "../../context/TodoContext";
import { Spinner } from "@chakra-ui/react";

//api
import { checkedTodo } from "../../api";

function Checked({ todo }) {
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(todo.isCompleted);
  console.log("checked ", checked);

  //context
  const { handleFetchTodos } = useTodo();

  //for checked button
  const handleChecked = async () => {
    setLoading(true);
    await checkedTodo({ todo, checked: !todo.isCompleted });
    await handleFetchTodos();
    setChecked(!todo.isCompleted);
    setLoading(false);
  };

  if (loading) {
    return (
      <div>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="gray.500"
          size="md"
          marginRight="5px"
        />
      </div>
    );
  }

  return (
    <>
      <input
        type="checkbox"
        className="checkBox"
        onChange={() => handleChecked()}
        checked={todo.isCompleted}
      />
    </>
  );
}

export default Checked;
