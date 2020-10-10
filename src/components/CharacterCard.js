import React from 'react';

const CharacterCard = (props) =>{
    const { name, description, picture } = props;
    
    const onClickButton = () => {
        console.log('hola')
        props.openModal({ name, description, picture })
    }
    return(
        <>
        <div className="picture__container">
            <img src={picture} alt={name} title={name}></img>
        </div>
        <h3>{name}</h3>
        <p>{description}</p>
        <button type="button" onClick={onClickButton}>Ver detalle</button>
        </>
    )
}
export default CharacterCard;