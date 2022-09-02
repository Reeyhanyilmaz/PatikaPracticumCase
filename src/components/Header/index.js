import React, { useState } from "react";
import Swal from "sweetalert2";

function Header() {
  const Swal = require("sweetalert2");
  const [name, setName] = useState("");

  const handleClick = () => {
    Swal.fire({
      title: "İsminizi Giriniz",
      input: "text",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "Ok",
      showLoaderOnConfirm: true,
      preConfirm: (name) => {
        setName(name);
      },
      allowOutsideClick: () => !Swal.isLoading(),
    });
  };
  return (
    <div>
      <h1>Todos</h1>
      <h3>
        Merhaba!{" "}
        {name ? (
          name
        ) : (
          <a onClick={handleClick}>İsim girmek için tıklayınız...</a>
        )}
      </h3>
    </div>
  );
}

export default Header;
