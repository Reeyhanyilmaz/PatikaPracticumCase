import { useTodo } from "../../context/TodoContext";
import { deleteTodo } from "../../api";

export default function Delete(id) {
  const { handleFetchTodos } = useTodo();

  //for delete button
  const handleClick = () => {
    deleteTodo(id);
    handleFetchTodos();
  };

  return (
    <>
      <span onClick={handleClick}>
        <img src="./assets/clear.png" alt="clear" className="clearIcon" />
      </span>
    </>
  );
}
