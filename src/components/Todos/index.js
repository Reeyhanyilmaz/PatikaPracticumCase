import axios from "axios";
import React, { useEffect, useState } from "react";
import InputArea from "../Input";
import Edit from "../Edit";
import Delete from "../Delete";
import "./style.css";

function Todos() {
  const [todos, setTodos] = useState([]);

  //update state'lerim
  const [isEditing, setIsEditing] = useState(false);
  const [updateTodo, setUpdateTodo] = useState({});

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
  }, [todos, updateTodo]);

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
            <li>
              <span className="todoWrite">{todo.content}</span>

              <span className="iconSpan">
                <Edit
                  todo={todo}
                  setIsEditing={setIsEditing}
                  updateTodo={updateTodo}
                  setUpdateTodo={setUpdateTodo}
                />
                <Delete id={todo.id} fetchTodos={fetchTodos} />
              </span>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default Todos;
