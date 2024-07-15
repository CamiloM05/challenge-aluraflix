import React from "react";
import BotonSecciones from "./BotonSecciones";
import CardA from "../Card";
import "./Secciones.css";

const Secciones = () => {
  return (
    <div className="container-seccion">
      <div className="secciones-estilizada">
        <BotonSecciones texto="Back End" color="#00c86f" />
        <CardA categoria="Back End" />
      </div>

      <div className="secciones-estilizada">
        <BotonSecciones texto="Front End" color="#6bd1ff" />
        <CardA categoria="Front End" />
      </div>

      <div className="secciones-estilizada">
        <BotonSecciones texto="Innovación y Gestión" color="#ffba05" />
        <CardA categoria="Innovación y Gestión" />
      </div>
    </div>
  );
};

export default Secciones;

