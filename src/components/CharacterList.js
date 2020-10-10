import React from 'react';
import CharacterCard from './CharacterCard';

const CharacterList = (props) =>{
const { data } = props
    return(
    <ul>{data.map(item=><li key={item.id}>
        <CharacterCard
        name={item.name}
        description={item.description}
        picture={item.thumbnail.path+'.'+item.thumbnail.extension}
        />
    </li>)}</ul>
    )
}
export default CharacterList