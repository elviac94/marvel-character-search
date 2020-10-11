import React from 'react';

const Modal = (props) => {
    const { heroData } = props

    const closeModal = () => {
        props.onCloseModal()
    }

    return (
        <div className="modal__container">
            <div className="character__modal">
            <button className="close__modal" onClick={closeModal}> Cerrar</button>
            <div className="modal__image">
                <img src={heroData.picture} alt={heroData.name} name={heroData.name}></img>
            </div>
            <h3 className="modal__name">{heroData.name}</h3>
            <p>{heroData.description}</p>
            </div>
        </div>
    )
}
export default Modal