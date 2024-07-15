import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/Logopng.png";
import Boton from "../Boton";

const Header = ({ oscuro = false }) => {
  return (
    <header className={`container-menu ${oscuro ? "oscuro" : "claro"}`}>
      <div className="logo">
        <img className="logo-estilizado" src={logo} alt="AluraFlix" />
      </div>
      <div className="navegacion">
        <nav>
          <Link to="/">
            <Boton titulo="Home" B_oscuro={true} T_oscuro={true} />
          </Link>
          <Link to="/nuevo_video">
            <Boton titulo="Nuevo Video" B_oscuro={false} T_oscuro={false} />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;



