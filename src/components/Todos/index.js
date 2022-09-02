import axios from "axios";
import React, { useEffect, useState } from "react";

function Todos() {
 const [todos,  setTodos] = useState([]);

 const fetchData = async () =>{
   const {data} = await axios.get(`https://6311aeb7f5cba498da835aac.mockapi.io/todos`)
    console.log('res', data);
    const todos = data;
    setTodos(todos)
 }
   
useEffect(() => {
  fetchData()
},[])

  return (
    <div>
      {todos.map((item, i) => (
        <ul key={i}>
          <li>{item.content}</li>
        </ul>
      ))}
    </div>
  );
}

export default Todos;
