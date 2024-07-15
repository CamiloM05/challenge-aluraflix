import React, { useState, useEffect } from "react";
import CardEditar from "./CardEditar";
import CardEditarInfo from "./CardEditarInfo";
import { peticiones, Delete } from "../../peticiones/peticion";
import "./Card.css"; 

const CardA = ({ categoria }) => {
  const [data, setData] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalEditarInfoOpen, setModalEditarInfoOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const url = `http://localhost:3001/${categoria.replace(/ /g, '%20')}`;
      const result = await peticiones(url);
      setData(result);
    };

    fetchData();
  }, [categoria]);

  const openModal = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const openModalEditarInfo = () => {
    setModalEditarInfoOpen(true);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setModalOpen(false);
  };

  const closeModalEditarInfo = () => {
    setModalEditarInfoOpen(false);
  };

  const handleDelete = async (id) => {
    await Delete(id, `http://localhost:3001/${categoria.replace(/ /g, '%20')}`);
    setData(data.filter(item => item.id !== id));
  };

  const filteredList = data || [];

  return (
    <div className="card-container">
      {filteredList.map((item, index) => (
        <div key={index} className="card">
          <div className="card-image">
            <img
              className="card-image"
              src={item.imagen}
              alt={item.titulo}
            />
          </div>
          <div className="card-footer">
            <b>{item.titulo}</b>
            <div className="card-buttons">
              <button onClick={() => openModal(item)}>Ver <span role="img" aria-label="ver">👁️</span></button>
              <button onClick={() => handleDelete(item.id)}>Borrar <span role="img" aria-label="borrar">🗑️</span></button>
              <button onClick={openModalEditarInfo}>Editar <span role="img" aria-label="editar">✏️</span></button>
            </div>
          </div>
        </div>
      ))}
      <CardEditar isOpen={isModalOpen} onClose={closeModal} item={selectedItem} />
      <CardEditarInfo isOpen={isModalEditarInfoOpen} onClose={closeModalEditarInfo} />
    </div>
  );
};

export default CardA;
