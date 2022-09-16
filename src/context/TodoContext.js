import { useState, useEffect, useContext, createContext } from "react";
import { fetchTodos } from "../api";

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [todos, setTodos] = useState([]);

  //editleme yapıalcaksa
  const [isEditing, setIsEditing] = useState();

  //for update
  const [updateTodo, setUpdateTodo] = useState({});

  async function handleFetchTodos() {
    const res = await fetchTodos();
    //data dogru ise
    if (res.statusText === "OK") {
      setTodos(res.data);
    } else {
      setError(true);
    }
    setLoading(false);
  }

  useEffect(() => {
    handleFetchTodos();
  }, []);

  //gönderilecek values
  const values = {
    loading,
    error,
    todos,
    setTodos,
    handleFetchTodos,
    isEditing,
    setIsEditing,
    updateTodo,
    setUpdateTodo,
  };

  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};

const useTodo = () => useContext(TodoContext);

export { useTodo, TodoProvider };
