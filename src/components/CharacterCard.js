import React from 'react';

const CharacterCard = (props) =>{
    const { name, description, picture } =props;
    return(
        <>
        <div className="picture__container">
            <img src={picture} alt={name} title={name}></img>
        </div>
        <h3>{name}</h3>
        <p>{description}</p>
        </>
    )
}
export default CharacterCard;