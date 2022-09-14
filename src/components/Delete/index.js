import React, { useState } from "react";
import { useTodo } from "../../context/TodoContext";
import { deleteTodo } from "../../api";
import { Spinner } from "@chakra-ui/react";

export default function Delete({ id }) {
  const [loading, setLoading] = useState(false);

  const { handleFetchTodos } = useTodo();

  //for delete button
  const handleClick = async () => {
    setLoading(true);
    await deleteTodo(id);
    await handleFetchTodos();
    setLoading(false);
  };

  if (loading) {
    return (
      <div >
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="gray.500"
          size="md"
        />
      </div>
    );
  }

  return (
    <>
      <span onClick={handleClick}>
        <img src="./assets/clear.png" alt="clear" className="clearIcon" />
      </span>
    </>
  );
}
