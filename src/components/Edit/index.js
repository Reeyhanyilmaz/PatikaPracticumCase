import { useTodo } from "../../context/TodoContext";

export default function Edit(todo) {
  const { setIsEditing, updateTodo, setUpdateTodo} = useTodo();

    //for click edit button
    const handleEditClick = () => {
      setIsEditing(true);
      setUpdateTodo({ ...todo }); //her bir todo yani. updateTodo'ya todo gönderiliyor.
      console.log("updateTodo ", updateTodo);
    };

  return (
    <>
      <span onClick={handleEditClick}>
        <img src="./assets/edit.png" alt="edit" className="editIcon" />
      </span>
    </>
  );
}
