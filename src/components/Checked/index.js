import React, { useState } from "react";
import "./style.css";
import axios from "axios";

function Checked({ todo, todos, i, fetchTodos }) {
  const [checked, setChecked] = useState();
  console.log("checked ", checked);

  const checkedTodo = async () => {
    const { data } = await axios.put(
      `https://6311aeb7f5cba498da835aac.mockapi.io/todos/${todo.id}`,
      {
        content: todo.content,
        isCompleted: checked,
        id: todo.id,
      }
    );
    console.log("data", data);
    return data;
  };

  const handleChecked = (itemIndex) => {
    todos.map((item, index) => {
      if (itemIndex === index) {
        item.isCompleted = !item.isCompleted;
        setChecked(item.isCompleted);
        checkedTodo();
        fetchTodos();
      }
    });
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
