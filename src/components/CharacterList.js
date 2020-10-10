import React from 'react';
import CharacterCard from './CharacterCard';

const CharacterList = (props) =>{
const { data, openModal } = props
    return(
    <ul>{data.map(item=><li key={item.id}>
        <CharacterCard
        name={item.name}
        description={item.description}
        openModal={openModal}
        picture={item.thumbnail.path+'.'+item.thumbnail.extension}
        />
    </li>)}</ul>
    )
}
export default CharacterList