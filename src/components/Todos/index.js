import axios from "axios";
import React, { useEffect, useState } from "react";
import InputArea from "../Input";
import Edit from "../Edit";
import Delete from "../Delete";
import Checked from "../Checked";
import "./style.css";

function Todos() {
  const [todos, setTodos] = useState([]);
  console.log("todos ", todos);

  //update state'lerim
  const [isEditing, setIsEditing] = useState(false);
  const [updateTodo, setUpdateTodo] = useState({});
  console.log("updateTodo ", updateTodo);

  //todo'ları çekiyorum.
  const fetchTodos = async () => {
    const { data } = await axios.get(
      `https://6311aeb7f5cba498da835aac.mockapi.io/todos`
    );
    const todos = data;
    setTodos(todos);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="todoDiv">
      <div className="container">
        <InputArea
          fetchTodos={fetchTodos}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          updateTodo={updateTodo}
          setUpdateTodo={setUpdateTodo}
        />
        {todos.map((todo, i) => (
          <ul key={i} className="todoUl">
            <li className={todo.isCompleted ? "checked" : ""}>
              <Checked
                todo={todo}
                todos={todos}
                i={i}
                fetchTodos={fetchTodos}
              />

              <p className="todoWrite">{todo.content}</p>

              <span className="iconSpan">
                <span>
                  <Edit
                    todo={todo}
                    setIsEditing={setIsEditing}
                    updateTodo={updateTodo}
                    setUpdateTodo={setUpdateTodo}
                  />
                  <Delete id={todo.id} fetchTodos={fetchTodos} />
                </span>
              </span>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default Todos;
