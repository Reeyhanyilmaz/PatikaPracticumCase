import React, { useState } from "react";
import { Input, Button } from "@chakra-ui/react";
import axios from "axios";

function InputArea({ fetchData }) {
  const [inputValue, setInputValue] = useState("Yapılacak:");

  const fetchPost = async () => {
    const { data } = await axios.post(
      `https://6311aeb7f5cba498da835aac.mockapi.io/todos`,
      {
        content: inputValue,
        isCompleted: false,
      }
    );
    console.log("data.content", data);
    return data;
  };

  const handleClick = (e) => {
    if (inputValue === "") {
      alert("Lütfen todo giriniz");
    } else {
      e.preventDefault();
      fetchPost();
      fetchData();
      setInputValue("Yapılacak:");
    }
  };

  return (
    <div style={{display: "flex", flexDirection: "row"}}>
      <Input
        placeholder="todos..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button type="submit" onClick={handleClick}>
        Ekle
      </Button>
    </div>
  );
}

export default InputArea;
