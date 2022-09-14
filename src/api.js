import axios from "axios";

//get todos
export const fetchTodos = async () => {
  const res = await axios.get(
    `https://6311aeb7f5cba498da835aac.mockapi.io/todos`
  );
  console.log("res", res);
  return res;
};

//for add todo
export const postTodo = async (inputValue) => {
  const { data } = await axios.post(
    `https://6311aeb7f5cba498da835aac.mockapi.io/todos`,
    {
      content: inputValue,
      isCompleted: false,
    }
  );
  console.log("data", data);
  return data;
};

//for todo delete
export const deleteTodo = async (id) => {
  const { data } = await axios.delete(
    `https://6311aeb7f5cba498da835aac.mockapi.io/todos/${id}`
  );
  return data;
};

//for todo update
export const editTodo = async (updateTodo) => {
  const { data } = await axios.put(
    `https://6311aeb7f5cba498da835aac.mockapi.io/todos/${updateTodo.id}`,
    {
      content: updateTodo.content,
      isCompleted: updateTodo.isCompleted,
      id: updateTodo.id,
    }
  );
  console.log("data", data);
  return data;
};

//for todo checked
export const checkedTodo = async (todo, checked) => {
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
