import React, { useState } from "react";
import Footer from "../Footer";
import Boton from "../Boton";
import { variables } from "./data";
import { envio } from "../../peticiones/peticion";
import "./NuevoVideo.css";

const NuevoVideo = () => {
  const [titulo, setTitulo] = useState("");
  const [video, setVideo] = useState("");
  const [imagen, setImagen] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [categoria, setCategoria] = useState("Back End");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nuevoVideo = {
      titulo,
      video,
      imagen,
      descripcion,
      categoria,
    };
    console.log(nuevoVideo);
    const url = `http://localhost:3001/${categoria.replace(/ /g, "%20")}`;
    await envio(nuevoVideo, url);
    limpiarInput();
  };

  const limpiarInput = () => {
    setTitulo('');
    setVideo('');
    setImagen('');
    setDescripcion('');
    setCategoria('Back End');
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="section-estilizada">
        <div>
          <h2 className="titulos-estilizado">Nuevo Video</h2>
          <p className="parrafo-estilizado">
            Complete el formulario para crear una nueva tarjeta de video
          </p>
        </div>
        <div className="contenedor-titulo">
          <h2 className="titulos-estilizado-2">Crear Tarjeta</h2>
        </div>

        <div className="w-full flex flex-col gap-4 mt-10">
          <input
            type="text"
            className="styled-input"
            placeholder="Ingrese el título"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
          <input
            type="text"
            className="styled-input"
            placeholder="Ingrese el enlace del video"
            value={video}
            onChange={(e) => setVideo(e.target.value)}
          />
          <input
            type="text"
            className="styled-input"
            placeholder="Link de la imagen"
            value={imagen}
            onChange={(e) => setImagen(e.target.value)}
          />
        </div>

        <div className="flex w-full flex-wrap mt-10 mb-6 gap-4">
          <textarea
            className="styled-text"
            placeholder="¿De qué se trata este vídeo?"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />

          <select
            className="styled-select"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            {variables.map((animal) => (
              <option key={animal.key} value={animal.label}>
                {animal.label}
              </option>
            ))}
          </select>
        </div>

        <div className="w-full absolute flex gap-10 bottom-0">
          <Boton type="submit" titulo="Guardar" B_oscuro={false} T_oscuro={true} />
          <Boton type="button" onClick={limpiarInput} titulo="Limpiar" B_oscuro={false} T_oscuro={false} />
        </div>
      </form>
      <Footer />
    </>
  );
};

export default NuevoVideo;
