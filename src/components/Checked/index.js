import React, { useState } from "react";
import "./style.css";
import { useTodo } from "../../context/TodoContext";

//api
import { checkedTodo } from "../../api";

function Checked({ todo, i }) {
  const [checked, setChecked] = useState(todo.isCompleted);
  console.log("checked ", checked);

  //context
  const { handleFetchTodos, setLoading } = useTodo();

  //for checked button
  const handleChecked = (itemIndex, i) => {
    setLoading(true);
    if (itemIndex === i) {
      setChecked(!todo.isCompleted);
      checkedTodo(todo, checked);
      handleFetchTodos();
    }
    return todo;
  };

  return (
    <>
      <input
        type="checkbox"
        className="checkBox"
        onChange={() => handleChecked(i)}
        checked={todo.isCompleted}
      />
    </>
  );
}

export default Checked;
