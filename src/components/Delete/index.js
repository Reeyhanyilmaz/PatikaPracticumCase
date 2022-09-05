import axios from "axios";

export default function Delete({ id, fetchTodos }) {
  const deleteTodo = async () => {
    const { data } = await axios.delete(
      `https://6311aeb7f5cba498da835aac.mockapi.io/todos/${id}`
    );
    return data;
  };

  const handleClick = () => {
    deleteTodo();
    fetchTodos();
  };

  return (
    <>
      <span onClick={handleClick}>
        <img src="./assets/clear.png" alt="clear" className="clearIcon" />
      </span>
    </>
  );
}
