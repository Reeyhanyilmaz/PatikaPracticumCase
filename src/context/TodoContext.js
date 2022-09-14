import { useState, useEffect, useContext, createContext } from "react";
import { fetchTodos } from "../api";
import { Spinner } from "@chakra-ui/react";

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [todos, setTodos] = useState([]);
  console.log("todos ", todos);

  //editleme yapıalcaksa
  const [isEditing, setIsEditing] = useState();

  //for update
  const [updateTodo, setUpdateTodo] = useState({});
  console.log("updateTodo ", updateTodo);

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

  const spinner = () => {
    <div>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="gray.500"
        size="md"
      />
    </div>;
  };

  //gönderilecek values
  const values = {
    spinner,
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
