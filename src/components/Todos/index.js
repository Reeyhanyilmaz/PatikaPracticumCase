import axios from "axios";
import React, { useEffect, useState } from "react";
import InputArea from "../Input";

export function Delete({id, fetchData}) {
  const deleteData = async (e) => {
    const { data } = await axios.delete(
      `https://6311aeb7f5cba498da835aac.mockapi.io/todos/${id}`
    );
    return data;
  };

  const handleClick = () => {
    deleteData();
    fetchData();
  }

  return (
    <>
      <span style={{cursor: "pointer"}} onClick={handleClick}>X</span>
    </>
  );
}

function Todos() {
  const [todos, setTodos] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.get(
      `https://6311aeb7f5cba498da835aac.mockapi.io/todos`
    );
    // console.log("res", data);
    const todos = data;
    setTodos(todos);
  };

  useEffect(() => {
    fetchData();
  }, [todos]);

  return (
    <div>
      <InputArea fetchData={fetchData}/>
      {todos.map((item, i) => (
        <ul key={i}>
          <li style={{display: "flex", justifyContent: "space-between", marginTop: 15}}>
            {item.content} <Delete id={item.id} fetchData={fetchData}/>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default Todos;
