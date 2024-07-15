import React from "react";

const CardEditar = ({ isOpen, onClose, item }) => {
  if (!item) return null;

  return (
    <div className={`modal ${isOpen ? "show" : "hide"}`}>
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title">{item.titulo}</h2>
          <span className="close-button" onClick={onClose}>&times;</span>
        </div>
        <div className="modal-body">
          <p>{item.descripcion}</p>
          <div className="video-container">
            <iframe
              width="100%"
              height="315"
              src={item.video}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="modal-footer">
          <button className="modal-button danger" onClick={onClose}>Cerrar</button>
        </div>
      </div>
    </div>
  );
};

export default CardEditar;

