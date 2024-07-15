import React from "react";
import "./Banner.css";
import fondo from "../../assets/fondo.png";
import player from "../../assets/player.png";

const Banner = () => {
  return (
    <div className="contenedor-banner">
      <img className="fondo-imagen" src={fondo} alt="" />
      <div className="contenedor-estilizado">
        <div className="flex">
          <div className="informacion">
            <button className="btn">Front end</button>
            <h2 className="encabezado">Challenge React</h2>
            <p className="parrafo">
              Este challenge es una forma de aprendizaje. Es un mecanismo donde
              podrás comprometerte en la resolución de un problema para poder
              aplicar todos los conocimientos adquiridos en la formación React.
            </p>
          </div>
          <div>
            <figure>
              <img className="imagen-player" src={player} alt="" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
