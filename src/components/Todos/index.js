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

  if (error) {
    return <div>Error!</div>;
  }

  return (
    <div className="todoDiv">
      <InputArea />

      {loading ? (
        <div className="spinner">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="teal.500"
            size="xl"
          />
        </div>
      ) : (
        todos.map((todo, i) => (
          <ul key={i} className="todoUl">
            <li className={todo.isCompleted ? "checked" : ""}>
            
         
                <Checked todo={todo} />

                <p className="todoWrite" >{todo.content}</p>
              

              <span className="iconSpan">
                <Edit todo={todo} />
                <Delete id={todo.id} />
              </span>
            </li>
          </ul>
        ))
      )}
    </div>
  );
}

export default Todos;
