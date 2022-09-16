import React, { useState } from "react";
import "./style.css";
import { useTodo } from "../../context/TodoContext";
import { Spinner } from "@chakra-ui/react";

//api
import { checkedTodo } from "../../api";

function Checked({ todo }) {
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(todo.isCompleted);

  //context
  const { handleFetchTodos } = useTodo();

  //for checked button
  const handleChecked = async () => {
    setLoading(true);
    await checkedTodo({ todo, checked: !todo.isCompleted });
    await handleFetchTodos();
    setChecked(checked);
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
