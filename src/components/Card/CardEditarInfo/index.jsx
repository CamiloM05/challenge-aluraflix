import React from 'react';
import './CardEditarInfo.css';

const CardEditarInfo = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title">Editar Card</h2>
              <span className="close-button" onClick={onClose}>
                &times;
              </span>
            </div>
            <div className="modal-body">
              <p>Actualmente, la función no está funcionando.</p>
            </div>
            <div className="modal-footer">
              <button className="modal-button danger" onClick={onClose}>
                Close
              </button>
              <button className="modal-button primary" onClick={onClose}>
                Action
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CardEditarInfo;
