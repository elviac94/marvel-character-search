import React from 'react';

const CharacterCard = (props) =>{
    const { name, description, picture } = props;
    
    const onClickButton = () => {
        props.openModal({ name, description, picture })
    }
    return(
        <>
        <div className="picture__container">
            <img src={picture} alt={name} title={name}></img>
        </div>
        <h3>{name}</h3>
        <button type="button" onClick={onClickButton}>Ver detalle</button>
        </>
    )
}
export default CharacterCard;