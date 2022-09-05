import React, { useState } from "react";
import Swal from "sweetalert2";
import "./style.css"

function Header() {
  const [name, setName] = useState(localStorage.getItem("name"));

  const handleClick = () => {
    Swal.fire({
      title: "Enter your name",
      input: "text",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "OK",
      confirmButtonColor: "#5F9EA0",
      showLoaderOnConfirm: true,
      preConfirm: (name) => {
        setName(name);
        localStorage.setItem("name", name)
      },
      allowOutsideClick: () => !Swal.isLoading(),
    });
  };
  return (
    <div className="header">
      <h1 className="h1">Todos</h1>
      <h2>
        Hello!{" "}
        {name ? (
         name.toUpperCase()
        ) : (
       <span><a onClick={handleClick}>Enter name...</a></span>   
        )}
      </h2>
    </div>
  );
}

export default Header;
