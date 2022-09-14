import React from "react";
import InputArea from "../Input";
import Edit from "../Edit";
import Delete from "../Delete";
import Checked from "../Checked";
import "./style.css";
import { Spinner } from "@chakra-ui/react";
import { useTodo } from "../../context/TodoContext";

function Todos() {
  const { todos, loading, error } = useTodo();

  if (loading) {
    return (
      <div className="spinner">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </div>
    );
  }

  if (error) {
    return <div>Error!</div>;
  }

  return (
    <div className="todoDiv">
      <div className="container">
        <InputArea />
        {todos.map((todo, i) => (
          <ul key={i} className="todoUl">
            <li className={todo.isCompleted ? "checked" : ""}>
              <Checked todo={todo} i={i} />

              <p className="todoWrite">{todo.content}</p>

              <span className="iconSpan">
                <span>
                  <Edit todo={todo} />
                  <Delete id={todo.id} />
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
