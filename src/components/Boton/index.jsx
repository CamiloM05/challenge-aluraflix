import React from "react";
import "./Boton.css";

const Boton = ({ titulo, B_oscuro = false, T_oscuro = false }) => {
  const buttonClass = B_oscuro ? "button-estilizado dark" : "button-estilizado light";

  return (
    <button className={buttonClass}>{titulo}</button>
  );
};

export default Boton;
