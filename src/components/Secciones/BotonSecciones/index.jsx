import React from "react";
import "./BotonSecciones.css";
const BotonesSecciones = ({ color, texto }) => {
  return (
    <button className="boton-estilizado" style={{ backgroundColor: color }}>
      {texto}
    </button>
  );
};

export default BotonesSecciones;
