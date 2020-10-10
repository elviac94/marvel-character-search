import React from 'react';

const Modal = (props) => {

    const closeModal = () => {
        props.onCloseModal()
    }

    return (
        <div className="modal__container">
            <button className="close__modal" onClick={closeModal}> Cerrar</button>

        </div>
    )
}
export default Modal